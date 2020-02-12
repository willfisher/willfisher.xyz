---
title: "Real Powers of Dirichlet Convolution"
date: 2020-02-12T16:32:21-06:00
author: Will
draft: false
---

In this post, we wish to consider generalizing the notion of iterated Dirichlet convolution. If `$f$`, `$g$` are arithmetic functions, then one can define the *Dirichlet convolution* to be
`$$
	(f\ast g)(n)=\sum_{d\mid n}f(d)g(n/d).
$$`
From this, one can naturally consider
`$$
	f^{k\ast}=\underbrace{f\ast f\ast\cdots\ast f}_{k\text{ times}}.
$$`
It is this notion that we will generalize, with the goal being to be able to let `$k\in\mathbb{R}$`, retaining all the nice properties that we have for `$k\in\mathbb{N}$`.

<!--more-->

Let `$f:\mathbb{N}\to\mathbb{R}$` be an arithmetic function with `$f(1)> 0$`. Define for primes `$p_1,\dots,p_m$` the function `$F_{p_1,\dots,p_m}:\mathbb{N}_{\ge 0}^m\to \mathbb{R}$` by
`$$
    F_{p_1,\dots,p_m}(t_1,\dots,t_m)=f\left(\prod_{i=1}^m p_i^{t_i}\right).
$$`
If `$\ast$` is Dirichlet convolution, then we have that
`$$
    \begin{aligned}
        (f\ast f)(p^n) &= \sum_{a+b=n}f(p^a)f(p^b) \\
        &= \sum_{a+b=n}F_p(a)F_p(b).
    \end{aligned}
$$`
The latter equation resembles a Cauchy-type convolution, which is some ways is easier to understand. We can generalize this Cauchy-type convolution to get
`$$
    F_{p_1,\dots, p_m}^{k\circ_m}(\mathbf{r})=\sum_{\mathbf{x}_i\vdash \mathbf{r}}\prod_{i=1}^m F_{p_1,\dots, p_m}(\mathbf{x}_i).
$$`
where the notation `$\mathbf{x}_i\vdash \mathbf{r}$` denotes summing over all `$\mathbf{x}_i\in\mathbb{N}_{\ge 0}^m$`, `$i=1,\dots,k$`, such that `$\sum_{i=1}^k \mathbf{x}_i=\mathbf{r}$`. In this case, we again have
`$$
    f^{k\ast}\left(\prod_{i=1}^m p_i^{r_i}\right)=F^{k\circ_m}_{p_1,\dots,p_m}(r_1,\dots,r_m)
$$`
for all `$k\in\mathbb{N}$`.

Let
`$$
    G_F(\mathbf{x})=\sum_{\mathbf{t}\in\mathbb{N}_{\ge 0}^m}F_{p_1,\dots,p_m}(\mathbf{t})\mathbf{x}^{\mathbf{t}}.
$$`
where
`$$
    \mathbf{x}^{\mathbf{t}}=\prod_{i=1}^m x_i^{t_i}
$$`
be the generating function of `$F_{p_1,\dots,p_m}$`. In the notation of `$G_F$` we omit `$p_1,\dots,p_m$`, but will write `$G_{F_{p_1,\dots,p_m}}$` if it is unclear from context. If `$G_F$` converges absolutely at `$\mathbf{x}=\mathbf{x}_0$`, then for `$k\in\mathbb{N}$`
`$$
    G_F(\mathbf{x}_0)^k=\sum_{\mathbf{t}\in\mathbb{N}_{\ge 0}^m}F_{p_1,\dots,p_m}^{k\circ_m}(\mathbf{t})\mathbf{x_0}^{\mathbf{t}}.
$$`
Suppose `$G_F(\mathbf{x})$` converges absolutely and uniformly in a neighborhood of `$\mathbf{0}$`, then we have that
`$$
    F_{p_1,\dots,p_m}^{k\circ_m}(\mathbf{r})=D_{\mathbf{x}}^{\mathbf{r}}G_F^k(\mathbf{0})
$$`
where
`$$
    D_{\mathbf{x}}^{\mathbf{r}}G=\frac{\partial^{r_1+\cdots+r_m}}{\partial x_1^{r_1}\cdots \partial x_m^{r_m}}G.
$$`

