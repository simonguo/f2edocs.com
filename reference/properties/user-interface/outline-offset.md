#outline-offset

##语法

- outline-offset：&lt;length&gt;
- 默认值：0
- 适用于：所有元素
- 继承性：无
- 动画性：当取值为&lt;length&gt;时
- 计算值：绝对长度


##取值

- &lt;length&gt;：用长度值来定义轮廓偏移。允许负值。


##说明

设置或检索对象外的线条轮廓偏移容器的值。

- outlines相关属性不占据布局空间，不会影响元素的尺寸；
- outlines可能是非矩形；
- outline-offset是以border边界作为参考点的，从0开始，正值从border边界往外延，负值从border边界往里缩。
- 对应的脚本特性为outlineOffset。


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
		<td class="unsupport">6.0-11.0</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">6.0+</td>
		<td class="support">15.0+</td>
		<td class="support">6.0+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{width:220px;padding:10px;outline:1px dashed #333;outline-offset:4px;border:3px solid #333;}
</style>
</head>
<body>
<div class="test">注意虚线轮廓偏移容器的距离<br>outline-offset:4px;</div>
</body>
</html>

```
