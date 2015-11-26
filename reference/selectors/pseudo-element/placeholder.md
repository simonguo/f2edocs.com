#E::placeholder

##语法

- E::placeholder { sRules }


##说明

设置对象文字占位符的样式。

- ::placeholder 伪元素用于控制表单输入框占位符的外观，它允许开发者/设计师改变文字占位符的样式，默认的文字占位符为浅灰色。
- 当表单背景色为类似的颜色时它可能效果并不是很明显，那么就可以使用这个伪元素来改变文字占位符的颜色。
- 需要注意的是，除了Firefox是 ::[prefix]placeholder，其他浏览器都是使用 ::[prefix]input-placeholder
- Firefox支持该伪元素使用text-overflow属性来处理溢出问题。

**::placeholder的使用示例:**

```css
input::-webkit-input-placeholder {
	color: #999;
}
input:-ms-input-placeholder { // IE10+
	color: #999;
}
input:-moz-placeholder { // Firefox4-18
	color: #999;
}
input::-moz-placeholder { // Firefox19+
	color: #999;
}

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
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">2.0-3.6</td>
		<td class="partsupport" rowspan="3">4.0-43.0<br><sup class="fix">-webkit-</sup></td>
		<td class="unsupport">3.1-4.0</td>
		<td class="partsupport" rowspan="3">15.0-28.0<br><sup class="fix">-webkit-</sup></td>
		<td class="unsupport">3.2-4.1</td>
		<td class="partsupport" rowspan="3">2.1-4.4.4<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport" rowspan="3">18.0-40.0<br><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="partsupport" rowspan="2">10.0-11.0<br><sup class="fix">-ms-</sup></td>
		<td class="partsupport">4.0-18.0<br><sup class="fix">-moz-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport" rowspan="2">5.0-8.1<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport" rowspan="2">4.3-8.1<br><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="partsupport">19.0-38.0<br><sup class="fix">-moz-</sup></td>
	</tr>
</tbody>
</table>


- ::-moz-placeholder 伪元素在Firefox 19+替代了之前的 :-moz-placeholder 伪类


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
input::-webkit-input-placeholder {
	color: green;
}
input:-ms-input-placeholder { // IE10+
	color: green;
}
input:-moz-placeholder { // Firefox4-18
	color: green;
}
input::-moz-placeholder { // Firefox19+
	color: green;
}
</style>
</head>
<body>

  <input id="test" placeholder="Placeholder text!">

</body>
</html>

```