<span class="proposition" id="prop:realkdef">
    Let `$n=p_1^{r_1}\cdots p_m^{r_m}$` and suppose `$G_F$` converges absolutely and uniformly in a neighborhood of `$\mathbf{0}$`. Then, letting
    `$$
        f^{k\ast}\left(\prod_{i=1}^m p_i^{r_i}\right)=F_{p_1,\dots,p_m}^{k\circ_m}(\mathbf{r})=D_{\mathbf{x}}^{\mathbf{r}}G_F^k(\mathbf{0}),
    $$`
    we have
    `$$
        f^{k\ast}(n) = \sum_{\ell = 0}^{\Omega(n)}\binom{k}{\ell}f(1)^{k-\ell}[f\cdot(1-\varepsilon)]^{\ell\ast}(n).
    $$`
</span>
<span class="proof">
    Let `$n=\prod_{i=1}^m p_i^{r_i}$` with `$N=r_1+\cdots+r_m$` and let `$F(x_1,\dots, x_m)$` be the generating function for `$F_{p_1,\dots, p_m}$`. Moreover, let `$\boldsymbol r=(r_1,\dots, r_m)$`. Applying Savits and Constantine's multivariate formulation of Faà di Bruno's formula from <a href="#constantine">[1]</a> we get that when `$n\neq 1$`,
    `$$\tag{1}\label{multifaadibruno}
        D_{\boldsymbol{x}}^{\boldsymbol{r}}G_F^k(0,\dots, 0)=\boldsymbol{r}!\sum_{\ell = 1}^{N}\frac{k!}{(k-\ell)!}G_F(0,\dots,0)^{k-\ell}\sum_{s=1}^{N}\sum_{p_s(\boldsymbol r, \ell)}\prod_{j=1}^s \frac{[D_{\boldsymbol x}^{\boldsymbol{\ell}_j}G_F(0,\dots, 0)]^{k_j}}{k_j![\boldsymbol{\ell}_j!]^{k_j}}
    $$`
    where
    `$$
        p_s(\boldsymbol{r}, \ell)=\{(k_1,\dots, k_s; \boldsymbol{\ell}_1,\dots, \boldsymbol{\ell}_s)\,:\, k_i>0, \, \boldsymbol{0}\prec \boldsymbol{\ell}_1\prec\cdots\prec\boldsymbol{\ell}_s,\, \sum_{i=1}^s k_i=\ell,\, \sum_{i=1}^s k_i\boldsymbol{\ell}_i=\boldsymbol{r}\}
    $$`
    and the order `$\prec$` is defined by if `$\boldsymbol{\mu}=(\mu_1,\dots, \mu_m)$` and `$\boldsymbol{\nu}=(\nu_1,\dots, \nu_m)$`, then `$\boldsymbol{\mu}\prec\boldsymbol{\nu}$` if and only if
	<ul>
	<li> `$\sum \mu_i < \sum \nu_i$` </li>
    <li> `$\sum \mu_i = \sum \nu_i$` and for some `$1\le k\le m$`, `$\mu_k < \nu_k$` with `$\mu_j = \nu_j$` for all `$j<k$`.</li>
	</ul>
    Using `$D_{\boldsymbol{x}}^{\boldsymbol{\nu}}G_F^k(0,\dots, 0)=\boldsymbol{\nu}! f^{k\ast}(\prod_{i=1}^m p_i^{\nu_i})$` we have that \eqref{multifaadibruno} gives
    `$$
        f^{k\ast}\left(\prod_{i=1}^m p_i^{r_i}\right)=\sum_{\ell = 1}^{N}\frac{k!}{(k-\ell)!}f(1)^{k-\ell}\sum_{s=1}^N \sum_{p_s(\boldsymbol{r},\ell)}\prod_{j=1}^s \frac{f\left(\prod_{i=1}^m p_i^{\ell_{j,i}}\right)^{k_j}}{k_j!}
    $$`
    At this point notice that if `$\boldsymbol{\ell}_j\neq \boldsymbol{\ell}_i$` then either `$\boldsymbol{\ell}_i\prec \boldsymbol{\ell}_j$` or `$\boldsymbol{\ell}_j\prec \boldsymbol{\ell}_i$`. Thus replacing the condition that `$\boldsymbol{0}\prec \boldsymbol{\ell}_1\prec\cdots\prec\boldsymbol{\ell}_s$` with `$\boldsymbol{0}\prec \boldsymbol{\ell}_i$` for all `$i$` and `$\boldsymbol{\ell}_i\neq\boldsymbol{\ell}_j$` for all `$i\neq j$` simply comes at the expense of `$s!$` duplicates. Thus define
    `$$
        p_s'(\boldsymbol{r}, \boldsymbol{k}, \ell)=\{(\boldsymbol{\ell}_1,\dots, \boldsymbol{\ell}_s)\,:\, \boldsymbol{0}\neq \boldsymbol{\ell}_i \text{ for all } i,\, i\neq j\Rightarrow \boldsymbol{\ell}_i\neq\boldsymbol{\ell}_j,\, \sum_{i=1}^s k_i\boldsymbol{\ell}_i=\boldsymbol{r}\}
    $$`
    then
    `$$
        f^{k\ast}\left(\prod_{i=1}^m p_i^{r_i}\right)= \sum_{\ell = 1}^{N}\frac{k!}{(k-\ell)!}f(1)^{k-\ell}\sum_{s=1}^N \frac{1}{s!}\sum_{\substack{\boldsymbol{k}\vdash \ell \\ \boldsymbol{k}\in\mathbb{N}^s}}\sum_{p_s'(\boldsymbol{r},\boldsymbol{k},\ell)}\prod_{j=1}^s \frac{f\left(\prod_{i=1}^m p_i^{\ell_{j,i}}\right)^{k_j}}{k_j!}
    $$`
    Notice now that because the elements of `$p_s'(\boldsymbol{r}, \boldsymbol{k}, \ell)$` satisfy `$\sum k_i\boldsymbol{\ell}_i=\boldsymbol{r}$` the elements of `$p_s'(\boldsymbol{r}, \boldsymbol{k}, \ell)$` are in direct correspondence to the elements of `$\{(d_1,\dots,d_s)\, :\, d_1^{k_1}\cdots d_s^{k_s}=\prod_{i=1}^m p_i^{r_i}\}$` via
    `$$
        d_i=\prod_{i=1}^{m}p_i^{\boldsymbol{\ell}_{j,i}}.
    $$`
    Moreover, `$\boldsymbol{\ell}_i=\boldsymbol{0}$` if and only if `$d_i=1$` and `$\boldsymbol{\ell}_i=\boldsymbol{\ell}_j$` if and only if `$d_i=d_j$`. Hence we have that
    `$$
        f^{k\ast}\left(\prod_{i=1}^m p_i^{r_i}\right)= \sum_{\ell = 1}^{N}\frac{k!}{(k-\ell)!}f(1)^{k-\ell}\sum_{s=1}^N \frac{1}{s!}\sum_{\substack{\boldsymbol{k}\vdash \ell \\ \boldsymbol{k}\in\mathbb{N}^s}}\sum_{\substack{d_1^{k_1}\cdots d_s^{k_s}=\prod p_i^{r_i} \\ d_i>1 \\ d_i\neq d_j}}\prod_{j=1}^s \frac{f\left(d_i\right)^{k_j}}{k_j!}.
    $$`
    At this point we are able to let `$n=\prod_{i=1}^{m}p_i^{r_i}$` and express `$f^{k\ast}(n)$` without making direct reference to `$n$`'s prime factorization. Doing this yields
    `$$
        f^{k\ast}(n) = \sum_{\ell = 1}^{\Omega(n)}\frac{k!}{(k-\ell)!}f(1)^{k-\ell}\sum_{s=1}^{\Omega(n)}\frac{1}{s!}\sum_{\substack{\boldsymbol{k}\vdash \ell \\ \boldsymbol{k}\in\mathbb{N}^s}}\sum_{\substack{d_1^{k_1}\cdots d_s^{k_s}=n \\ d_i > 1 \\ d_i\neq d_j}}\prod_{i=1}^s\frac{f(d_i)^{k_i}}{k_i!}
    $$`
    Now we make sense of the internal summation. Notice that since `$\sum k_i=\ell$` we are really just summing over all `$d_1\cdots d_{\ell}=n$` where there are `$s$` distinct divisors. However, to avoid double counting, we divide by `$s!$`, i.e. the number of ways the blocks of similar divisors can be arranged, then by `$\prod k_i!$`, i.e. the number of ways equal divisors can be permuted among their "blocks" of other equal divisors. Thus
    `$$
        \sum_{s=1}^{\Omega(n)}\frac{1}{s!}\sum_{\substack{\boldsymbol{k}\vdash \ell \\ \boldsymbol{k}\in\mathbb{N}^s}}\sum_{\substack{d_1^{k_1}\cdots d_s^{k_s}=n \\ d_i > 1 \\ d_i\neq d_j}}\prod_{i=1}^s\frac{f(d_i)^{k_i}}{k_i!}=\frac{1}{\ell!}\sum_{\substack{d_1\cdots d_{\ell}=n \\ d_i>1}}\prod_{i=1}^{\ell}f(d_i)
    $$`
    where instead of introducing `$s$` and `$\boldsymbol{k}$` to avoid double counting, we simple divide by `$\ell!$` to eliminate duplicates formed by permuting the `$d_i$`'s. Finally, we arrive at
    `$$
        \begin{aligned}
            f^{k\ast}(n) &= \sum_{\ell = 1}^{\Omega(n)}\binom{k}{\ell}f(1)^{k-\ell}\sum_{\substack{d_1\cdots d_{\ell}=n \\ d_i > 1 }}\prod_{i=1}^{\ell}f(d_i) \\
            &= \sum_{\ell = 1}^{\Omega(n)}\binom{k}{\ell}f(1)^{k-\ell}[f\cdot(1-\varepsilon)]^{\ell\ast}(n)
        \end{aligned}
    $$`
    for the case `$n>1$`. The proof is completed by noticing that beginning indexing at `$\ell = 0$` accounts for the case `$n=1$` without affecting the `$n\neq 1$` case.
