#column-rule

##语法

- column-rule：&lt;' column-rule-width '&gt; || &lt;' column-rule-style '&gt; || &lt;' column-rule-color '&gt;
- 默认值：看每个独立属性
- 适用于：定义了多列的元素
- 继承性：无
- 动画性：否
- 计算值：看每个独立属性


##取值

- &lt;' column-rule-width '&gt;：设置或检索对象的列与列之间的边框厚度。
- &lt;' column-rule-style '&gt;：设置或检索对象的列与列之间的边框样式。
- &lt;' column-rule-color '&gt;：设置或检索对象的列与列之间的边框颜色。


##说明

设置或检索对象的列与列之间的边框。复合属性。

- 对应的脚本特性为columnRule。


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
		<td class="support" rowspan="2">2.0-40.0<sup class="fix">-moz-</sup></td>
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
p{margin:0;padding:5px 10px;background:#eee;}
h1{margin:10px 0;font-size:16px;}
.test{
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:20px;
	-moz-column-rule:10px solid #090;
	-webkit-column-count:3;
	-webkit-column-gap:20px;
	-webkit-column-rule:10px solid #090;
	column-count:3;
	column-gap:20px;
	column-rule:10px solid #090;
}
</style>
</head>
<body>
<h1>绿色边框即是column-rule所定义：</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
</body>
</html>

```
