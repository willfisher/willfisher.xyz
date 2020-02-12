---
title: "`$\\sum_{n} (-1)^{\\lfloor n\\theta \\rfloor}$` pour `$\\theta$` Irrationnel"
date: 2019-02-21T22:56:13-06:00
catégories: ["Maths"]
draft: false
---

Dans ce post, nous cherchons à démontrer le théorème suivant.

<span class="theorem" id="thm1">
	Soit `$\theta$` irrationnel. Définez `$\rho_{\theta}:\mathbb{N}\to \mathbb{Z}$` par
	`$$\rho_{\theta}(x)=\sum_{n=1}^{x}(-1)^{\lfloor n\theta\rfloor},$$`
	alors `$\rho_{\theta}$` est non bornée.
</span>

<!--more-->

<div class="strike">
	<span><i>La Démonstration</i></span>
</div>

Pour `$\alpha$` irrationnel, on définit la fonction `$\rho_{\alpha}:\mathbb{N}\times\mathbb{R}\to\mathbb{Z}$` par
`$$\rho_{\alpha}(x,z):=\sum_{n=1}^{x}(-1)^{\lfloor n\alpha + z\rfloor}$$`
et on pose `$\rho_{\alpha}(x)=\rho_{\alpha}(x,0)$`.
Dorénavant, on suppose que `$\alpha$` est fixé; on examinera `$\rho_{1/\alpha}$`. Soit `$\{b_n\}$` la fraction continue de `$\alpha$`, c'est-à-dire `$\alpha=[b_0;\,b_1,b_2,\dots]$`, soient `$A_n$` et `$B_n$` les numérateurs et les dénominateurs, respectivement, des réduites associées à cette fraction continue, et on pose que `$[x]$` dénote la fonction de l'entier plus proche, définit par
`$$[x]=\Big\lfloor x +\frac{1}{2} \Big\rfloor.$$`
Finalemente, on pose `$E(x)=x-[x]$`.


<span class="lemma" id="lemma1">
	Pour chaque `$x\in\mathbb{N}$`, `$\rho_{1/\alpha}(x,z)\equiv x\pmod 2$`.
</span>

<span class="proof">
	Puisque `$(-1)^{\lfloor n\alpha^{-1}+z\rfloor}\equiv 1\pmod 2$`, on a que `$\sum_{n=1}^x (-1)^{\lfloor n\alpha^{-1}+z\rfloor}\equiv \sum_{n=1}^x 1\pmod 2$` et donc `$\rho_{1/\alpha}(x,z)\equiv x\pmod 2$`.
</span>

<span class="lemma" id="lemma2">
	Si `$|c| < |E(n/\alpha)|$` pour tout `$n\le x$`, alors `$\rho_{1/\alpha}(x)=\rho_{1/\alpha}(x,c)$`.
</span>

<span class="proof">
	Puisque `$c<E(n/\alpha)$` pour tout `$n\le x$`, on a que `$\lfloor n\alpha^{-1}\rfloor=\lfloor n\alpha^{-1}+c\rfloor$` pour tout `$n\le x$`. Ainsi que `$\rho_{1/\alpha}(x)=\rho_{1/\alpha}(x,c)$`.
</span>

<span class="lemma" id="lemma3">
	Pour chaque `$n\in\mathbb{N}$`,
	`$$\left|E\left(\frac{A_n}{\alpha}\right)\right| < \left|E\left(\frac{k}{\alpha}\right)\right| $$`
	pour tout `$k < A_{n+1}$`, `$k\neq A_n$`.
</span>

