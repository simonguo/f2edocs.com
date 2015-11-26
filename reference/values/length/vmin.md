#vmin

##说明

相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为100单位的vmin



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
		<td class="unsupport">2.0-18.0</td>
		<td class="unsupport">4.0-25.0</td>
		<td class="unsupport">3.1-5.1</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport">3.2-5.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-25.0</td>
	</tr>
	<tr>
		<td class="support">9.0+ <sup><a href="#support1">#1</a></sup></td>
		<td class="support">19.0+</td>
		<td class="support">26.0+</td>
		<td class="support">6.0+</td>
		<td class="support">6.0+</td>
		<td class="support">4.4+</td>
		<td class="support">26.0+</td>
	</tr>
</tbody>
</table>


- IE9仅支持使用 vm 代替vmin


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
p {
	font-size: 12px;	/*IE6-8*/
	font-size: 5vm;		/*IE9*/
	font-size: 5vmin;	/*其他浏览器*/
}
</style>
</head>
<body>
<p>相对于viewport的宽度或高度中较小的那个然后计算文字大小。</p>
</body>
</html>

```
