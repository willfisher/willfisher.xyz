---
title: "Jeopardy"
date: 2020-07-01T22:20:26-05:00
author: Will
categories: ["Math", "Cryptography"]
tags: ["Elliptic Curves", "Number Theory"]
draft: false
---

In this post I talk about a write up for a problem named `Jeopardy` that I encountered recently during redpwnCTF 2020. Despite having the exact idea correct, I didn't manage to solve the problem during the competition. Here I go over the solution.

<!--more-->

## Problem overview

&emsp;&emsp;We are given the following source code of the server:

<details><summary>Server source code</summary>

```python
#!/usr/bin/env sage
import random
import time
import asyncio
import traceback

flag = open('flag.txt','r').read()

def isPrime(n):
    if n == 2: return True
    if n%2 == 0: return False
    r,d = 0,n-1
    while d%2 == 0: r += 1; d //= 2
    for k in range(1):
        a = random.randint(2,n-2)
        x = pow(a,d,n)
        if x == 1 or x == n-1: continue
        for i in range(r-1):
            x = pow(x,2,n)
            if x == n-1: continue
        else: return False
    return True


async def handle_conn(reader, writer):
    async def prompt(ptext):
        writer.write(ptext.encode())
        await writer.drain()
        return (await reader.readline()).decode()

    try:
        BITS = 200

        a = Integer(await prompt('a: '))
        b = Integer(await prompt('b: '))
        p = Integer(await prompt('p: '))

        E = EllipticCurve(GF(p), [a,b])
        assert E.order().nbits() >= BITS
        assert E.order() != p
        assert isPrime(E.order())

        G = E.gens()[0]
        writer.write(f'{G}\n'.encode())
        secret = random.randint(1,E.order()-1)
        pub = G * secret
        writer.write(f'{pub}\n'.encode())

        user = int(await prompt('secret?'))
        if user == secret:
            writer.write(f'{flag}\n'.encode())
            await writer.drain()
    except Exception:
        writer.write(traceback.format_exc(2).encode())
    finally:
        await writer.drain()
        writer.close()
        await writer.wait_closed()


async def main():
    server = await asyncio.start_server(handle_conn, '0.0.0.0', 9999)

    addr = server.sockets[0].getsockname()
    print(f'Listening on {addr}')

    async with server:
        await server.serve_forever()

asyncio.run(main())
```

</details>

&emsp;&emsp;This was a golf challenge, so the value of `BITS` began at `250` and decreased as the competition went on, up until the first solve, which fixed the bit count for the rest of the submissions. So we see what needs to be done: We need to chose an elliptic curve in which the discrete log problem is easy subject to the condition that
```python
E = EllipticCurve(GF(p), [a,b])
assert E.order().nbits() >= BITS
assert E.order() != p
assert isPrime(E.order())
```
passes.

&emsp;&emsp;The first thing one ought to notice is that the problem uses its own prime checking method, rather than a sage builtin. This immediately raises suspicion. Checking out the `isPrime` method, we see its a butchered implementation of Miller-Rabin, with a single check. I say butchered, because the `continue` in the inner loop should actually cause the outer loop to continue. As a result of this mistake, we can shorten the code of the `isPrime` method to

```python
def isPrime(n):
    if n == 2: return True
    if n%2 == 0: return False
    r,d = 0,n-1
    while d%2 == 0: r += 1; d //= 2

    a = random.randint(2,n-2)
    x = pow(a,d,n)
    return x == 1 or x == n-1
```
How is this all relevant? Well, one of the most common settings in which the discrete log problem is easy is in groups of smooth order. The Pohlig-Hellman algorithm tells us that in a group of order `$n$`, the discrete log problem can be solved in `$\mathcal{O}(\omega(n)\cdot(\log n + \sqrt{p_n}))$` time where `$p_n$` is the largest prime factor of `$n$`. Thus, an immediate idea becomes to trick the `isPrime` function into allowing us to use an elliptic curve of smooth order.

## Analysis of the `isPrime` method

<div class="latex-post">

&emsp;&emsp;Referring to our shortening of the <code>isPrime</code> method, we see that we want to find numbers $n$ such that
\begin{equation}\label{primecondition}
a^{(n-1)/2^{\nu_{2}(n-1)}}\equiv\pm 1\pmod n
\end{equation}
holds for a large proportion of $a\in \mathbb{Z}/n\mathbb{Z}$. This immediately brings to mind Carmichael numbers, i.e. numbers $n$ such that
\begin{equation}\label{carmichaelcond}
	a^{n-1}\equiv 1\pmod n
