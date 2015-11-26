#column-break-after

##语法

- column-break-after：auto | always | avoid | left | right | page | column | avoid-page | avoid-column
- 默认值：auto
- 适用于：块级元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- auto：既不强迫也不禁止在元素之后断行并产生新列
- always：总是在元素之后断行并产生新列
- avoid：避免在元素之后断行并产生新列


##说明

设置或检索对象之后是否断行。

- 对应的脚本特性为columnBreakAfter。


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
		<td class="unsupport" rowspan="2">2.0-40.0</td>
		<td rowspan="2" class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">6.0-8.3<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">10.0+</td>
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
.test p,.test div{margin:0;padding:5px 10px;background:#eee;}
h1{margin:10px 0;font-size:16px;}
.test{
	width:600px;
	border:10px solid #000;
	-moz-column-count:4;
	-moz-column-gap:20px;
	-moz-column-rule:3px solid #090;
	-webkit-column-count:4;
	-webkit-column-gap:20px;
	-webkit-column-rule:3px solid #090;
	column-count:4;
	column-gap:20px;
	column-rule:3px solid #090;
}
.test div{
	-moz-column-break-after:always;
	-webkit-column-break-after:always;
	column-break-after:always;
}
</style>
</head>
<body>
<h1>column-break-after:always</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
	<div>不管本列有没有填满，后面新建一列</div>
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
</div>
</body>
</html>

```
