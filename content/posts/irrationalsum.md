---
title: "`$\\sum_{n} (-1)^{\\lfloor n\\theta \\rfloor}$` for Irrational `$\\theta$`"
date: 2019-02-21T22:56:13-06:00
categories: ["Math"]
draft: true
---

In this post we seek to prove the following theorem.

<div class="theorem">
	Let \(\theta\) be irrational. Define \(\rho_{\theta}:\mathbb{N}\to \mathbb{Z}\) by
	\[\rho_{\theta}(x)=\sum_{n=1}^{x}(-1)^{\lfloor n\theta\rfloor},\]
	then \(\rho_{\theta}\) is unbounded.
</div>

<!--more-->

<div class="strike">
	<span><i>The Proof</i></span>
</div>


For irrational `$\alpha$`, define the function `$\rho_{\alpha}:\mathbb{N}\times\mathbb{R}\to\mathbb{Z}$` by
`$$\rho_{\alpha}(x,z):=\sum_{n=1}^{x}(-1)^{\lfloor n\alpha + z\rfloor}$$`
and let `$\rho_{\alpha}(x)=\rho_{\alpha}(x,0)$`.
At this point, assume that `$\alpha$` is fixed; we will examine `$\rho_{1/\alpha}$`. Let `$\{b_n\}$` be the continued fraction of `$\alpha$`, i.e. `$\alpha=[b_0;\,b_1,b_2,\dots]$`, let `$A_n$` and `$B_n$` be the numerators and denominators of the convergents of `$\alpha$`, respectively, and let `$[x]$` denote the nearest integer function, defined as
`$$[x]=\Big\lfloor x +\frac{1}{2} \Big\rfloor.$$`
Finally, let `$E(x)=x-[x]$`.

<div class="lemma">
	For every \(x\in\mathbb{N}\), \(\rho_{1/\alpha}(x,z)\equiv x\pmod 2\).
</div>

_Proof:_ Since `$(-1)^{\lfloor n\alpha^{-1}+z\rfloor}\equiv 1\pmod 2$`, we have that `$\sum_{n=1}^x (-1)^{\lfloor n\alpha^{-1}+z\rfloor}\equiv \sum_{n=1}^x 1\pmod 2$`, giving `$\rho_{1/\alpha}(x,z)\equiv x\pmod 2$`. `$\blacksquare$`

<div class="lemma">
	If \(|c| < |E(n/\alpha)|\) for all \(n\le x\), then \(\rho_{1/\alpha}(x)=\rho_{1/\alpha}(x,c)\).
</div>

_Proof:_ Since `$c<E(n/\alpha)$` for all `$n\le x$`, we have that `$\lfloor n\alpha^{-1}\rfloor=\lfloor n\alpha^{-1}+c\rfloor$` for all `$n\le x$`. Thus `$\rho_{1/\alpha}(x)=\rho_{1/\alpha}(x,c)$`. `$\blacksquare$`

<div class="lemma">
	For every \(n\in\mathbb{N}\),
	\[\left|E\left(\frac{A_n}{\alpha}\right)\right| < \left|E\left(\frac{k}{\alpha}\right)\right| \]
	for all \(k < A_{n+1}\), \(k\neq A_n\).
</div>