</span>

<span class="lemma" id="lemma:absoluteconvergenceequiv">
    Let `$\mathbb{P}$` be the set of primes and `$P=\{p_1,\dots,p_m\}\subseteq \mathbb{P}$`. Then
    `$$
        \sum_{\{p\in\mathbb{P} : p\mid n\}\subseteq P_m}\frac{f(n)}{n^s},
    $$`
    which sums over all `$n$` whose prime factors lie in `$P$`, is absolutely convergent if and only `$G_{F_{p_1,\dots,p_m}}(p_1^{-s},\dots, p_m^{-s})$` is.
</span>
<span class="proof">
    Simply note that by definition, if one of the above is absolutely convergent, then the other is simply a re-arrangement of the other.
</span>

<span class="lemma" id="lemma:absuniformconv">
    If `$\mathcal{D}[f](s_0)$` converges absolutely, then `$G_{F_{p_1,\dots,p_m}}$` converges absolutely and uniformly for `$\|\mathbf{x}\|<\max\{p_i\}^{-\Re(s_0)}$`.
</span>
<span class="proof">
    By <eq-ref refid="lemma:absoluteconvergenceequiv"></eq-ref>, `$G_{F_{p_1,\dots,p_m}}(p_1^{-s},\dots, p_m^{-s})$` converges absolutely. Now, if `$\|\mathbf{x}\|<\max\{p_i\}^{-\Re(s_0)}$`, then
    `$$
        \begin{aligned}
            \sum_{\mathbf{t}\in\mathbb{N}_{\ge 0}^m}|F_{p_1,\dots,p_m}(\mathbf{t})|\cdot |\mathbf{x}^{\mathbf{t}}| &\le  \sum_{\mathbf{t}\in\mathbb{N}_{\ge 0}^m}|F_{p_1,\dots,p_m}(\mathbf{t})|\cdot \|\mathbf{x}\|_{\infty}^{t_1+\cdots +t_m} \\
            &\le \sum_{\mathbf{t}\in\mathbb{N}_{\ge 0}^m}|F_{p_1,\dots,p_m}(\mathbf{t})|\cdot \max\{p_i\}^{-\Re(s_0)(t_1+\cdots +t_m)} \\
            &\le \sum_{\mathbf{t}\in\mathbb{N}_{\ge 0}^m}|F_{p_1,\dots,p_m}(\mathbf{t})|\cdot \prod_{i=1}^m p_{i}^{-\Re(s_0)t_i},
        \end{aligned}
    $$`
    where the last line we know converges. The result then follows from the Weierstrass M-test.
