#position

##语法

- position：static | relative | absolute | fixed | center<i class='fa fa-css3'></i> | page<i class='fa fa-css3'></i> | sticky<i class='fa fa-css3'></i>
- 默认值：static
- 适用于：除display属性定义为table-column-group | table-column之外的所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：视觉


##取值

- static：对象遵循常规流。此时4个定位偏移属性不会被应用。
- relative：对象遵循常规流，并且参照自身在常规流中的位置通过top，right，bottom，left这4个定位偏移属性进行偏移时不会影响常规流中的任何元素。
- absolute：对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到body元素。盒子的偏移位置不影响常规流中的任何元素，其margin不与其他任何margin折叠。
- fixed：与absolute一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。
- center：与absolute一致，但偏移定位是以定位祖先元素的中心点为参考。盒子在其包含容器垂直水平居中。（CSS3）
- page：与absolute一致。元素在分页媒体或者区域块内，元素的包含块始终是初始包含块，否则取决于每个absolute模式。（CSS3）
- sticky：对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）


##说明

检索对象的定位方式。

- 当position的值为非static时，其层叠级别通过z-index属性定义。
- 绝对定位的元素，在top，right，bottom，left属性未设置时，会紧随在其前面的兄弟元素之后，但在位置上不影响常规流中的任何元素。用这个特性你或许会干这样的事：demo
- 对应的脚本特性为position。


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
		<td><strong>Basic Support</strong></td>
		<td class="support">6.0+<sup><a href="#support1">#1</a></sup></td>
		<td class="support">2.0+<sup><a href="#support2">#2</a></sup></td>
		<td class="support">4.0+</td>
		<td class="support">6.0+</td>
		<td class="support">15.0+</td>
		<td class="support">6.0+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">fixed</td>
		<td class="unsupport">6.0</td>
		<td rowspan="2" class="support">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="partsupport">2.1-2.3<sup><a href="#support3">#3</a></sup></td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">7.0+</td>
		<td class="support">3.0+</td>
	</tr>
	<tr>
		<td><ins class="g-color-css3-new">center</ins> | <ins class="g-color-css3-new">page</ins></td>
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-42.0</td>
		<td class="unsupport">4.0-47.0</td>
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">15.0-32.0</td>
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-42.0</td>
	</tr>
	<tr>
		<td rowspan="2"><ins class="g-color-css3-new">sticky</ins></td>
		<td rowspan="2" class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-31.0</td>
		<td rowspan="2" class="unsupport">4.0-47.0</td>
		<td class="unsupport">6.0</td>
		<td rowspan="2" class="unsupport">15.0-32.0</td>
		<td rowspan="2" class="support">6.0-9.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="unsupport">2.1-4.4.4</td>
		<td rowspan="2" class="unsupport">18.0-42.0</td>
	</tr>
	<tr>
		<td class="support">32.0+</td>
		<td class="support">6.1-9.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>


- IE如果在 quirks mode下将不支持；
- Firefox30.0开始支持 tr, thead, tfoot, tbody 定义 relative，Firefox30.0之前的版本及其它浏览器都只能给 table 定义 relative 用以约束内部元素的定位；
- 需要定义了才生效


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
#position {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 150px;
	height: 40px;
	margin: -20px 0 0 -75px;
	padding: 0 10px;
	background: #eee;
	line-height: 2.4;
}
</style>
</head>
<body>
<div id="position">水平垂直居中的对象</div>
</body>
</html>

```
