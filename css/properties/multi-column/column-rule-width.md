#column-rule-width

##语法

- column-rule-width：&lt;length&gt; | thin | medium | thick
- 默认值：medium
- 适用于：定义了多列的元素
- 继承性：无
- 动画性：否
- 计算值：绝对长度值或者0（如果 &lt;' column-rule-style '&gt; 为 none 或者 hidden）


##取值

- &lt;length&gt;：用长度值来定义边框的厚度。不允许负值
- medium：定义默认厚度的边框。
- thin：定义比默认厚度细的边框。
- thick：定义比默认厚度粗的边框。


##说明

设置或检索对象的列与列之间的边框厚度。

- 如果 &lt;' column-rule-style '&gt; 设置为none或者hidden，本属性将失去作用。
- 对应的脚本特性为columnRuleWidth。


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
div{
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:20px;
	-moz-column-rule-style:solid;
	-webkit-column-count:3;
	-webkit-column-gap:20px;
	-webkit-column-rule-style:solid;
	column-count:3;
	column-gap:20px;
	column-rule-style:solid;
}
.test{
	-moz-column-rule-width:thin;
	-webkit-column-rule-width:thin;
	column-rule-width:thin;
}
.test2{
	-moz-column-rule-width:medium;
	-webkit-column-rule-width:medium;
	column-rule-width:medium;
}
.test3{
	-moz-column-rule-width:thick;
	-webkit-column-rule-width:thick;
	column-rule-width:thick;
}
.test4{
	-moz-column-rule-width:10px;
	-webkit-column-rule-width:10px;
	column-rule-width:10px;
}
</style>
</head>
<body>
<h1>column-rule-width:thin</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>column-rule-width:medium</h1>
<div class="test2">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>column-rule-width:thick</h1>
<div class="test3">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>column-rule-width:10px</h1>
<div class="test4">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
</body>
</html>

```
