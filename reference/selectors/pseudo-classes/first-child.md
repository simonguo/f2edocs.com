#E:first-child

##语法

- E:first-child { sRules }


##说明

匹配父元素的第一个子元素E。

- 要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素
- 这里可能存在误解：

**示例代码：**

```html
<ul>
	<li>列表项一</li>
	<li>列表项二</li>
	<li>列表项三</li>
	<li>列表项四</li>
</ul>

```

>在上述代码中，如果我们要设置第一个li的样式，那么代码应该写成li:first-child{sRules}，而不是ul:first-child{sRules}。


- 来看这样一段代码：

**示例代码：**

```css
p:first-child{color:#f00;}
```

```html
<div>
	<p>我是一个p</p>
</div>
```
>这段代码你能看到p元素被命中变成了红色


- 假设将代码简单地修改一下：

**示例代码：**
```css
p:first-child{color:#f00;}
```

```html
<div>
	<h2>我是一个标题</h2>
	<p>我是一个p</p>
</div>
```

- E:first-child选择符，E必须是它的兄弟元素中的第一个元素，换言之，E必须是父元素的第一个子元素。与之类似的伪类还有E:last-child，只不过情况正好相反，需要它是最后一个子元素。


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
		<td class="unsupport">6.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">IE7.0+</td>
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
li:first-child {
	color: #f00;
}
</style>
</head>
<body>
<h1>注意是li:first-child，而不是ul:first-child</h1>
<ul>
	<li>结构性伪类选择符 E:first-child</li>
	<li>结构性伪类选择符 E:first-child</li>
	<li>结构性伪类选择符 E:first-child</li>
	<li>结构性伪类选择符 E:first-child</li>
</ul>
</body>
</html>

```
