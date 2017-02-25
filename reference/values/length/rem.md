#rem

##说明

相对长度单位。相对于根元素(即html元素)font-size计算值的倍数



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
		<td class="unsupport">2.0-3.5</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="unsupport">3.1-4.0</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport">3.2</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">3.6+</td>
		<td class="support">5.0+</td>
		<td class="support">4.1+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
html,
h1 {
	font-size: 12px;
}
p {
	font-size: 2rem;
}
</style>
</head>
<body>
<h1>下面的文字将是html定义的字体大小的2倍：</h1>
<p>我是html定义的12px的2倍，字体大小为24px</p>
</body>
</html>

```
