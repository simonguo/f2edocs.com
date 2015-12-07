#background-clip

##语法

- background-clip：&lt;box&gt; [ , &lt;box&gt; ]*
- &lt;box&gt; = border-box | padding-box | content-box | text
- 默认值：border-box
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- padding-box：从padding区域（不含padding）开始向外裁剪背景。
- border-box：从border区域（不含border）开始向外裁剪背景。
- content-box：从content区域开始向外裁剪背景。
- text：从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果。遮罩效果 See with Webkit


##说明

指定对象的背景图像向外裁剪的区域。

- 对应的脚本特性为backgroundClip。


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
		<td class="support" rowspan="4">4.0+</td>
		<td class="support" rowspan="4">6.0+</td>
		<td class="support" rowspan="4">15.0+</td>
		<td class="support" rowspan="4">6.0+</td>
		<td class="support">2.1-2.3 <sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="4">18.0+</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support">3.6 <sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="3">3.0+</td>
	</tr>
	<tr>
		<td class="support">4.0+</td>
	</tr>
	<tr>
		<td>text <sup><a href="#support1">#1</a></sup></td>
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-38.0</td>
	</tr>
</tbody>
</table>


- text属性值，目前为webkit only [1] [2]。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font-size:20px;}
h2{font-size:16px;}
p{width:200px;height:200px;margin:0;padding:20px;border:10px dashed #666;background:#aaa url(skin/p_103x196_1.jpg) no-repeat;}
.border-box p{background-clip:border-box;}
.padding-box p{background-clip:padding-box;}
.content-box p{background-clip:content-box;}
.text p{width:auto;height:auto;background-repeat:repeat;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:bold;font-size:120px;}
</style>
</head>
<body>
<h1>background-clip</h1>
<ul class="test">
	<li class="border-box">
		<h2>border-box</h2>
		<p>从border区域（不含border）开始向外裁剪背景</p>
	</li>
	<li class="padding-box">
		<h2>padding-box</h2>
		<p>从padding区域（不含padding）开始向外裁剪背景</p>
	</li>
	<li class="content-box">
		<h2>content-box</h2>
		<p>从content区域开始向外裁剪背景</p>
	</li>
	<li class="text">
		<h2>text</h2>
		<p>从前景内容的形状作为裁剪区域向外裁剪背景</p>
	</li>
</ul>
</body>
</html>

```