<span class="proof">
	On acceptera comme fait que pour tous les nombres, les fractions partielles de la fraction continue de ce nombre sont les meuilleurs approximations rationnelles de le deuxième type (une preuve de ça peut facilemente être [cherchée](https://proofwiki.org/wiki/Convergents_are_Best_Approximations)). Ça dit qu'on a
	`$$|B_n\alpha - A_n| \le |q\alpha - p|$$`
	pour tous `$p,q\in\mathbb{N}$` tels que `$q < B_{n+1}$` avec égalité exactement quand `$q=B_n$` et `$p=A_n$`. On divise par `$\alpha$` pour obtenir
	`$$\left|B_n - \frac{A_n}{\alpha}\right| < \left|q-\frac{p}{\alpha}\right|$$`
	pour tous `$p,q\in\mathbb{N}$` tels que `$q<B_{n+1}$` et `$p\neq A_n$`. On a par des propriétés des fractions continues que `$B_n=[A_n/\alpha]$`, et similairement que `$[p/\alpha] < B_{n+1}$` pour `$p < A_{n+1}$`. Si on pose `$p=[p/\alpha]$`, on voit que l'équation ci-dessus donne le résultat désiré.
</span>

<span class="lemma" id="lemma4">
	Pour tous `$k < A_{n+1}$`,
	`$$\rho_{1/\alpha}(A_n+k)=\rho_{1/\alpha}(A_n)+(-1)^{B_n}\rho_{1/\alpha}(k).$$`
</span>

<span class="proof">
	On peut écrire `$\rho_{1/\alpha}(A_n+k)$` comme
	`$$\begin{aligned}
	\rho_{1/\alpha}(A_n + k) &= \rho_{1/\alpha}(A_n)+\rho_{1/\alpha}(k,\, A_n/\alpha) \\
	&= \rho_{1/\alpha}(A_n) + \sum_{n=1}^k (-1)^{\lfloor n\alpha^{-1}+B_n+E(A_n/\alpha)\rfloor} \\
	&= \rho_{1/\alpha}(A_n)+(-1)^{B_n}\rho_{1/\alpha}(k,\, E(A_n/\alpha)).
	\end{aligned}$$`
	D'après le <eq-ref refid="lemma2"></eq-ref> et le <eq-ref refid="lemma3"></eq-ref>, on a que `$\rho_{1/\alpha}(k,\, E(A_n/\alpha))=\rho_{1/\alpha}(k)$` si `$k < A_n$` et `$\rho_{1/\alpha}(k, E(A_n/\alpha))=\rho_{1/\alpha}(k)-(-1)^{\lfloor A_n\alpha^{-1}\rfloor} + (-1)^{\lfloor A_n\alpha^{-1}+E(A_n/\alpha)\rfloor}=\rho_{1/\alpha}(k)$` si `$k\ge A_n$` parce que `$\lfloor x\rfloor = \lfloor x+E(x)\rfloor$`. En appliquent ça avec l'équation ci-dessus, on obtient le résultat désiré.
</span>

Pour completer la preuve de la théorème principale, on introduit des propriétés des fractions continues.

<span class="proposition" id="prop1">
	Soient `$A_n$` et `$B_n$` les numérateurs et dénominateurs, respectivement, de la fraction continue d'un nombre `$x$`, alors
	`$$A_nB_{n-1}-A_{n-1}B_n=(-1)^{n+1}.$$`
</span>

C'est simplemente une propriété des fractions continues qu'on peut facilemente chercher. Un corollaire utile de ça pour notre objectif est le suivant.

<span class="corollary" id="cor1">
	Une infinité de `$\{A_n\}$` sont pairs ou une infinité de `$\{B_n\}$` sont pairs.
</span>

<span class="proposition" id="prop2">
	Soit `$x=[b_0;\, b_1,b_2,\dots]$` et soient `$\{A_n\}$` `$\{B_n\}$` les numérateurs et les dénominateurs, respectivement, de la fraction continue de `$x$`. Alors `$A_n=b_nA_{n-1}+A_{n-2}$` et `$B_n=b_nB_{n-1}+B_{n-2}$`.
</span>

Ça nous donne toutes les choses nécessaires pour completer la preuve.

<span class="theorem" id="thm2">
	`$\rho_{1/\alpha}(x)$` est non bornée.
</span>

<span class="proof">
	D'après <eq-ref refid="cor1"></eq-ref>, une infinité de `$\{A_n\}$` sont pairs ou une infinité de `$\{B_n\}$` sont pairs. Supposons une infinité de `$\{B_n\}$` sont pairs. Soient `$m\in\mathbb{Z}\setminus \{0\}$` et `$(n_i)_{i=1}^m$` une suite finie d'entiers positifs tels que `$B_{n_i}$` est pair pour tout `$i$` et chaque `$\rho_{1/\alpha}(A_{n_i})$` a le même signe. Puisque `$B_{n_i}$` est pair pour tout `$i$`, `$A_{n_i}$` est impair pour tout `$i$` (par <eq-ref refid="prop1"></eq-ref>) et `$\rho_{1/\alpha}(A_{n_i})$` n'est jamais `$0$` par <eq-ref refid="lemma1"></eq-ref>. Puis, en appliquent <eq-ref refid="lemma4"></eq-ref> iterativement,
	`$$\begin{aligned}
	\left|\rho_{1/\alpha}\left(\sum_{i=1}^m A_{n_i}\right)\right| &= \left|\rho_{1/\alpha}(A_{n_1})+\rho_{1/\alpha}\left(\sum_{i=2}^m A_{n_i}\right)\right| \\
	&\qquad\vdots \\
	&= \left|\sum_{i=1}^m \rho_{1/\alpha}(A_{n_i})\right|\ge m.
	\end{aligned}$$`
	Supposons maintenant qu'il y a un nombre fini de `$B_{i}$` qui sont pairs. Alors, il existe un `$k$` tel que pour tout `$n\ge k$`, `$B_n$` est impair. Soit `$n\ge k+2$`. Alors, `$b_n$` est pair par <eq-ref refid="prop2"></eq-ref> et `$A_n$` et `$A_{n+1}$` sont de parité opposé (c'est-à-dire qu'ils alternent entre pair, impair, pair, impair, etc...) par <eq-ref refid="prop1"></eq-ref>. D'après <eq-ref refid="prop2"></eq-ref> et <eq-ref refid="lemma4"></eq-ref>,
	`$$\begin{aligned}
	\rho_{1/\alpha}(A_n) &= \rho_{1/\alpha}(b_nA_{n-1}+A_{n-2}) \\
	&= \rho_{1/\alpha}(A_{n-1})-\rho_{1/\alpha}((b_n - 1)A_{n-1}+A_{n-2}) \\
	&= \rho_{1/\alpha}((b_n - 2)A_{n-1}+A_{n-2}) \\
	&\qquad\vdots \\
	&= \rho_{1/\alpha}(A_{n-2}).
	\end{aligned}$$`
	Ainsi que, si `$A_n$` est pair, `$\rho_{1/\alpha}(A_n)=a$` et si `$A_n$` est impair, `$\rho_{1/\alpha}(A_n)=b$` pour quelques `$a$` et `$b$`. De plus, `$a\neq b$` par <eq-ref refid="lemma1"></eq-ref>. Finalemente, soit `$(n_i)_{i=1}^m$` une suite décroissante d'entiers positifs qui sont supérieur ou égal à `$k+2$` qui alterne dans parité entre éléments successifs. Alors, par lemma 4,
	`$$\begin{aligned}
	\left|\rho_{1/\alpha}\left(\sum_{i=1}^m A_{n_i}\right)\right| &= \left|\rho_{1/\alpha}(A_{n_1})-\rho_{1/\alpha}\left(\sum_{i=2}^m A_{n_i}\right)\right| \\
	&= \left|\rho_{1/\alpha}(A_{n_1})-\rho_{1/\alpha}(A_{n_2})+\rho_{1/\alpha}\left(\sum_{i=3}^m A_{n_i}\right)\right| \\
	&\qquad\vdots \\
	&= \left|\sum_{i=1}^m (-1)^{i+1}\rho_{1/\alpha}(A_{n_i})\right| \\
	&\ge |a-b|\left\lfloor\frac{m}{2}\right\rfloor\ge \left\lfloor\frac{m}{2}\right\rfloor.
	\end{aligned}$$`
	Ainsi que `$\rho_{1/\alpha}$` est non bornée.
</span>

Puisque `$\alpha$` était un nombre irrationnel arbitraire, on a maintenant démontré le théorème original.
