#column-rule-color

##语法

- column-rule-color：&lt;color&gt;
- 默认值：采用文本颜色
- 适用于：定义了多列的元素
- 继承性：无
- 动画性：否
- 计算值：与 &lt;' color '&gt; 属性一致


##取值

- &lt;color&gt;：指定颜色。


##说明

设置或检索对象的列与列之间的边框颜色。

- 如果 &lt;' column-rule-width '&gt; 等于0或 &lt;' column-rule-style '&gt; 设置为none | hidden，本属性将被忽略。
- 对应的脚本特性为columnRuleColor。


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
	-moz-column-rule-style:solid;
	-webkit-column-count:3;
	-webkit-column-gap:20px;
	-webkit-column-rule-width:3px;
	-webkit-column-rule-style:solid;
	column-count:3;
	column-gap:20px;
	column-rule-width:3px;
	column-rule-style:solid;
}
.test{
	-moz-column-rule-color:#f00;
	-webkit-column-rule-color:#f00;
	column-rule-color:#f00;
}
.test2{
	-moz-column-rule-color:#090;
	-webkit-column-rule-color:#090;
	column-rule-color:#090;
}
</style>
</head>
<body>
<h1>column-rule-color:#f00</h1>
<div class="test">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:#090</h1>
<div class="test2">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
</body>
</html>

```
