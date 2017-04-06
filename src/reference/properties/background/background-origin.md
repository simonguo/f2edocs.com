#background-origin

##语法

- background-origin：&lt;box&gt; [ , &lt;box&gt; ]*
- &lt;box&gt; = border-box | padding-box | content-box
- 默认值：padding-box
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- padding-box：从padding区域（含padding）开始显示背景图像。
- border-box：从border区域（含border）开始显示背景图像。
- content-box：从content区域开始显示背景图像。


##说明

设置或检索对象的背景图像计算 &lt;' background-position '&gt; 时的参考原点(位置)。

- 对应的脚本特性为backgroundOrigin。


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
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-3.5</td>
		<td class="support" rowspan="3">4.0+</td>
		<td class="support" rowspan="3">6.0+</td>
		<td class="support" rowspan="3">15.0+</td>
		<td class="support" rowspan="3">6.0+</td>
		<td class="support">2.1-2.3 <sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">18.0+</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support">3.6 <sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="3">3.0+</td>
	</tr>
	<tr>
		<td class="support">4.0+</td>
	</tr>
</tbody>
</table>


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font-size:20px;}
h2{font-size:16px;}
p{border:10px dashed #666;width:200px;height:200px;padding:20px;background:#aaa url(skin/p_103x196_1.jpg) no-repeat;}
.border-box p{background-origin:border-box;}
.padding-box p{background-origin:padding-box;}
.content-box p{background-origin:content-box;}
</style>
</head>
<body>
<h1>background-origin</h1>
<ul class="test">
	<li class="border-box">
		<h2>border-box</h2>
		<p>从border区域（含border）开始显示背景图像</p>
	</li>
	<li class="padding-box">
		<h2>padding-box</h2>
		<p>从padding区域（含padding）开始显示背景图像</p>
	</li>
	<li class="content-box">
		<h2>content-box</h2>
		<p>从content区域开始显示背景图像</p>
	</li>
</ul>
</body>
</html>

```
