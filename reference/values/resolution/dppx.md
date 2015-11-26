#dppx

##说明

每像素包含点的数量（dots per pixel）

- 普通屏幕通常包含96dpi，一般将2倍于此的屏幕称之为高分屏，即大于等于192dpi的屏幕，比如Mac视网膜屏就达到了192dpi（即2dppx），打印时一般会需要更大的dpi；
- 1dppx = 96dpi
- 1dpi ≈ 0.39dpcm
- 1dpcm ≈ 2.54dpi
- 1in = 2.54cm = 25.4 mm = 101.6q = 72pt = 6pc = 96px


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
		<td class="unsupport">2.0-15.0</td>
		<td class="unsupport">4.0-28.0</td>
		<td class="unsupport" rowspan="2">3.1-8.1</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport" rowspan="2">3.2-8.1</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport">18.0-29.0</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">16.0+</td>
		<td class="support">29.0+</td>
		<td class="support">29.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
@media screen and (min-resolution: 2dppx) {
	.normal{display:none;}
}
@media screen and (min-resolution: 1dppx) and (max-resolution: 1.9dppx) {
	.retina{display:none;}
}
</style>
</head>
<body>
<p class="retina">视网膜屏</p>
<p class="normal">普通屏</p>
</body>
</html>

```