\end{equation}
for all $a\in (\mathbb{Z}/n\mathbb{Z})^\times$. Now suppose $n$ is a Carmichael number. For further analysis, we need the following elementary result:
</div>
<div class="proposition" id="prop:numsols">
    Let $n=p_1^{\alpha_1}\cdots p_m^{\alpha_m}$ be odd and $\text{gcd}(y,n)=1$. Then, $x^k\equiv y\pmod n$ has a solution if and only if $(k, \varphi(p_i^{\alpha_i}))\mid \varphi(p_i^{\alpha_i})/\text{ord}_{p_i^{\alpha_i}}(y)$ for all $i=1,\dots,m$, in which case there are exactly
    \begin{equation*}
        \prod_{i=1}^m \text{gcd}(k, \varphi(p_i^{\alpha_i}))
    \end{equation*}
    solutions.
</div>
<div class="proof">
    By the Chinese Remainder Theorem, $(\mathbb{Z}/n\mathbb{Z})^\times\cong (\mathbb{Z}/p_1^{\alpha_1}\mathbb{Z})^\times\times\cdots\times(\mathbb{Z}/p_m^{\alpha_m}\mathbb{Z})^\times$, so $x$ is a solution if and only if
    \begin{equation}\label{propeq1}
        x^k\equiv y\pmod{p_i^{\alpha_i}}
    \end{equation}
    for all $i=1,\dots,m$. Now, $(\mathbb{Z}/p_i^{\alpha_i}\mathbb{Z})^\times$ is cyclic, so let $g_i$ be a generator. Then, if $\text{ind}_{g_i}(y)$ is the index of $y$ with respect to $g_i$, writing $x=g^j$ we see \eqref{propeq1} is equivalent to solving
    \begin{equation*}
        jk\equiv \text{ind}_{g_i}(y)\pmod{\varphi(p_i^{\alpha_i})}
    \end{equation*}
    which has a solution if and only if $(k, \varphi(p_i^{\alpha_i}))\mid \text{ind}_{g_i}(y)$ in which case there are exactly $(k, \varphi(p_i^{\alpha_i}))$ solutions. Now,
    \begin{equation*}
        \text{ord}_{p_i^{\alpha_i}}(y) = \frac{\varphi(p_i^{\alpha_i})}{(\text{ind}_{g_i}(y), \varphi(p_i^{\alpha_i}))},
    \end{equation*}
    so solvability is equivalent to $(k, \varphi(p_i^{\alpha_i}))\mid \varphi(p_i^{\alpha_i})/\text{ord}_{p_i^{\alpha_i}}(y)$. Lifting back up using the Chinese Remainder Theorem completes the proof.
</div>

Finally, to complete the analysis we need Korselt's criterion for Carmichael numbers:
<div class="theorem" id="korselt" name="Korselt's Criterion">
	A number $n$ is a Carmichael number if and only if $n$ is square-free and $p-1\mid n-1$ for all prime divisors $p$ of $n$.
</div>

<div class="latex-post">
We also know $n$ must be odd by considering $a=-1$. Thus, write $n=p_1p_2\cdots p_m$ where $p_1,\dots,p_m$ are distinct odd primes and let $\ell=\nu_2(n-1)$, $\ell_i = \nu_2(p_i - 1)$. We then know the probability that \eqref{primecondition} holding for an arbitrary $a\in (\mathbb{Z}/n\mathbb{Z})^\times$ is
\begin{equation*}
	\begin{aligned}
		\frac{2\prod_{i=1}^{m}((n-1)/2^\ell, \varphi(p_i))}{\varphi(n)} &= \frac{2\prod_{i=1}^{m}(p_i - 1)/2^{\ell_i}}{\varphi(n)} \\
        &= 2^{1-\sum_i \ell_i},
	\end{aligned}
\end{equation*}
where we use both <eq-ref refid="prop:numsols"></eq-ref> and Korselt's Criterion. Since we are not guaranteed to pick a coprime integer, the true probability of $n$ passing the <code>isPrime</code> function is
\begin{equation*}
    2^{1-\sum_i \ell_i}\cdot \frac{\varphi(n)}{n},
\end{equation*}
but for $n$ large, this additional factor is rather negligible.
</div>

## The final piece

