#ms

##说明

毫秒

- 1s = 1000ms


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
		<td class="support">9.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font-size:16px;}
.test{position:absolute;left:8px;width:200px;height:100px;margin:0 5px;padding:10px;border:1px solid #ddd;background-color:#eee;color:#000;
	-moz-transition-property:left;
	-moz-transition-duration:300ms;
	-moz-transition-timing-function:ease-in;
	-webkit-transition-property:left;
	-webkit-transition-duration:300ms;
	-webkit-transition-timing-function:ease-in;
	-o-transition-property:left;
	-o-transition-duration:300ms;
	-o-transition-timing-function:ease-in;
	transition-property:left;
	transition-duration:300ms;
	transition-timing-function:ease-in;
}
.test:hover{left:100px;}
</style>
</head>
<body>
<h1>请将鼠标移动到下面的矩形上：</h1>
<div class="test">矩形在300ms内慢慢向右移动<br>transition-duration:300ms;</div>
</body>
</html>

```
