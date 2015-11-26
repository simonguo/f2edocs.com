#E:last-child

##语法

- E:last-child { sRules }


##说明

匹配父元素的最后一个子元素E。

- 要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素
- E:last-child选择符，E必须是它的兄弟元素中的最后一个元素，换言之，E必须是父元素的最后一个子元素。与之类似的伪类还有E:first-child，只不过情况正好相反，需要它是第一个子元素。
- 通过具体的例子来进行理解：


**有效的代码：**
```css
p:last-child{color:#f00;}
```

```html
<div>
	<h2>我是一个标题</h2>
	<p>我是一个p</p>
</div>
```

**无效的代码：**

```css
p:last-child{color:#f00;}
```

```html
<div>
	<p>我是一个p</p>
	<h2>我是一个标题</h2>
</div>
```

>在上述代码中，如果我们要设置第一个li的样式，那么代码应该写成li:first-child{sRules}，而不是ul:first-child{sRules}。




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
li:last-child {
	color: #f00;
}
</style>
</head>
<body>
<h1>注意是li:last-child，而不是ul:last-child</h1>
<ul>
	<li>结构性伪类选择符 E:last-child</li>
	<li>结构性伪类选择符 E:last-child</li>
	<li>结构性伪类选择符 E:last-child</li>
	<li>结构性伪类选择符 E:last-child</li>
</ul>
</body>
</html>

```
