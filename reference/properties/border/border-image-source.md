#border-image-source

##语法

- border-image-source：none | &lt;image&gt;
- 默认值：none
- 适用于：所有元素，除table元素设置了 &lt;' border-collapse '&gt; 为collapse之外
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：无背景图片。
- &lt;image&gt;：使用绝对或相对地址指或者创建渐变色来确定图像。


##说明

设置或检索对象的边框样式使用图像路径。

- 指定一个图像用来替代 &lt;' border-style '&gt; 边框样式的属性。当 &lt;' border-image '&gt; 为none或图像不可见时，将会显示 &lt;' border-style '&gt; 所定义的边框样式效果。
- 对应的脚本特性为borderImageSource。


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
.test {
	padding: 10px;
	border-image-source: url(skin/border.png);
	border-image-slice: 27;
	border-image-width: 27px;
}
</style>
</head>
<body>
<div class="test">用图片来做边框</div>
</body>
</html>

```
