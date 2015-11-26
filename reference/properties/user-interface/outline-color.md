#outline-color

##语法

- outline-color：&lt;color&gt; | invert
- 默认值：invert
- 适用于：所有元素
- 继承性：无
- 动画性：当取值为&lt;color&gt;时
- 计算值：invert; 当指定为半透明时则对应一个rgba()计算值；如果非半透明值则对应一个rgb()计算值，transparent对应rgb(0,0,0,0)



##取值

- &lt;color&gt;：指定颜色。
- invert：使用背景色的反色。该参数值目前仅在IE及Opera下有效


##说明

设置或检索对象外的线条轮廓的颜色。

- outlines相关属性不占据布局空间，不会影响元素的尺寸；
- outlines可能是非矩形；
- 不允许类似 &lt;' border-color'&gt; 属性那样能将自身拆分为 &lt;' border-top-color'&gt;, &lt;' border-right-color'&gt;, &lt;' border-bottom-color'&gt;, &lt;' border-left-color '&gt;
- 对应的脚本特性为outlineColor。


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
.test{width:200px;padding:10px;outline-width:5px;outline-style:solid;outline-color:#f90;border:3px solid #333;}
</style>
</head>
<body>
<div class="test">注意边框线外面的橙色轮廓<br>outline-color:#f90;</div>
</body>
</html>

```
