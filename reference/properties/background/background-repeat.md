#background-repeat

##语法

- background-repeat：&lt;repeat-style&gt; [ , &lt;repeat-style&gt; ]* <i class='fa fa-css3'></i>
- &lt;repeat-style&gt; = repeat-x | repeat-y | [repeat | no-repeat | space<i class='fa fa-css3'></i> | round<i class='fa fa-css3'></i>]{1,2<i class='fa fa-css3'></i>}
- 默认值：repeat
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- repeat-x：背景图像在横向上平铺
- repeat-y：背景图像在纵向上平铺
- repeat：背景图像在横向和纵向平铺
- no-repeat：背景图像不平铺
- round：背景图像自动缩放直到适应且填充满整个容器。（CSS3）
- space：背景图像以相同的间距平铺且填充满整个容器或某个方向。（CSS3）


##说明

设置或检索对象的背景图像如何铺排填充。必须先指定 &lt;' background-image '&gt; 属性。

- 允许提供2个参数，如果提供全部2个参数，第1个用于横向，第二个用于纵向。
- 如果只提供1个参数，则用于横向和纵向。特殊值repeat-x和repeat-y除外，因为repeat-x相当于repeat no-repeat，repeat-y相当于no-repeat repeat，即其实repeat-x和repeat-y等价于提供了2个参数值
- 对应的脚本特性为backgroundRepeat。


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
		<td class="support" rowspan="5">4.0+</td>
		<td class="support" rowspan="5">3.1+</td>
		<td class="support" rowspan="5">15.0+</td>
		<td class="support" rowspan="5">3.2+</td>
		<td class="support" rowspan="5">2.1+</td>
		<td class="support" rowspan="5">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">2个参数值</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-12.0</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">13.0+</td>
	</tr>
	<tr>
		<td rowspan="2"><ins class="g-color-css3-new">space</ins> | <ins class="g-color-css3-new">round</ins></td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport" rowspan="2">2.0-38.0</td>
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
.test {
	padding-top: 200px;
	background-image: url(skin/p_103x196_1.jpg);
	background-repeat: repeat-x;
}
</style>
</head>
<body>
<div class="test">横向平铺背景图片</div>
</body>
</html>

```
