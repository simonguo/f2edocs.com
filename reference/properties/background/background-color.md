#background-color

##语法

- background-color：&lt;color&gt;
- 默认值：transparent
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;color&gt;：指定颜色。


##说明

设置或检索对象的背景颜色。

- 当同时定义了背景颜色和背景图像时，背景图像覆盖在背景颜色之上。
- 如果设置了 &lt;' background-image '&gt;，同时也建议设置 &lt;' background-color '&gt; 用于当背景图像不可见时保持与文本颜色有一定的对比度。
- 对应的脚本特性为backgroundColor。


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
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="4">2.0+</td>
		<td class="support" rowspan="4">4.0+</td>
		<td class="support" rowspan="4">3.1+</td>
		<td class="support" rowspan="4">3.5+</td>
		<td class="support" rowspan="4">3.2+</td>
		<td class="support" rowspan="4">2.1+</td>
		<td class="support" rowspan="4">18.0+</td>
	</tr>
	<tr>
		<td><a href="../../values/color/transparent.htm">transparent</a></td>
	</tr>
	<tr>
		<td rowspan="2"><a href="../../values/color/rgba.htm">RGBA</a>, <a href="../../values/color/hsl.htm">HSL</a>, <a href="../../values/color/hsla.htm">HSLA</a></td>
		<td class="unsupport">6.0-8.0</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
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
	border: 1px solid #000;
	background-color: #808080;
}
</style>
</head>
<body>
<div class="test">灰色背景</div>
</body>
</html>

```