</span>

<span class="proposition" id="prop:dirichletseries">
    Suppose `$\mathcal{D}[f](s)$` converges absolutely, then `$\mathcal{D}[f^{k\ast}](s)=\mathcal{D}[f](s)^k$` for all `$k\in\mathbb{R}$`.
</span>
<span class="proof">
    By <eq-ref refid="lemma:absuniformconv"></eq-ref>, the reference to `$f^{k\ast}$` is well defined by <eq-ref refid="prop:realkdef"></eq-ref>. Let `$P_m=\{p_1,\dots,p_m\}$` be the first `$m$` primes. Formally, we have
    `$$
        \begin{aligned}
            \left(\sum_{\{p\in\mathbb{P} : p\mid n\}\subseteq P_m}\frac{f(n)}{n^s}\right)^k &= \left(\sum_{\mathbf{t}\in\mathbb{N}_{\ge 0}^m}F_{p_1,\dots,p_m}(\mathbf{t})\mathbf{x}^{\mathbf{t}}\right)^k\Bigg|_{x_i=p_i^{-s}} \\
            &= \sum_{\mathbf{t}\in\mathbb{N}_{\ge 0}^m}F^{k\circ_m}_{p_1,\dots,p_m}(\mathbf{t})\mathbf{x}^{\mathbf{t}}\Bigg|_{x_i=p_i^{-s}} \\
            &= \sum_{\{p\in\mathbb{P} : p\mid n\}\subseteq P_m}\frac{f^{k\ast}(n)}{n^s},
        \end{aligned}
    $$`
    which can be justified analytically by the absolute convergence of `$\mathcal{D}[f](s)$` and <eq-ref refid="lemma:absoluteconvergenceequiv"></eq-ref>. Taking the limit as `$m\to\infty$` gives the result.
