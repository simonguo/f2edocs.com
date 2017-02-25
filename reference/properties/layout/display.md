#display

##语法

- display：none | inline | block | list-item | inline-block | table | inline-table | table-caption | table-cell | table-row | table-row-group | table-column | table-column-group | table-footer-group | table-header-group | run-in<i class='fa fa-css3'></i> | box<i class='fa fa-css3'></i> | inline-box<i class='fa fa-css3'></i> | flex<i class='fa fa-css3'></i>box<i class='fa fa-css3'></i> | inline-flex<i class='fa fa-css3'></i>box<i class='fa fa-css3'></i> | flex | inline-flex
- 默认值：inline
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值，除浮动，绝对定位和根元素外
- 媒体：视觉


##取值

- none：隐藏对象。与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间
- inline：指定对象为内联元素。
- block：指定对象为块元素。
- list-item：指定对象为列表项目。
- inline-block：指定对象为内联块元素。（CSS2）
- table：指定对象作为块元素级的表格。类同于html标签&lt;table&gt;（CSS2）
- inline-table：指定对象作为内联元素级的表格。类同于html标签&lt;table&gt;（CSS2）
- table-caption：指定对象作为表格标题。类同于html标签&lt;caption&gt;（CSS2）
- table-cell：指定对象作为表格单元格。类同于html标签&lt;td&gt;（CSS2）
- table-row：指定对象作为表格行。类同于html标签&lt;tr&gt;（CSS2）
- table-row-group：指定对象作为表格行组。类同于html标签&lt;tbody&gt;（CSS2）
- table-column：指定对象作为表格列。类同于html标签&lt;col&gt;（CSS2）
- table-column-group：指定对象作为表格列组显示。类同于html标签&lt;colgroup&gt;（CSS2）
- table-header-group：指定对象作为表格标题组。类同于html标签&lt;thead&gt;（CSS2）
- table-footer-group：指定对象作为表格脚注组。类同于html标签&lt;tfoot&gt;（CSS2）
- run-in：根据上下文决定对象是内联对象还是块级对象。（CSS3）
- box：将对象作为弹性伸缩盒显示。（伸缩盒最老版本）（CSS3）
- inline-box：将对象作为内联块级弹性伸缩盒显示。（伸缩盒最老版本）（CSS3）
- flexbox：将对象作为弹性伸缩盒显示。（伸缩盒过渡版本）（CSS3）
- inline-flexbox：将对象作为内联块级弹性伸缩盒显示。（伸缩盒过渡版本）（CSS3）
- flex：将对象作为弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）
- inline-flex：将对象作为内联块级弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）


##说明

设置或检索对象是否及如何显示。

- 如果display设置为none，float及position属性定义将不生效；
- 如果position既不是static也不是relative或者float不是none或者元素是根元素，当display:inline-table时，display的计算值为table；当display:inline | inline-block | run-in | table-* 系时，display的计算值为block，其它情况为指定值；
- IE6,7支持inline元素转换成inline-block，但不支持block元素转换成inline-block，所以非inline元素在IE6,7下要转换成inline-block，需先转换成inline，然后触发hasLayout，以此来获得和inline-block类似的效果；你可以这样：


**全兼容的inline-block：**

```css
div {
	display: inline-block;
	*display: inline;
	*zoom: 1;
}
```