_Proof:_ We will accept as fact that for all irrational numbers, the convergents of that number are best rational approximations of the second kind (a proof of this can be easily [searched](https://proofwiki.org/wiki/Convergents_are_Best_Approximations)). This means we have that
`$$|B_n\alpha - A_n| \le |q\alpha - p|$$`
for all `$p,q\in\mathbb{N}$` such that `$q < B_{n+1}$` with equality exactly when `$q=B_n$` and `$p=A_n$`. Dividing by `$\alpha$`,
`$$\left|B_n - \frac{A_n}{\alpha}\right| < \left|q-\frac{p}{\alpha}\right|$$`
for all `$p,q\in\mathbb{N}$` such that `$q<B_{n+1}$` and `$p\neq A_n$`. Noting by properties of continued fractions that `$B_n=[A_n/\alpha]$`, and similarily that `$[p/\alpha] < B_{n+1}$` for `$p < A_{n+1}$`, by letting `$p=[p/\alpha]$` we see that the above equation gives the desired result. `$\blacksquare$`

<div class="lemma">
	For all \(k < A_{n+1}\),
	\[\rho_{1/\alpha}(A_n+k)=\rho_{1/\alpha}(A_n)+(-1)^{B_n}\rho_{1/\alpha}(k).\]
</div>

_Proof:_ We may write `$\rho_{1/\alpha}(A_n+k)$` as
`$$\begin{aligned}
\rho_{1/\alpha}(A_n + k) &= \rho_{1/\alpha}(A_n)+\rho_{1/\alpha}(k,\, A_n/\alpha) \\
&= \rho_{1/\alpha}(A_n) + \sum_{n=1}^k (-1)^{\lfloor n\alpha^{-1}+B_n+E(A_n/\alpha)\rfloor} \\
&= \rho_{1/\alpha}(A_n)+(-1)^{B_n}\rho_{1/\alpha}(k,\, E(A_n/\alpha)).
\end{aligned}$$`
Applying Lemma 2 and Lemma 3, we have that `$\rho_{1/\alpha}(k,\, E(A_n/\alpha))=\rho_{1/\alpha}(k)$` if `$k < A_n$` and `$\rho_{1/\alpha}(k, E(A_n/\alpha))=\rho_{1/\alpha}(k)-(-1)^{\lfloor A_n\alpha^{-1}\rfloor} + (-1)^{\lfloor A_n\alpha^{-1}+E(A_n/\alpha)\rfloor}=\rho_{1/\alpha}(k)$` if `$k\ge A_n$` since `$\lfloor x\rfloor = \lfloor x+E(x)\rfloor$`. Plugging this into the equation above gives the desired result. `$\blacksquare$`

To complete the prove of our main theorem we introduce some properties of continued fractions.

<div class="proposition">
	Let \(A_n\) and \(B_n\) be the numerators and denominators, respectively, of the continued fraction of some irrational number \(x\), then
	\[A_nB_{n-1}-A_{n-1}B_n=(-1)^{n+1}.\]
</div>

This is simply a property of continued fractions that one can readily verify or search. A useful corollary of this for our purposes is the following.

<div class="corollary">
	Infinitely many of \(\{A_n\}\) are even or infinitely many of \(\{B_n\}\) are even.
</div>

<div class="proposition">
	Let \(x=[b_0;\, b_1,b_2,\dots]\) with \(\{A_n\}\) \(\{B_n\}\) the set of numerators and denominators, respectively, of the continued fractions of \(x\). Then \(A_n=b_nA_{n-1}+A_{n-2}\) and \(B_n=b_nB_{n-1}+B_{n-2}\).
</div>

This gives us everything we need to complete the proof.

<div class="theorem">
	\(\rho_{1/\alpha}(x)\) is unbounded.
</div>

_Proof:_ From Corollary 1, infinitely many of `$\{A_n\}$` are even or infinitely many of `$\{B_n\}$` are even. Suppose infinitely many of `$\{B_n\}$` are even. Let `$m\in\mathbb{Z}\setminus \{0\}$` and let `$(n_i)_{i=1}^m$` be a finite sequence of positive integers such that `$B_{n_i}$` is even for all `$i$` and all `$\rho_{1/\alpha}(A_{n_i})$` have the same sign. Since `$B_{n_i}$` is even for all `$i$`, `$A_{n_i}$` is odd for all `$i$` (by Proposition 1) and `$\rho_{1/\alpha}(A_{n_i})$` is never `$0$` by Lemma 1. Then, by using Lemma 4 iteratively,
`$$\begin{aligned}
\left|\rho_{1/\alpha}\left(\sum_{i=1}^m A_{n_i}\right)\right| &= \left|\rho_{1/\alpha}(A_{n_1})+\rho_{1/\alpha}\left(\sum_{i=2}^m A_{n_i}\right)\right| \\
&\qquad\vdots \\
&= \left|\sum_{i=1}^m \rho_{1/\alpha}(A_{n_i})\right|\ge m.
\end{aligned}$$`
Now suppose that there are finitely many even `$B_{i}$`. Then there exists a `$k$` such that for all `$n\ge k$`, `$B_n$` is odd. Let `$n\ge k+2$`. Thus, `$b_n$` is even by Proposition 2 and `$A_n$` and `$A_{n+1}$` are of opposite parity (meaning they alternate even, odd, even, odd, etc...) by Proposition 1. By Proposition 2 and Lemma 4,
`$$\begin{aligned}
\rho_{1/\alpha}(A_n) &= \rho_{1/\alpha}(b_nA_{n-1}+A_{n-2}) \\
&= \rho_{1/\alpha}(A_{n-1})-\rho_{1/\alpha}((b_n - 1)A_{n-1}+A_{n-2}) \\
&= \rho_{1/\alpha}((b_n - 2)A_{n-1}+A_{n-2}) \\
&\qquad\vdots \\
&= \rho_{1/\alpha}(A_{n-2}).
\end{aligned}$$`
Thus, if `$A_n$` is even, `$\rho_{1/\alpha}(A_n)=a$` and if `$A_n$` is odd, `$\rho_{1/\alpha}(A_n)=b$` for some constants `$a$` and `$b$`. Moreover, `$a\neq b$` by Lemma 1. Finally, let `$(n_i)_{i=1}^m$` be a decreasing sequence of positive integers greater than or equal to `$k+2$` that alternate in parity between successive elements. Then, by Lemma 4,
`$$\begin{aligned}
\left|\rho_{1/\alpha}\left(\sum_{i=1}^m A_{n_i}\right)\right| &= \left|\rho_{1/\alpha}(A_{n_1})-\rho_{1/\alpha}\left(\sum_{i=2}^m A_{n_i}\right)\right| \\
&= \left|\rho_{1/\alpha}(A_{n_1})-\rho_{1/\alpha}(A_{n_2})+\rho_{1/\alpha}\left(\sum_{i=3}^m A_{n_i}\right)\right| \\
&\qquad\vdots \\
&= \left|\sum_{i=1}^m (-1)^{i+1}\rho_{1/\alpha}(A_{n_i})\right| \\
&\ge |a-b|\left\lfloor\frac{m}{2}\right\rfloor\ge \left\lfloor\frac{m}{2}\right\rfloor.
\end{aligned}$$`
Thus, `$\rho_{1/\alpha}$` is unbounded. `$\blacksquare$`

Since in the beginning we fixed `$\alpha$` as an arbitrary irrational number, we have now proved the original theorem we sought out to prove.