</span>

<span class="theorem" id="thm:maintheorem">
    Let `$f:\mathbb{N}\to\mathbb{R}$` be such that `$f(1)> 0$` and `$\mathcal{D}[f](s_0)$` converges absolutely for some `$s_0$`. Then, defining
    `$$\tag{2}\label{eq:kfolddef}
        f^{k\ast}(n) = \sum_{\ell = 0}^{\Omega(n)}\binom{k}{\ell}f(1)^{k-\ell}[f\cdot(1-\varepsilon)]^{\ell\ast}(n)
    $$`
    for `$k\in\mathbb{R}$`, we have that
</span>
<div class="math-env" style="margin-top:-25px">
	<ol type="i">
	<li>`$f^{(k_1+k_2)\ast}=f^{k_1}\ast f^{k_2}$`</li>
	<li>`$(f^{k_1\ast})^{k_2\ast}=f^{k_1k_2\ast}$`</li>
	<li>`$(f\ast g)^{k\ast}=f^{k\ast}\ast g^{k\ast}$`</li>
	<li>if `$f$` is multiplicative, then so is `$f^{k\ast}$`</li>
	<li>if `$\mathcal{D}[f](s)$` converges absolutely, then `$\mathcal{D}[f^{k\ast}](s)=\mathcal{D}[f](s)^k$`.</li>
	</ol>
</div>
<span class="proof">
    To prove (i), we simply consider a generalized version of the product rule. Indeed, one has
    `$$
        D_{\mathbf{x}}^{\mathbf{r}}F_1F_2=\sum_{\mathbf{r}_1+\mathbf{r}_2=\mathbf{r}}D_{\mathbf{x}}^{\mathbf{r}_1}F_1\cdot D_{\mathbf{x}}^{\mathbf{r}_2}F_2
    $$`
    for all `$F_1,F_2$`. Letting `$F_1=G_F^{k_1}$` and `$F_2=G_F^{k_2}$` and evaluating at `$\mathbf{0}$` gives (i).
    By (i), \eqref{eq:kfolddef} agrees with the definition of `$k$`-fold convolution in <a href="#rearick">[2]</a> for `$k=p/q\in\mathbb{Q}$` as the unique solution to `$(f^{p/q\ast})^{q\ast}=f^{p\ast}$`. It then follows from Theorem 6 of <a href="#rearick">[2]</a> and their definition of `$f^{k\ast}$` that properties (ii)-(iv) hold for `$k,k_1,k_2\in\mathbb{Q}$`. Fixing `$n$`, all of the results then hold for `$k\in\mathbb{R}$` by the continuity of `$k\mapsto f^{k\ast}(n)$`. The case when `$f(1)<0$` then follows from the general fact that `$(cf)^{k\ast}=c^k f^{k\ast}$` for `$c\in\mathbb{R}$`.
    Finally, (v) is just <eq-ref refid="prop:dirichletseries"></eq-ref>.
</span>

<span class="remark">
    It is interesting to note that that the above formula for `$f^{k\ast}(n)$` is exactly the expression one gets by applying the binomial theorem to `$f^{k\ast}=(f\cdot (1-\varepsilon)+f\cdot\varepsilon)^{k\ast}$` when `$k\in\mathbb{N}$`.
</span>

## References
<ol class="bibliography">
<li id="constantine">G Constantine and T Savits. A multivariate Faa di Bruno formula with applications. <i>Transactions  of the American Mathematical Society</i>, 348(2):503–520, 1996.</li>
<li id="rearick">David Rearick et al.  Operators on algebras of arithmetic functions. <i>Duke  Mathematical  Journal</i>, 35(4):761–766, 1968.</li>
</ol>
