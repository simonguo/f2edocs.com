#border-image-repeat

##语法

- border-image-repeat：[ stretch | repeat | round | space ]{1,2}
- 默认值：stretch
- 适用于：所有元素，除table元素设置了 &lt;' border-collapse '&gt; 为collapse之外
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- stretch：指定用拉伸方式来填充边框背景图。
- repeat：指定用平铺方式来填充边框背景图。当图片碰到边界时，如果超过则被截断。
- round：指定用平铺方式来填充边框背景图。图片会根据边框的尺寸动态调整图片的大小直至正好可以铺满整个边框。
- space：指定用平铺方式来填充边框背景图。图片会根据边框的尺寸动态调整图片的之间的间距直至正好可以铺满整个边框。


##说明

设置或检索对象的边框图像的平铺方式。

- 该属性用于指定边框背景图的填充方式。可定义0-2个参数值，即水平和垂直方向。如果2个值相同，可合并成1个，表示水平和垂直方向都用相同的方式填充边框背景图；如果2个值都为stretch，则可省略不写。
- 对应的脚本特性为borderImageRepeat。


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
		<td class="unsupport">6.0-10.0</td>
		<td class="unsupport">2.0-3.0</td>
		<td class="partsupport">4.0-14.0<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport">3.1-5.1<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">15.0+</td>
		<td class="partsupport">3.2-5.1<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport">2.1-4.3<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">18.0+</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">11.0+</td>
		<td class="partsupport">3.5-14.0<br><sup class="fix">-moz-</sup></td>
		<td class="support">15.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">6.1+</td>
		<td class="support" rowspan="2">4.4-4.4.4</td>
	</tr>
	<tr>
		<td class="support">15.0+</td>
		<td class="support">16.0+</td>
	</tr>
	<tr>
		<td>space</td>
		<td class="partsupport">11.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">3.5-38.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">15.0-43.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">3.1-8.1 <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">15.0-28.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">3.2-8.1 <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">2.1-4.4.4 <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">18.0-40.0 <sup><a href="#support1">#1</a></sup></td>
	</tr>
</tbody>
</table>


- 不支持 space 属性值。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{
	padding: 10px;
	border-image-source: url(skin/border.png);
	border-image-slice: 27;
	border-image-width: auto;
	border-image-repeat: repeat;
}
</style>
</head>
<body>
<div class="test">用图片来做边框</div>
</body>
</html>

```
