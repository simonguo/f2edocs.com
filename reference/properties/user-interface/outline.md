#outline

##语法

- outline：&lt;' outline-width '&gt; || &lt;'  outline-style '&gt; || &lt;'  outline-color '&gt;
- 默认值：看每个独立属性
- 适用于：所有元素
- 继承性：无
- 动画性：看每个独立属性
- 计算值：看每个独立属性
- 相关属性: &lt;' outline-offset '&gt;


##取值

- &lt;' outline-width '&gt;：指定轮廓边框的宽度。
- &lt;' outline-style '&gt;：指定轮廓边框的样式。
- &lt;' outline-color '&gt;：指定轮廓边框的颜色。


##说明

复合属性。设置或检索对象外的线条轮廓。

- outlines相关属性不占据布局空间，不会影响元素的尺寸；
- outlines可能是非矩形；
- 不允许类似 &lt;' border '&gt; 属性那样能将自身拆分为 &lt;' border-top '&gt; , &lt;' border-right '&gt; , &lt;' border-bottom '&gt; , &lt;' border-left '&gt;
- 对应的脚本特性为outline。


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
.test{width:100px;padding:10px;outline:2px solid #f00;border:3px solid #333;}
</style>
</head>
<body>
<div class="test">注意边框线外面的红色轮廓</div>
</body>
</html>

```
