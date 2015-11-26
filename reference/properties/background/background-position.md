#background-position

##语法

- background-position：&lt;position&gt; [ , &lt;position&gt; ]* <i class='fa fa-css3'></i>
- &lt;position&gt; = [ left | center | right | top | bottom | &lt;percentage&gt; | &lt;length&gt; ]
|
  [ left | center | right | &lt;percentage&gt; | &lt;length&gt; ]
  [ top | center | bottom | &lt;percentage&gt; | &lt;length&gt; ]
|
  [ center | [ left | right ] [ &lt;percentage&gt; | &lt;length&gt; ]? ] &amp;&amp;
  [ center | [ top | bottom ] [ &lt;percentage&gt; | &lt;length&gt; ]? ]
- 默认值：0% 0%，效果等同于left top
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;percentage&gt;：用百分比指定背景图像填充的位置。可以为负值。
- &lt;length&gt;：用长度值指定背景图像填充的位置。可以为负值。
- center：背景图像横向和纵向居中。
- left：背景图像在横向上填充从左边开始。
- right：背景图像在横向上填充从右边开始。
- top：背景图像在纵向上填充从顶部开始。
- bottom：背景图像在纵向上填充从底部开始。


##说明

设置或检索对象的背景图像位置。必须先指定 &lt;' background-image '&gt; 属性。

- 该属性提供2个参数值（CSS3中已允许提供4个值）。
- 如果提供四个，每个&lt;percentage&gt;或&lt;length&gt;偏移前都必须跟着一个关键字（即left | center | right | top | bottom），偏移量相对关键字位置进行偏移。
- 示例：假设要定义背景图像在容器中右下方，并且距离右边和底部各有20px

**缩写方式**

```css
background:url(test1.jpg) no-repeat right 20px bottom 20px;
```

**你也可以设置3个参数值：**

```css
background:url(test1.jpg) no-repeat left bottom 10px;
```

>要注意的是：设置3个或4个值，偏移量前必须有关键字。也就是说，形如："10px bottom 20px" ，这样的参数设置是错误的，因为10px前面没有关键字。

- 如果提供两个，第一个用于横坐标，第二个用于纵坐标。
- 如果只提供一个，该值将用于横坐标；纵坐标将默认为50%（即center）。
- 对应的脚本特性为backgroundPosition。


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
		<th>Android UC</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td><strong>Basic Support</strong></td>
		<td class="support">6.0+</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">3.1+</td>
		<td class="support" rowspan="3">15.0+</td>
		<td class="support">3.2+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
		<td class="support">7.0+</td>
	</tr>
	<tr>
		<td rowspan="2">3-4个参数<br>以边界作参考偏移</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-12.0</td>
		<td class="unsupport">4.0-24.0</td>
		<td class="unsupport">3.1-6.1</td>
		<td class="unsupport">3.2-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-24.0</td>
		<td class="unsupport" rowspan="2">7.0-9.9</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">13.0+</td>
		<td class="support">25.0+</td>
		<td class="support">7.0+</td>
		<td class="support">7.0+</td>
		<td class="support">4.4+</td>
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
.test {
	border: 1px solid #000;
	width: 400px;
	height: 500px;
	background-image: url(skin/p_103x196_1.jpg);
	background-repeat: no-repeat;
	background-position: center;
}
</style>
</head>
<body>
<div class="test">背景图水平垂直居中</div>
</body>
</html>

```
