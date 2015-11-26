#E:only-child

##语法

- E:only-child { sRules }


##说明

匹配父元素仅有的一个子元素E。

- 要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素


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
li:only-child {
	color: #f00;
}
</style>
</head>
<body>
<h1>只有唯一一个子元素</h1>
<ul>
	<li>结构性伪类选择符 E:only-child</li>
</ul>
<h1>有多个子元素</h1>
<ul>
	<li>结构性伪类选择符 E:only-child</li>
	<li>结构性伪类选择符 E:only-child</li>
	<li>结构性伪类选择符 E:only-child</li>
</ul>
</body>
</html>

```
