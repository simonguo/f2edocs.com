#caption-side

##语法

- caption-side：top | bottom
- 默认值：top
- 适用于：table系元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- top：指定caption在表格上边
- bottom：指定caption在表格下边


##说明

设置或检索表格的caption对象是在表格的那一边。

- 要在IE7及以下浏览器中实现top与bottom参数值的效果，可直接在caption标签内定义标签属性valign为top和bottom。
- Firefox还额外支持right和left两个非标准值
- 对应的脚本特性为captionSide。


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
		<td rowspan="2"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-7.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font-size:16px;font-family:Arial;}
.test1{caption-side:top;}
.test2{caption-side:right;}
.test3{caption-side:bottom;}
.test4{caption-side:left;}
</style>
</head>
<body>
<h1>caption在上边</h1>
<table border="1" class="test1">
<caption>caption在上边</caption>
<tbody>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
</tbody>
</table>
</table>

<h1>caption在右边</h1>
<table border="1" class="test2">
<caption>caption在右边</caption>
<tbody>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
</tbody>
</table>
</table>

<h1>caption在下边</h1>
<table border="1" class="test3">
<caption>caption在下边</caption>
<tbody>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
</tbody>
</table>
</table>

<h1>caption在左边</h1>
<table border="1" class="test4">
<caption>caption在左边</caption>
<tbody>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
</tbody>
</table>
</table>
</body>
</html>

```
