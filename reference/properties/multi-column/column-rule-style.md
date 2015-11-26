#column-rule-style

##语法

- column-rule-style：none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
- 默认值：none
- 适用于：定义了多列的元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：无轮廓。&lt;' column-rule-color '&gt; 与&lt;' column-rule-width '&gt; 将被忽略
- hidden：隐藏边框。
- dotted：点状轮廓。
- dashed：虚线轮廓。
- solid：实线轮廓
- double：双线轮廓。两条单线与其间隔的和等于指定的 &lt;' column-rule-width '&gt; 值
- groove：3D凹槽轮廓。
- ridge：3D凸槽轮廓。
- inset：3D凹边轮廓。
- outset：3D凸边轮廓。


##说明

设置或检索对象的列与列之间的边框样式。

- 如果 &lt;' column-rule-width '&gt; 等于0，本属性将失去作用。
- 对应的脚本特性为columnRuleStyle。


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
	width:600px;
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:20px;
	-moz-column-rule-width:3px;
	-webkit-column-count:3;
	-webkit-column-gap:20px;
	-webkit-column-rule-width:3px;
	column-count:3;
	column-gap:20px;
	column-rule-width:3px;
}
.test{
	-moz-column-rule-style:none;
	-webkit-column-rule-style:none;
	column-rule-style:none;
}
.test2{
	-moz-column-rule-style:hidden;
	-webkit-column-rule-style:hidden;
	column-rule-style:hidden;
}
.test3{
	-moz-column-rule-style:dotted;
	-webkit-column-rule-style:dotted;
	column-rule-style:dotted;
}
.test4{
	-moz-column-rule-style:dashed;
	-webkit-column-rule-style:dashed;
	column-rule-style:dashed;
}
.test5{
	-moz-column-rule-style:solid;
	-webkit-column-rule-style:solid;
	column-rule-style:solid;
}
.test6{
	-moz-column-rule-style:double;
	-webkit-column-rule-style:double;
	column-rule-style:double;
}
.test7{
	-moz-column-rule-style:groove;
	-webkit-column-rule-style:groove;
	column-rule-style:groove;
}
.test8{
	-moz-column-rule-style:ridge;
	-webkit-column-rule-style:ridge;
	column-rule-style:ridge;
}
.test9{
	-moz-column-rule-style:inset;
	-webkit-column-rule-style:inset;
	column-rule-style:inset;
}
.test10{
	-moz-column-rule-style:outset;
	-webkit-column-rule-style:outset;
	column-rule-style:outset;
}
</style>
</head>
<body>
<h1>column-rule-style:none</h1>
<div class="test">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-width:hidden</h1>
<div class="test2">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-width:dotted</h1>
<div class="test3">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-width:dashed</h1>
<div class="test4">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:solid</h1>
<div class="test5">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-width:double</h1>
<div class="test6">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-width:groove</h1>
<div class="test7">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-width:ridge</h1>
<div class="test8">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-width:inset</h1>
<div class="test9">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-width:outset</h1>
<div class="test10">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
</body>
</html>

```
