#overflow-x

##语法

- overflow-x：&lt;overflow-style&gt;
- &lt;overflow-style&gt; = visible | hidden | scroll | auto | paged-x<i class='fa fa-css3'></i> | paged-y<i class='fa fa-css3'></i> | paged-x-controls<i class='fa fa-css3'></i> | paged-y-controls<i class='fa fa-css3'></i> | fragments<i class='fa fa-css3'></i>
- 默认值：visible
- 适用于：块容器，伸缩盒容器，grid容器
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- visible：对溢出内容不做处理，内容可能会超出容器。
- hidden：隐藏溢出容器的内容且不出现滚动条。
- scroll：隐藏溢出容器的内容，溢出的内容将以卷动滚动条的方式呈现。
- auto：当内容没有溢出容器时不出现滚动条，当内容溢出容器时出现滚动条，按需出现滚动条。此为body对象和textarea的默认值。
- paged-x：TODO...（CSS3）
- paged-y：TODO...（CSS3）
- paged-x-controls：TODO...（CSS3）
- paged-y-controls：TODO...（CSS3）
- fragments：TODO...（CSS3）


##说明

检索或设置对象处理横向溢出内容的方式。

- 对应的脚本特性为overflowX。


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
		<td class="support">3.1+</td>
		<td class="support">7.0+</td>
		<td class="support">3.2+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td><ins class="g-color-css3-new">page-*</ins></td>
		<td class="unsupport">11.0</td>
		<td class="unsupport">38.0</td>
		<td class="unsupport">43.0</td>
		<td class="unsupport">8.1</td>
		<td class="unsupport">28.0</td>
		<td class="unsupport">8.1</td>
		<td class="unsupport">4.4.4</td>
		<td class="unsupport">40.0</td>
	</tr>
	<tr>
		<td><ins class="g-color-css3-new">page-*-controls</ins></td>
		<td class="unsupport">11.0</td>
		<td class="unsupport">38.0</td>
		<td class="unsupport">43.0</td>
		<td class="unsupport">8.1</td>
		<td class="unsupport">28.0</td>
		<td class="unsupport">8.1</td>
		<td class="unsupport">4.4.4</td>
		<td class="unsupport">40.0</td>
	</tr>
	<tr>
		<td><ins class="g-color-css3-new">fragments</ins></td>
		<td class="unsupport">11.0</td>
		<td class="unsupport">38.0</td>
		<td class="unsupport">43.0</td>
		<td class="unsupport">8.1</td>
		<td class="unsupport">28.0</td>
		<td class="unsupport">8.1</td>
		<td class="unsupport">4.4.4</td>
		<td class="unsupport">40.0</td>
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
	overflow-x: auto;
	width: 200px;
	white-space: nowrap;
}
</style>
</head>
<body>
<div class="test">当内容超出设定的宽度时自动出现横向滚动条</div>
</body>
</html>

```
