#resize

##语法

- resize：none | both | horizontal | vertical
- 默认值：none
- 适用于：所有 &lt;' overflow '&gt; 设置为非visible的元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：不允许用户调整元素大小。
- both：用户可以调节元素的宽度和高度。
- horizontal：用户可以调节元素的宽度
- vertical：用户可以调节元素的高度。


##说明

设置或检索对象的区域是否允许用户缩放，调节元素尺寸大小。

- 如果希望此属性生效，需要设置对象的overflow属性，值可以是auto,hidden或scroll。
- 对应的脚本特性为resize。


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
		<td rowspan="3" class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-3.6</td>
		<td rowspan="3" class="support">4.0+</td>
		<td rowspan="3" class="support">6.0+</td>
		<td rowspan="3" class="support">15.0+</td>
		<td rowspan="3" class="unsupport">6.0-8.3</td>
		<td rowspan="3" class="unsupport">2.1-4.4.4</td>
		<td rowspan="3" class="support">18.0+</td>
	</tr>
	<tr>
		<td class="support">4.0 <sup class="fix">-moz-</sup></td>
	</tr>
	<tr>
		<td class="support">5.0</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{overflow:auto;width:200px;height:100px;resize:both;background:#eee;}
</style>
</head>
<body>
<div class="test">
	<ul>
		<li>新闻列表</li>
		<li>新闻列表</li>
		<li>新闻列表</li>
	</ul>
</div>
</body>
</html>

```
