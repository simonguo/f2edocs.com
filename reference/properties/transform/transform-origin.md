#transform-origin

##语法

- transform-origin：[ &lt;percentage&gt; | &lt;length&gt; | left | center① | right ] [ &lt;percentage&gt; | &lt;length&gt; | top | center② | bottom ]?
- 默认值：50% 50%，效果等同于center center
- 适用于：所有块级元素及某些内联元素
- 继承性：无
- 动画性：当值为数值时
- 计算值：除了指定绝对值，否则都为百分比
- 媒体：视觉


##取值

- &lt;percentage&gt;：用百分比指定坐标值。可以为负值。
- &lt;length&gt;：用长度值指定坐标值。可以为负值。
- left：指定原点的横坐标为left
- center①：指定原点的横坐标为center
- right：指定原点的横坐标为right
- top：指定原点的纵坐标为top
- center②：指定原点的纵坐标为center
- bottom：指定原点的纵坐标为bottom


##说明

设置或检索对象以某个原点进行转换。

- 该属性提供2个参数值。
- 如果提供两个，第一个用于横坐标，第二个用于纵坐标。
- 如果只提供一个，该值将用于横坐标；纵坐标将默认为50%。
- 对应的脚本特性为transformOrigin。


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
		<td rowspan="3"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-3.0</td>
		<td class="support">4.0-35.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-22.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.4<sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-34.0<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">9.0<sup class="fix">-ms-</sup></td>
		<td class="support">3.5-15.0<sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="2">36.0+</td>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support" rowspan="2">23.0+</td>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support" rowspan="2">40.0+</td>
		<td class="support" rowspan="2">35.0+</td>
	</tr>
	<tr>
		<td class="support">10.0+</td>
		<td class="support">16.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{margin:0;padding:0;list-style:none;border:1px solid #000;}
.test li{width:50px;height:50px;border:1px solid #000;background:#ddd;
	-moz-transform-origin:0 0;-moz-transform:rotate(45deg);
	-webkit-transform-origin:0 0;-webkit-transform:rotate(45deg);
	-ms-transform-origin:0 0;-ms-transform:rotate(45deg);
	transform-origin:0 0;transform:rotate(45deg);
}
</style>
</head>
<body>
<ul class="test">
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
</body>
</html>

```
