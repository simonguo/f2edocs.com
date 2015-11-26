#background-attachment

##语法

- background-attachment：&lt;attachment&gt; [ , &lt;attachment&gt; ]* <i class='fa fa-css3'></i>
- &lt;attachment&gt; = fixed | scroll | local<i class='fa fa-css3'></i>
- 默认值：scroll
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- fixed：背景图像相对于窗体固定。
- scroll：背景图像相对于元素固定，也就是说当元素内容滚动时背景图像不会跟着滚动，因为背景图像总是要跟着元素本身。但会随元素的祖先元素或窗体一起滚动。
- local：背景图像相对于元素内容固定，也就是说当元素随元素滚动时背景图像也会跟着滚动，因为背景图像总是要跟着内容。（CSS3）


##说明

设置或检索背景图像是随对象内容滚动还是固定的。必须先指定 &lt;' background-image '&gt; 属性。

- 对应的脚本特性为backgroundAttachment。


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
		<td class="support" rowspan="3">4.0+</td>
		<td class="support" rowspan="3">3.1+</td>
		<td class="support" rowspan="3">3.5+</td>
		<td class="support" rowspan="3">3.2+</td>
		<td class="support" rowspan="3">2.1+</td>
		<td class="support" rowspan="3">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2"><ins class="g-color-css3-new" title="css3">local</ins></td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-24.0</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">25.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
body {
	background-image: url(skin/p_103x196_1.jpg);
	background-repeat: no-repeat;
	background-position: 50% 200px;
	background-attachment: fixed;
}
</style>
</head>
<body>
	<p>背景图像不随窗体内容滚动始终固定</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>文字内容</p>
	<p>背景图像不随窗体内容滚动始终固定</p>
</body>
</html>

```
