---
title: "`$\\sum_{n} (-1)^{\\lfloor n\\theta \\rfloor}$` for Irrational `$\\theta$`"
date: 2019-02-21T22:56:13-06:00
categories: ["Math"]
draft: false
---

In this post we seek to prove the following theorem.

<div class="theorem">
	Let \(\theta\) be irrational. Define \(\rho_{\theta}:\mathbb{N}\to \mathbb{Z}\) by
	\[\rho_{\theta}(x)=\sum_{n=1}^{x}(-1)^{\lfloor n\theta\rfloor},\]
	then \(\rho_{\theta}\) is unbounded.
</div>

<!--more-->

For irrational `$\alpha$`, define the function `$\rho_{\alpha}:\mathbb{N}\times\mathbb{R}\to\mathbb{Z}$` by
`$$\rho_{\alpha}(x,z):=\sum_{n=1}^{x}(-1)^{\lfloor n\alpha + z\rfloor}$$`
and let `$\rho_{\alpha}(x)=\rho_{\alpha}(x,0)$`.
At this point, assume that `$\alpha$` is fixed; we will examine `$\rho_{1/\alpha}$`. Let `$\{b_n\}$` be the continued fraction of `$\alpha$`, i.e. `$\alpha=[b_0;\,b_1,b_2,\dots]$`, let `$A_n$` and `$B_n$` be the numerators and denominators of the convergents of `$\alpha$`, respectively, and let `$[x]$` denote the nearest integer function, defined as
`$$[x]=\Big\lfloor x +\frac{1}{2} \Big\rfloor.$$`
Finally, let `$E(x)=x-[x]$`.

<div class="lemma">
	For every \(x\in\mathbb{N}\), \(\rho_{1/\alpha}(x,z)\equiv x\pmod 2\).
</div>

_Proof:_ Since `$(-1)^{\lfloor n\alpha^{-1}+z\rfloor}\equiv 1\pmod 2$`, we have that `$\sum_{n=1}^x (-1)^{\lfloor n\alpha^{-1}+z\rfloor}\equiv \sum_{n=1}^x 1\pmod 2$`, giving `$\rho_{1/\alpha}(x,z)\equiv x\pmod 2$`.

<div class="lemma">
	If \(|c| < |E(n/\alpha)|\) for all \(n\le x\), then \(\rho_{1/\alpha}(x)=\rho_{1/\alpha}(x,c)\).
</div>

_Proof:_ Since `$c<E(n/\alpha)$` for all `$n\le x$`, we have that `$\lfloor n\alpha^{-1}\rfloor=\lfloor n\alpha^{-1}+c\rfloor$` for all `$n\le x$`. Thus `$\rho_{1/\alpha}(x)=\rho_{1/\alpha}(x,c)$`.

<div class="lemma">
	For every \(n\in\mathbb{N}\),
	\[\left|E\left(\frac{A_n}{\alpha}\right)\right| < \left|E\left(\frac{k}{\alpha}\right)\right| \]
	for all \(k < A_{n+1}\), \(k\neq A_n\).
</div>

_Proof:_ We will accept as fact that for all irrational numbers, the convergents of that number are best rational approximations of the second kind (a proof of this can be easily [searched](https://proofwiki.org/wiki/Convergents_are_Best_Approximations)). This means we have that
`$$|B_n\alpha - A_n| \le |q\alpha - p|$$`
for all `$p,q\in\mathbb{N}$` such that `$q < B_{n+1}$` with equality exactly when `$q=B_n$` and `$p=A_n$`. Dividing by `$\alpha$`,
`$$\left|B_n - \frac{A_n}{\alpha}\right| < \left|q-\frac{p}{\alpha}\right|$$`
for all `$p,q\in\mathbb{N}$` such that `$q<B_{n+1}$` and `$p\neq A_n$`. Noting by properties of continued fractions that `$B_n=[A_n/\alpha]$`, and similarily that `$[p/\alpha] < B_{n+1}$` for `$p < A_{n+1}$`, by letting `$p=[p/\alpha]$` we see that the above equation gives the desired result.

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
Applying Lemma 2 and Lemma 3, we have that `$\rho_{1/\alpha}(k,\, E(A_n/\alpha))=\rho_{1/\alpha}(k)$` if `$k < A_n$` and
