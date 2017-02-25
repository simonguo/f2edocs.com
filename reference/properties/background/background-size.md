#background-size

##语法

- background-size：&lt;bg-size&gt; [ , &lt;bg-size&gt; ]*
- &lt;bg-size&gt; =  [ &lt;length&gt; | &lt;percentage&gt; | auto ]{1,2} | cover | contain
- 默认值：auto
- 适用于：所有元素
- 继承性：无
- 动画性：是，除非使用值为关键字
- 计算值：指定值


##取值

- &lt;length&gt;：用长度值指定背景图像大小。不允许负值。
- &lt;percentage&gt;：用百分比指定背景图像大小。不允许负值。
- auto：背景图像的真实大小。
- cover：将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。
- contain：将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。


##说明

检索或设置对象的背景图像的尺寸大小。

- 该属性提供2个参数值(特性值cover和contain除外)。
- 如果提供两个，第一个用于定义背景图像的宽度，第二个用于定义背景图像的高度。
- 如果只提供一个，该值将用于定义背景图像的宽度，第2个值默认为auto，即高度为auto，此时背景图以提供的宽度作为参照来进行等比缩放。
- 对应的脚本特性为backgroundSize。


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
		<td class="support">4.0-14.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="support">6.0-6.1 <sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="3">15.0+</td>
		<td class="support">6.0-6.1 <sup><a href="#support1">#1</a> <a href="#support2">#2</a></sup></td>
		<td class="support">2.1-2.3 <sup><a href="#support1">#1</a></sup> <sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">18.0+</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support">3.6 <sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">7.0+</td>
		<td class="support" rowspan="2">7.0+</td>
		<td class="support">3.0-4.3 <sup><a href="#support1">#1</a></sup></td>
	</tr>
	<tr>
		<td class="support">4.0+</td>
		<td class="support">4.4+</td>
	</tr>
</tbody>
</table>

- 不支持写入 &lt;' background '&gt; 缩写方式。
- iOS6.1及更早cover值在body上有bug；同时background-size: cover; background-attachment: fixed;配合时也有bug。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font-size:20px;}
h2{font-size:16px;}
p{border:10px dashed #666;width:300px;height:300px;padding:20px;background:url(skin/p_103x196_1.jpg) no-repeat;}
.cover p{background-size:cover;}
.contain p{background-size:contain;}
.length p{background-size:100px 140px;}
</style>
</head>
<body>
<h1>background-size</h1>
<ul class="test">
	<li class="cover">
		<h2>cover</h2>
		<p>将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。</p>
	</li>
	<li class="contain">
		<h2>contain</h2>
		<p>将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。</p>
	</li>
	<li class="length">
		<h2>length</h2>
		<p>自定义背景图像大小</p>
	</li>
</ul>
</body>
</html>
```
