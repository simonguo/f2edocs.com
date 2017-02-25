#E:nth-last-child(n)

##语法

- E:nth-last-child(n) { sRules }


##说明

匹配父元素的倒数第n个子元素E，假设该子元素不是E，则选择符无效。

- 要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素
- 该选择符允许使用一个乘法因子(n)来作为换算方式，比如我们想选中倒数第一个子元素E，那么选择符可以写成：E:nth-last-child(1)
- 有一点需要注意的是：


**HTML示例代码：**
```html
<div>
	<p>第1个p</p>
	<p>第2个p</p>
	<span>第1个span</span>
	<p>第3个p</p>
	<span>第2个span</span>
</div>
```


**如上HTML，假设要命中倒数第一个p(即正数第3个p)，那么CSS选择符应该是：**
```css
p:nth-last-child(2){color:#f00;}
```

**而不是：**
```css
p:nth-last-child(1){color:#f00;}
```

>因为倒数第1个p，其实是倒数第2个子元素。基于选择符从右到左解析，首先要找到第1个子元素，然后再去检查该子元素是否为p，如果不是p，则n递增，继续查找


**假设不确定倒数第1个子元素是否为E，但是又想命中倒数第1个E，应该这样写：**

```css
p:last-of-type{color:#f00;}
```

**或者这样写：**

```css
p:nth-last-of-type(1){color:#f00;}
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
li:nth-last-child(1) {
	color: #f00;
}
</style>
</head>
<body>
<h1>最后一行要变成红色 <code>li:nth-last-child(1){color:#f00;}</code></h1>
<ul>
	<li>结构性伪类选择符 E:nth-last-child(n)</li>
	<li>结构性伪类选择符 E:nth-last-child(n)</li>
	<li>结构性伪类选择符 E:nth-last-child(n)</li>
</ul>
</body>
</html>

```
