#background-image

##语法

- background-image：&lt;bg-image&gt; [ , &lt;bg-image&gt; ]* <i class='fa fa-css3'></i>
- &lt;bg-image&gt; = &lt;image&gt; | none
- 默认值：none
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：无背景图。
- &lt;image&gt;：使用绝对或相对地址指或者创建渐变色来确定图像。


##说明

设置或检索对象的背景图像。

- 如果设置了 &lt;' background-image '&gt;，同时也建议设置 &lt;' background-color '&gt; 用于当背景图像不可见时保持与文本颜色有一定的对比度。
- 如果定义了多组背景图，且背景图之间有重叠，写在前面的将会盖在写在后面的图像之上。
- 对应的脚本特性为backgroundImage。


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
		<td class="support" rowspan="3">2.0+</td>
		<td class="support" rowspan="3">4.0+</td>
		<td class="support" rowspan="3">3.1+</td>
		<td class="support" rowspan="3">3.5+</td>
		<td class="support" rowspan="3">3.2+</td>
		<td class="support" rowspan="3">2.1+</td>
		<td class="support" rowspan="3">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">Multiple image<br>多组图像</td>
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
.test strong {
	font-size: 16px;
}
.test .url p {
	padding-top: 200px;
	background-image: url(skin/p_103x196_1.jpg);
	background-repeat: no-repeat;
}
.test .gradient p {
	height: 100px;
	background-image: linear-gradient(to top, #45B5DA, #0382AD);
}
.test .multiple p {
	padding-top: 200px;
	background-image: url(skin/p_103x196_1.jpg),
					  url(skin/p_103x196_2.jpg),
					  url(skin/p_103x196_3.jpg);
	background-repeat: no-repeat;
	background-position: 0 0,
						 100px 0,
						 200px 0;
}
</style>
</head>
<body>
<ul class="test">
	<li class="url">
		<strong>使用url()引入背景图像</strong>
		<p>使用url()可以是绝对或相对路径</p>
	</li>
	<li class="gradient">
		<strong>使用渐变绘制背景图像</strong>
		<p>渐变种类有: linear-gradient, radial-gradient, repeating-linear-gradient, repeating-radial-gradient</p>
	</li>
	<li class="multiple">
		<strong>多重背景图</strong>
		<p>多重背景图可以是url()或gradient的混合方式</p>
	</li>
</ul>
</body>
</html>

```
