#E:nth-child(n)

##语法

- E:nth-child(n) { sRules }


##说明

匹配父元素的第n个子元素E，假设该子元素不是E，则选择符无效。

- 要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素
- 该选择符允许使用一个乘法因子(n)来作为换算方式，比如我们想选中所有的偶数子元素E，那么选择符可以写成：E:nth-child(2n)
- 使用E:nth-child(n)实现奇偶：


**示例代码：**

```html
<style>
li:nth-child(2n){color:#f00;} /* 偶数 */
li:nth-child(2n+1){color:#000;} /* 奇数 */
</style>

<ul>
	<li>列表项一</li>
	<li>列表项二</li>
	<li>列表项三</li>
	<li>列表项四</li>
</ul>
```

>因为(n)代表一个乘法因子，可以是0, 1, 2, 3, ..., 所以(2n)换算出来会是偶数，而(2n+1)换算出来会是奇数

- 该选择符允许使用一些关键字，比如：odd, even

**使用odd, even实现奇偶：**
```html
<style>
li:nth-child(even){color:#f00;} /* 偶数 */
li:nth-child(odd){color:#000;} /* 奇数 */
</style>

<ul>
	<li>列表项一</li>
	<li>列表项二</li>
	<li>列表项三</li>
	<li>列表项四</li>
</ul>
```
>关键字odd代表奇数，even代表偶数

- 有一点需要注意的是：

**HTML示例代码：**
```html
<div>
	<p>第1个p</p>
	<p>第2个p</p>
	<span>第1个span</span>
	<p>第3个p</p>
	<span>第2个span</span>
	<p>第4个p</p>
	<p>第5个p</p>
</div>
```

**CSS Case 1：**

```css
p:nth-child(2){color:#f00;}
```
> 很明显第2个p会被命中然后变成红色

**CSS Case 2：**

```css
p:nth-child(3){color:#f00;}
```
>这是会命中第3个p么？如果你这么认为那就错了，这条选择符就不会命中任何一个元素。

**CSS Case 3：**
```css
p:nth-child(4){color:#f00;}
```
>这时你以为会命中第4个p，但其实命中的却是第3个p，因为它是第4个子元素
>E:nth-child(n)会选择父元素的第n个子元素E，如果第n个子元素不是E，则是无效选择符，但n会递增。

**假设不确定第1个子元素是否为E，但是又想命中第1个E，应该这样写：**

```css
p:first-of-type{color:#f00;}
```
**或者这样写：**
```css
p:nth-of-type(1){color:#f00;}
```



##兼容性


<table class="compatible">
<thead>
	<tr>
		<th>IE</th>
		<th>Firefox</th>
		<th>Chrome</th>
		<th>Safari</th>
		<th>Opera</th>
		<th>iOS Safari</th>
		<th>Android Browser</th>
		<th>Android Chrome</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td class="unsupport">6.0-8.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">IE9.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1 {
	font-size: 16px;
}
li:nth-child(2) {
	color: #f00;
}
</style>
</head>
<body>
<h1>第二行要变成红色 <code>li:nth-child(2){color:#f00;}</code></h1>
<ul>
	<li>结构性伪类选择符 E:nth-child(n)</li>
	<li>结构性伪类选择符 E:nth-child(n)</li>
	<li>结构性伪类选择符 E:nth-child(n)</li>
</ul>
</body>
</html>

```
