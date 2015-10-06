#outline-style

##语法

- outline-style：none | dotted | dashed | solid | double | groove | ridge | inset | outset
- 默认值：none
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：无轮廓。与任何指定的 &lt;' outline-width '&gt; 值无关
- dotted：点状轮廓。
- dashed：虚线轮廓。
- solid：实线轮廓
- double：双线轮廓。两条单线与其间隔的和等于指定的 &lt;' outline-width '&gt; 值
- groove：3D凹槽轮廓。
- ridge：3D凸槽轮廓。
- inset：3D凹边轮廓。
- outset：3D凸边轮廓。


##说明

设置或检索对象外的线条轮廓的样式。

- outlines相关属性不占据布局空间，不会影响元素的尺寸；
- outlines可能是非矩形；
- 不允许类似 &lt;' border-style '&gt; 属性那样能将自身拆分为 &lt;' border-top-style '&gt; , &lt;' border-right-style '&gt; , &lt;' border-bottom-style '&gt; , &lt;' border-left-style '&gt;
- 对应的脚本特性为outlineStyle。


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
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{width:200px;padding:10px;outline-width:1px;outline-style:dashed;outline-color:#f00;border:3px solid #333;}
</style>
</head>
<body>
<div class="test">注意边框线外面的虚线轮廓<br>outline-style:dashed;</div>
</body>
</html>

```
