#outline-width

##语法

- outline-width：&lt;length&gt; | thin | medium | thick
- 默认值：medium
- 适用于：所有元素
- 继承性：无
- 动画性：当取值为&lt;length&gt;时
- 计算值：绝对长度；如果 &lt;' outline-style '&gt; 的值为none时，则计算值为0


##取值

- &lt;length&gt;：用长度值来定义轮廓的厚度。不允许负值
- medium：定义默认宽度的轮廓。
- thin：定义比默认宽度细的轮廓。
- thick：定义比默认宽度粗的轮廓。


##说明

设置或检索对象外的线条轮廓的宽度。

- outlines相关属性不占据布局空间，不会影响元素的尺寸；
- outlines可能是非矩形；
- 不允许类似 &lt;' border-width '&gt; 属性那样能将自身拆分为 &lt;' border-top-width '&gt; , &lt;' border-right-width '&gt; , &lt;' border-bottom-width '&gt; , &lt;' border-left-width '&gt;
- 对应的脚本特性为outlineWidth。


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
.test{width:200px;padding:10px;outline-width:10px;outline-style:solid;outline-color:#f00;border:3px solid #333;}
</style>
</head>
<body>
<div class="test">注意边框线外面的红色轮廓<br>outline-width:10px;</div>
</body>
</html>

```
