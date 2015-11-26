#E:root

##语法

- E:root { sRules }


##说明

匹配E元素在文档的根元素。在HTML中，根元素永远是HTML

- 根据这个特性，可以做IE8的Hack


**示例：**

```css
.test {
	color: black;
	color: yellow\0;
	*color: blue;
	_color: red;
}
html:root .test {
	color: purple\0;
}
```

>上述代码：非IE文本将为black，IE9及以上为purple，IE8为yellow，IE7为blue，IE6为red


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
html:root {
	color: #f00;
}
</style>
</head>
<body>
<ul>
	<li>列表项一</li>
	<li>列表项二</li>
	<li>列表项三</li>
</ul>
</body>
</html>

```