&emsp;&emsp;Having properly analyzed the `isPrime` function, for which one can just look up large Carmichael numbers and find one with high probability of passing, it remains to construct an elliptic curve of this order. For this, there's an [excellent thesis](https://www.math.leidenuniv.nl/scripties/Broker.pdf) by Broker. Essentially, using complex multiplication, we can construct on elliptic curve `$E/\mathbb{F}_p$` with trace of Frobenius `$t$`. Thus if we have a prime `$p$` and `$t$` such that `$N=p+1-t$` we are theoretically done. However, the bottleneck of this algorithm is in computing the Hilbert class polynomial `$P_{\Delta}$` where `$\Delta=t^2-4p$`. However, it suffices to compute the class polynomial `$P_D$` where `$D=\text{disc}(\mathbb{Q}(\sqrt{\Delta}))$`. Since `$N$` is the only fixed value, the paper presents an efficient algorithm for finding such `$p$` so that `$D$` is small. The implemented version of Broker's algorithm is below:

<details><summary>Generating curves of prescribed order</summary>

```python
# Constructing Elliptic Curves of Prescribed Order, Reinier Martjn Broker
# http://web.math.leidenuniv.nl/scripties/Broker.pdf

import random

# Solves the discriminant problem
def minimal_discriminant(N, factors = None):
	# Make sure we have the factors of N
	if factors: assert(reduce(lambda prod,f : prod*f[0]**f[1], factors, 1) == N)
	else: factors = factor(N)

	# Get the square divisors of N
	S = [1]
	for p,f in factors:
		S0 = []
		for e in range(0, f//2 + 1):
			S0 += [s*p**e for s in S]
		S = S0

	d = 0
	while True:
		d += 1
		if not is_squarefree(d):
			continue

		# Write the ring of integers of Q(sqrt(-d)) as Z[w]
		K.<a> = QuadraticField(-d)
		Zw = K.ring_of_integers()
		w = a if (-d) % 4 != 1 else (a + K(1)) / K(2)
		w = Zw(w)

		# Get the units of Z[w]
		U = [Zw(1), Zw(-1)]
		if d == 1:
			U += [w, -w]
		elif d == 3:
			U += [w, -w, w*w, -w*w]

		D = K.discriminant()
		k1 = 1
		fail = False
		for p,f in factors:
			chi = kronecker(D, p)
			# p in inert in Z[w]
			if chi == -1:
				if f % 2 == 0:
					k1 *= p**(f//2)
				else:
					fail = True
					break
			# p ramifies in Z[w]
			elif chi == 0:
				k1 *= p**(f//2)
		if fail: continue

		N1 = N // k1**2
		ZN1 = Integers(N1)

		PR.<x> = ZN1[]
		f = x^2 + ZN1(d) if (-d) % 4 != 1 else x^2 - x + ZN1((d + 1) // 4)
		R = f.roots(multiplicities=False)

		for r in R:
			for k2 in S:
				k = k1*k2
				N0 = N1 // k2**2

				I = Zw.ideal(Zw(N0), w - Zw(r))
				G = I.gens_reduced()
				# If I is not principal, continue
				if len(G) > 1:
					continue
				g = G[0]

				# Iterate over all generators g for I by multiplying by units
				for u in U:
					alpha0 = g*u
					alpha = Zw(k)*alpha0
					if Integer((1 - alpha).norm()) in Primes():
						# This check shouldnt be necessary, but for some reason it can fail otherwise
						if Integer(alpha.norm()) == N:
							return d,alpha

# Generates an elliptic curve of order N
def generate_curve(N, factors = None):
	if N <= 6:
		raise Exception("Cannot generate curves of order <= 6")

	print(f"Looking for a curve of order {N}")
	d,alpha = minimal_discriminant(N, factors = factors)

	print(f"Found d as {d}")
	print(f"Alpha has norm {Integer(alpha.norm())}")

	p = Integer((1-alpha).norm())
	D = QuadraticField(-d).discriminant()

	FF = GF(p)

	Pdelta = hilbert_class_polynomial(D)
	j = Pdelta.change_ring(FF).roots(multiplicities=False)[0]

	if j == 0:
		E = EllipticCurve(FF, [0,1])
	elif j == 1728:
		E = EllipticCurve(FF, [1, 0])
	else:
		a = 27*j / (4*(1728 -  j))
		E = EllipticCurve(FF, [a, -a])

	if E.order() == N:
		return E

	E = E.quadratic_twist()
	if E.order() == N:
		return E

	raise Exception(f"Failed to find a curve of order {N}")

if __name__ == '__main__':
	# Test the function
	for i in range(20):
		generate_curve(random.randint(1000, 100000))
```

</details>

For some strange reason, the algorithm struggles if `minimal_discriminant` returns with `$d=1$` or `$d=3$`. As a quick-fix, you could just yield the value of the function, and keep going if it fails.
