#ex

##说明

相对长度单位。相对于字符“x”的高度。通常为字体高度的一半。

- 如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。


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
		<td class="support">6.0+</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">3.1+</td>
		<td class="support">3.5+</td>
		<td class="support">3.2+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
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
	margin: 10px 0;
	font-size: 16px;
}
.x {
	overflow: hidden;
	height: 1ex;
	background: #aaa;
}
</style>
</head>
<body>
<h1>定义一条与字母x高度相同的线：</h1>
<div>xxxx</div>
<div class="x"></div>
</body>
</html>

```
