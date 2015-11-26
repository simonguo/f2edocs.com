#border-image-slice

##语法

- border-image-slice：[ &lt;number&gt; | &lt;percentage&gt; ]{1,4} && fill?
- 默认值：100%
- 适用于：所有元素，除table元素设置了 &lt;' border-collapse '&gt; 为collapse之外
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- &lt;number&gt;：用浮点数指定宽度。不允许负值。
- &lt;percentage&gt;：用百分比指定宽度。参照其包含块区域进行计算。不允许负值。
- fill：保留裁减后的中间区域，其铺排方式遵循 &lt;' border-image-repeat '&gt; 的设定。


##说明

设置或检索对象的边框背景图的分割方式。

- 该属性指定从上，右，下，左方位来分隔图像，将图像分成4个角，4条边和中间区域共9份，中间区域始终是透明的（即没图像填充），除非加上关键字 fill。
- 对应的脚本特性为borderImageSlice。


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
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test1,
.test2 {
	margin-top: 10px;
	padding: 5px;
	border-width: 1px 9px;
	border-style: solid;
	border-color: orange;
	border-image-source: url(skin/button.png);
	border-image-repeat: repeat stretch;
}
.test1 {
	border-image-slice: 1 9;
}
.test2 {
	border-image-slice: 1 9 fill;
}
</style>
</head>
<body>
<div class="test1">不保留裁减后的中间区域</div>
<div class="test2">保留裁减后的中间区域</div>
</body>
</html>

```
