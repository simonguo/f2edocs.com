#calc()

##语法

- calc() = calc(四则运算)


##说明

用于动态计算长度值。

- 需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；
- 任何长度值都可以使用calc()函数进行计算；
- calc()函数支持 "+", "-", "\*", "/" 运算；
- calc()函数使用标准的数学运算优先级规则；


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
		<td class="unsupport">2.0-3.6</td>
		<td class="unsupport">4.0-18.0</td>
		<td class="unsupport">3.1-5.1</td>
		<td class="support" rowspan="3">15.0+</td>
		<td class="unsupport">3.2-5.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support">4.0-15.0<br><sup class="fix">-moz-</sup></td>
		<td class="support">19.0-25.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support">6.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-6.1<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport" rowspan="2">4.4-4.4.4</td>
		<td class="support">19.0-25.0<br><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">16.0+</td>
		<td class="support">26.0+</td>
		<td class="support">6.1+</td>
		<td class="support">7.0+</td>
		<td class="support">26.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test {
	width: calc(100% - 50px);
	background: #eee;
}
</style>
</head>
<body>
<div class="test">我的宽度为100% - 50px</div>
</body>
</html>

```
