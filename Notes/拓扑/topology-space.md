
> [!TIP] 定义 拓扑空间
> 设$X$是一个集合，$\mathcal{T}$是$X$的子集族。如果$\mathcal{T}$满足以下条件：
> 
> 1. $X \in \mathcal{T}$ 且 $\emptyset \in \mathcal{T}$。
> 2. 对于任意$\mathcal{T}$中的元素$U_i$（$i \in I$，$I$为任意指标集），有$\bigcup_{i \in I} U_i \in \mathcal{T}$。
> 3. 对于任意$\mathcal{T}$中的有限个元素$U_1, U_2, \dots, U_n$，有$\bigcap_{i=1}^n U_i \in \mathcal{T}$。
> 
> 则称$\mathcal{T}$为$X$上的一个**拓扑**，$(X, \mathcal{T})$称为一个**拓扑空间**。$\mathcal{T}$中的元素称为**开集**。

^dfe9b9

### 拓扑的基（Base）和 子基（Subbase）


> [!TIP] 定义 拓扑基
> 设$(X, \tau)$是一个拓扑空间，$\mathcal{B}$是$X$的一个子集族。如果满足以下条件：
> 
> 1. $\forall x \in X, \exists B \in \mathcal{B}$，使得$x \in B$。
> 2. 对于任意$B_1, B_2 \in \mathcal{B}$和$x \in B_1 \cap B_2$，存在$B_3 \in \mathcal{B}$，使得$x \in B_3 \subseteq B_1 \cap B_2$。
> 
> 则称$\mathcal{B}$为拓扑$\tau$的**Base**（基）。


> [!TIP] 定义 拓扑的子基
> 设$(X, \tau)$是一个拓扑空间，$\mathcal{S}$是$X$的一个子集族。如果$\mathcal{S}$的有限交全体构成的集合是$\tau$的一个Base，即：
> 
> $$
> \mathcal{B} = \{ \bigcap_{i=1}^n S_i \mid S_i \in \mathcal{S}, n \in \mathbb{N} \}
> $$
> 
> 是$\tau$的一个Base，则称$\mathcal{S}$为拓扑$\tau$的**Subbase**（子基）。


拓扑基有等价定义。即 $\mathcal{T}$ 的子集 $\mathcal{B}$ ，任意 $\mathcal{T}$ 中的元素都可以用 $\mathcal{B}$ 中的元素并出来。