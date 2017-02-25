#column-width

##语法

- column-width：&lt;length&gt; | auto
- 默认值：auto
- 适用于：除table外的非替换块级元素, table cells, inline-block元素
- 继承性：无
- 动画性：否
- 计算值：绝对长度值，0或者更大


##取值

- &lt;length&gt;：用长度值来定义列宽。不允许负值
- auto：根据 &lt;' column-count '&gt; 自定分配宽度


##说明

设置或检索对象每列的宽度

- 对应的脚本特性为columnWidth。


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
	width:628px;
	border:10px solid #000;
	-moz-column-width:200px;
	-moz-column-count:3;
	-webkit-column-width:200px;
	-webkit-column-count:3;
	column-width:200px;
	column-count:3;
}
.test2{
	border:10px solid #000;
	-moz-column-width:200px;
	-webkit-column-width:200px;
	column-width:200px;
}
.test3{
	border:10px solid #000;
	-moz-column-count:5;
	-webkit-column-count:5;
	column-count:5;
}
</style>
</head>
<body>
<h1>列数及列宽固定:</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>列宽固定，根据容器宽度液态分布列数:</h1>
<div class="test2">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>列数固定，根据容器宽度液态分布列宽:</h1>
<div class="test3">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
</body>
</html>

```
