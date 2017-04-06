#E:last-of-type

##语法

- E:last-of-type { sRules }


##说明

匹配同类型中的最后一个同级兄弟元素E。

- 要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是html，即E可以是html的子元素，也就是说E可以是body
- 该选择符总是能命中父元素的倒数第1个为E的子元素，不论倒数第1个子元素是否为E


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
p:last-of-type {
	color: #f00;
}
</style>
</head>
<body>
<div class="test">
	<div>我是一个div元素</div>
	<p>我是一个p元素</p>
	<p>我是一个p元素</p>
</div>
</body>
</html>

```
