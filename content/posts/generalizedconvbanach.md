---
title: "Real Powers of Dirichlet Convolution&mdash;Banach Algebras"
date: 2020-02-15T18:31:39-06:00
author: Will
categories: ["Math"]
tags: ["Number Theory", "Banach Algebras", "Dirichlet Convolution"]
draft: false
---

<div class="latex-post">
In a <a href="{{< ref "generalizeddirichletconvolution.md" >}}">recent post</a>, I talked about how one can generalize the notion of a $k$-fold Dirichlet convolution to $k\in\mathbb{R}.$ In this post we present an alternative way to derive the same result.
</div>

<!--more-->

<div class="latex-post">
&emsp;&emsp;To do this we will need the notion of Banach algebras.
<div class="definition" name="Banach algebra">
A Banach algebra, $A$, is an associative $\mathbb{R}$ or $\mathbb{C}$-algebra that is also a Banach space with norm satisfying
	\begin{equation}\label{eq:banachalgcont}
		\|xy\|\le \|x\|\cdot \|y\|
	\end{equation}
	for all $x,y\in A$.
</div>
And just for completeness,
<div class="definition" name="Associative algebra">
	Let $R$ be a commutative ring. An associative $R$-algebra is a unital ring $A$ that also has the structure of an $R$-module in which scalar multiplication satisfies
	\begin{equation*}
		r\cdot (xy)=(r\cdot x)y=x(r\cdot y).
	\end{equation*}
	for all $x,y\in A$.
</div>
&emsp;&emsp;Now, how exactly does this help us? The fact I'm asserting it does should make the reader think of ways to turn the set of arithmetic functions into a Banach algebra. Indeed, this is what we do. Let $f:\mathbb{N}\to\mathbb{C}$ and define the $r$-norm of $f$ by
\begin{equation*}
	\|f\|_r=\sum_{n=1}^\infty \frac{|f(n)|}{n^r}.
\end{equation*}
Let $\mathcal{A}_r$ denote the set of arithmetic functions with finite $r$-norm. Then, we can turn $\mathcal{A}_r$ into a complex Banach algebra with scalar multiplication being pointwise and the ring operations being pointwise addition and Dirichlet convolution. All the various axioms are trivial to check, with the one point of interest being verifying \eqref{eq:banachalgcont}. Indeed,
\begin{equation*}
	\begin{aligned}
		\|f\ast g\|_r=\mathcal{D}[|f\ast g|](r) &\le \mathcal{D}[|f|\ast |g|](r) \\
		&= \mathcal{D}[|f|](r)\mathcal{D}[|g|](r) \\  
  		&= \|f\|_r\|g\|_r  
	\end{aligned}
\end{equation*}
where the second line is valid as $f,g\in \mathcal{A}_r$ implies that both $\mathcal{D}[|f|](r)$ and $\mathcal{D}[|g|](r)$ converge absolutely.<br>
&emsp;&emsp;Now, referring to an appropriate book on Banach algebras (such as Theorem 2.1.12 of <i>Banach Algebras and the General Theory of *-Algebras: Volume I Algebras and Banach Algebras</i> by Theodore W. Palmer), one knows that defining the exponential
\begin{equation*}
	e^a=\sum_{n=0}^\infty \frac{a^n}{n!}
\end{equation*}
is a very natural choice. Suffice to say, many typical rules of exponentiation hold in the manner one would hope. To complement our definition of the exponential, we also have a logarithm. Note that our Banach algebra $\mathcal{A}_r$ is unital, with $1$ being the standard Dirichlet identity
\begin{equation*}
	\varepsilon(n)=\begin{cases}
		1 & \text{if }n=1 \\
		0 & \text{otherwise}.
	\end{cases}
\end{equation*}
Now, we also know that the non-invertible elements of $\mathcal{A}_r$ are those for which $f(1)=0$. Hence, for any $f\in\mathcal{A}_r$, the spectrum of $f$ is
\begin{equation*}
	\text{Sp}(f)=\{\lambda\in\mathbb{C} : (f-\lambda\varepsilon)(1)=0\}=\{f(1)\}.
\end{equation*}
Thus, by Theorem 3.4.4 of <a href="#palmer">[1]</a>, for every invertible element $f\in\mathcal{A}_r$, there exists an element $\log(f)$ such that
\begin{equation*}
	\exp(\log f)=f.