- 对应的脚本特性为display。

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
		<td><strong>Basic Support</strong> <sup><a href="#support1">#1</a></sup></td>
		<td class="support">6.0+</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">6.0+</td>
		<td class="support">15.0+</td>
		<td class="support">6.0+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">inline-block</td>
		<td class="partsupport">6.0-7.0 <sup><a href="#support3">#3</a></sup></td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
	</tr>
	<tr>
		<td rowspan="2">table系 <sup><a href="#support2">#2</a></sup></td>
		<td class="unsupport">6.0-7.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
	</tr>
	<tr>
		<td rowspan="2"><ins class="g-color-css3-new">run-in</ins></td>
		<td class="unsupport">6.0-7.0</td>
		<td class="unsupport">2.0-25.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
		<td class="support">26.0+</td>
	</tr>
	<tr>
		<td><ins class="g-color-css3-new">box</ins> | <ins class="g-color-css3-new">inline-box</ins></td>
		<td class="unsupport">6.0-11.0</td>
		<td class="support">2.0-38.0<br /><sup class="fix">-moz-</sup></td>
		<td class="support">4.0-43.0<br /><sup class="fix">-webkit-</sup></td>
		<td class="support">3.1-8.1<br /><sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-28.0<br /><sup class="fix">-webkit-</sup></td>
		<td class="support">3.2-8.1<br /><sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<br /><sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-40.0<br /><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td rowspan="2"><ins class="g-color-css3-new">flexbox</ins> | <ins class="g-color-css3-new">inline-flexbox</ins></td>
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport" rowspan="2">2.0-38.0</td>
		<td class="unsupport" rowspan="2">4.0-43.0</td>
		<td class="unsupport" rowspan="2">3.1-8.1</td>
		<td class="unsupport" rowspan="2">15.0-28.0</td>
		<td class="unsupport" rowspan="2">3.2-8.1</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-40.0</td>
	</tr>
	<tr>
		<td class="support">10.0-11.0<br /><sup class="fix">-ms-</sup></td>
	</tr>
	<tr>
		<td rowspan="3"><ins class="g-color-css3-new">flex</ins> | <ins class="g-color-css3-new">inline-flex</ins></td>
		<td class="unsupport">6.0-10.0</td>
		<td class="unsupport">2.0-21.0</td>
		<td class="unsupport">4.0-20.0</td>
		<td class="unsupport">6.0</td>
		<td class="support">15.0+<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">6.0-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-19.0</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">11.0+</td>
		<td class="support" rowspan="2">22.0+</td>
		<td class="support">21.0+<sup class="fix">-webkit-</sup></td>
		<td class="support">6.1+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">17.0+</td>
		<td class="support">7.0+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">4.4+</td>
		<td class="support">20.0+<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">29.0+</td>
		<td class="support">9.0+</td>
		<td class="support">9.0+</td>
		<td class="support">28.0+</td>
	</tr>
</tbody>
</table>

- Basic Support包含值：none | inline | block | list-item | inline-block
- table系包含值：table | inline-table | table-caption | table-cell | table-row | table-row-group | table-column | table-column-group | table-footer-group | table-header-group
- IE6,7只支持inline元素设置为inline-block，其它类型元素均不可以

##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
body{font:14px/1.5 georgia,simsun,arial;}
h1{margin:10px 0;font-size:20px;}
ul{margin:0;padding:0;list-style:none;}
.table{display:table;border-collapse:collapse;border:1px solid #ccc;}
.table-caption{display:table-caption;margin:0;padding:0;font-size:16px;}
.table-column-group{display:table-column-group;}
.table-column{display:table-column;width:100px;}
.table-row-group{display:table-row-group;}
.table-row{display:table-row;}
.table-row-group .table-row:hover,.table-footer-group .table-row:hover{background:#f6f6f6;}
.table-cell{display:table-cell;padding:0 5px;border:1px solid #ccc;}
.table-header-group{display:table-header-group;background:#eee;font-weight:bold;}
.table-footer-group{display:table-footer-group;}
</style>
</head>
<body>
<h1>display构造的table小例子，IE7及以下浏览器不支持本示例</h1>
<div class="table">
	<h2 class="table-caption">花名册：</h2>
	<div class="table-column-group">
		<div class="table-column"></div>
		<div class="table-column"></div>
		<div class="table-column"></div>
	</div>
	<div class="table-header-group">
		<ul class="table-row">
			<li class="table-cell">序号</li>
			<li class="table-cell">姓名</li>
			<li class="table-cell">年龄</li>
		</ul>
	</div>
	<div class="table-footer-group">
		<ul class="table-row">
			<li class="table-cell">footer</li>
			<li class="table-cell">footer</li>
			<li class="table-cell">footer</li>
		</ul>
	</div>
	<div class="table-row-group">
		<ul class="table-row">
			<li class="table-cell">1</li>
			<li class="table-cell">John</li>
			<li class="table-cell">19</li>
		</ul>
		<ul class="table-row">
			<li class="table-cell">2</li>
			<li class="table-cell">Mark</li>
			<li class="table-cell">21</li>
		</ul>
		<ul class="table-row">
			<li class="table-cell">3</li>
			<li class="table-cell">Kate</li>
			<li class="table-cell">26</li>
		</ul>
	</div>
</div>
</body>
</html>

```
