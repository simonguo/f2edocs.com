#vertical-align

##语法

- vertical-align：baseline | sub | super | top | text-top | middle | bottom | text-bottom | &lt;percentage&gt; | &lt;length&gt;
- 默认值：baseline
- 适用于：内联及 table-cell 元素
- 继承性：无
- 动画性：当值为 &lt;length&gt; 时
- 计算值：指定值


##取值

- baseline：将支持valign特性的对象的内容与基线对齐
- sub：垂直对齐文本的下标
- super：垂直对齐文本的上标
- top：将支持valign特性的对象的内容与对象顶端对齐
- text-top：将支持valign特性的对象的文本与对象顶端对齐
- middle：将支持valign特性的对象的内容与对象中部对齐
- bottom：将支持valign特性的对象的文本与对象底端对齐
- text-bottom：将支持valign特性的对象的文本与对象顶端对齐
- &lt;percentage&gt;：用百分比指定由基线算起的偏移量。可以为负值。基线对于百分数来说就是0%。
- &lt;length&gt;：用长度值指定由基线算起的偏移量。可以为负值。基线对于数值来说为0。（CSS2）


##说明

设置或检索内联元素在行框内的垂直对其方式。

- 对应的脚本特性为verticalAlign。


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
		<td class="support">6.0+</td>
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
.test p{border:1px solid #000;font-size:16px;line-height:2;}
.test a{margin-left:5px;font-size:12px;}
.baseline a{vertical-align:baseline;}
.sub a{vertical-align:sub;}
.super a{vertical-align:super;}
.top a{vertical-align:top;}
.text-top a{vertical-align:text-top;}
.middle a{vertical-align:middle;}
.bottom a{vertical-align:bottom;}
.text-bottom a{vertical-align:text-bottom;}
.length a{vertical-align:10px;}
</style>
</head>
<body>
<ul class="test">
	<li class="baseline">
		<strong>与基线对齐</strong>
		<p>参考内容<a href="?">基线对齐</a></p>
	</li>
	<li class="sub">
		<strong>与参考内容的下标对齐</strong>
		<p>参考内容<a href="?">下标对齐</a></p>
	</li>
	<li class="super">
		<strong>与参考内容的上标对齐</strong>
		<p>参考内容<a href="?">上标对齐</a></p>
	</li>
	<li class="top">
		<strong>对象的内容与对象顶端对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="text-top">
		<strong>对象的文本与对象顶端对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="middle">
		<strong>对象的内容与对象中部对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="bottom">
		<strong>对象的内容与对象底端对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="text-bottom">
		<strong>对象的文本与对象顶端对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="length">
		<strong>与基线算起的偏移量</strong>
		<p>参考内容<a href="?">偏移量对齐</a></p>
	</li>
</ul>
</body>
</html>

```
