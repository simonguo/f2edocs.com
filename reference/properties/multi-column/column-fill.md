#column-fill

##语法

- column-fill：auto | balance
- 默认值：auto
- 适用于：定义了多列的元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- auto：列高度自适应内容
- balance：所有列的高度以其中最高的一列统一


##说明

设置或检索对象所有列的高度是否统一。

- 对应的脚本特性为columnFill。


##兼容性


<table class="compatible">
<thead>
	<tr>
		<th>Values</th>
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
		<td rowspan="2"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">2.0-12.0</td>
		<td rowspan="2" class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">6.0-8.3<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">10.0+</td>
		<td class="support">13.0-40.0<sup class="fix">-moz-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
body{font:14px/1.5 georgia,serif,sans-serif;}
p{margin:0;padding:5px 10px;background:#eee;}
h1{margin:10px 0;font-size:16px;}
.test{
	width:600px;
	border:10px solid #000;
	-moz-column-count:2;
	-moz-column-gap:20px;
	-moz-column-rule:3px solid #090;
	-moz-column-fill:balance;
	-webkit-column-count:2;
	-webkit-column-gap:20px;
	-webkit-column-rule:3px solid #090;
	-webkit-column-fill:balance;
	column-count:2;
	column-gap:20px;
	column-rule:3px solid #090;
	column-fill:balance;
}
</style>
</head>
<body>
<h1>column-fill:balance</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
</div>
</body>
</html>

```