\end{equation*}
Moreover, if $\|\varepsilon - f\|_r<1$, then
\begin{equation}\label{eq:logbanach}
	\log f=-\sum_{n=1}^\infty \frac{(\varepsilon - f)^n}{n}.
\end{equation}

<div class="exercise" id="logexercise">
	For any $c\in\mathbb{C}\setminus\{0\}$, $\log(c\cdot \varepsilon)=(\log c)\cdot\varepsilon$ where $\log c$ denotes the principal branch of the logarithm.
</div>
Slight care is needed in proving the above: Note that \eqref{eq:logbanach} is only valid when $\|\varepsilon - f\|_r<1$, which in the scenario above equates to $|1-c|<1$. To generalize beyond this, one ought to use the properties of $\log$ that follow from the properties of $\exp$, e.g.
\begin{equation*}
	\exp(a+b)=\exp(a)\exp(b)\implies \log(ab)=\log(a)+\log(b).
\end{equation*}
&emsp;&emsp;With this in hand we can make the natural generalization of $k$-fold convolution to any invertible $f$:
\begin{equation*}
	f^k=\exp(k\cdot\log f)
\end{equation*}
From this, we also have that a generalized form of the binomial theorem holds. That is, if $\|y/x\|<1$, then
\begin{equation*}
	(x+y)^r = \sum_{k=0}^\infty \binom{r}{k}x^{r-k}y^k.
\end{equation*}
We are now almost there.

<div class="exercise" id="expexercise">
	For any $c\in\mathbb{C}\setminus\{0\}$, $(c\cdot \varepsilon)^r=c^r\cdot \varepsilon$.
</div>
This result follows essentially immediately from <eq-ref refid="logexercise"></eq-ref> and the definition of $\exp$. Now note that
\begin{equation*}
	\left\|\frac{f-c\cdot\varepsilon}{c\cdot \varepsilon}\right\|_r=\frac{1}{|c|}\|f-c\cdot\varepsilon\|_r=\frac{\|f\|_r-|f(1)|+|f(1)-c|}{|c|}
\end{equation*}
Finally, if $f\in\mathcal{A}_r$, it's clear that $f\in\mathcal{A}_q$ for all $q\ge r$. Thus, choosing $r$ sufficiently large, as $\|f\|_r\to |f(1)|$ as $r\to\infty$, and letting $c=f(1)$, we have that
\begin{equation*}
	\left\|\frac{f-f(1)\cdot\varepsilon}{f(1)\cdot \varepsilon}\right\|_r<1.
\end{equation*}
Applying the binomial theorem and using <eq-ref refid="expexercise"></eq-ref> we get that
\begin{equation*}
	\begin{aligned}
		f^k=(f-f(1)\cdot\varepsilon + f(1)\cdot\varepsilon) &= \sum_{\ell=0}^\infty \binom{k}{\ell} f(1)^{k-\ell}\cdot\varepsilon \ast (f-f(1)\cdot\varepsilon)^\ell \\
		&= \sum_{\ell=0}^\infty \binom{k}{\ell} f(1)^{k-\ell}(f-f(1)\cdot\varepsilon)^\ell.
	\end{aligned}
\end{equation*}
Note that when evaluating $f^k(n)$, we can truncate the infinite series above at $\ell=\Omega(n)$, as $(f-f(1)\cdot\varepsilon)^\ell(n)=0$ for $\ell>\Omega(n)$.<br>
&emsp;&emsp;One can verify that using this, the main theorem of the last post holds, with the hypothesis that $f\in\mathcal{A}_r$ for some $r$ being equivalent to that of the old post which is $\mathcal{D}[f](s)$ converges absolutely for some $s$. A final note is that because $\|f\|_p\le\|f\|_q$ if $p\ge q$, any sequence in $\mathcal{A}_p\cap\mathcal{A}_q$ that converges in both spaces will have the same limit in each space, meaning that our definition of $f^k$ is consistent regardless of which $\mathcal{A}_r$ we view $f$ as an element of.

</div>

## References
<ol class="bibliography">
<li id="palmer">Theodore W Palmer. <i>Banach algebras and the general theory of ∗-algebras. Vol. I, volume 49 of Encyclopedia of Mathematics and its Applications</i>. Cambridge University Press, Cambridge, 2001.</li>
</ol>
