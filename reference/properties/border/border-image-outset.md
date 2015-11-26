#border-image-outset

##语法

- border-image-outset：[ &lt;length&gt; | &lt;number&gt; ]{1,4}
- 默认值：0
- 适用于：所有元素，除table元素设置了 &lt;' border-collapse '&gt; 为collapse之外
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- &lt;length&gt;：用长度值指定宽度。不允许负值。
- &lt;number&gt;：用浮点数指定宽度。不允许负值。


##说明

置或检索对象的边框背景图的扩展。

- 该属性用于指定边框图像向外扩展所定义的数值，即如果值为10px，则图像在原本的基础上往外延展10px再显示。
- 对应的脚本特性为borderImageOutset。


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
.test{
	padding: 10px;
	border-image-source: url(skin/border.png);
	border-image-slice: 27;
	border-image-width: auto;
	border-image-outset: 10px;
}
</style>
</head>
<body>
<div class="test">用图片来做边框</div>
</body>
</html>

```
