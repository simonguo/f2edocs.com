#table-layout

##语法

- table-layout：auto | fixed
- 默认值：auto
- 适用于：table系元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- auto：默认的自动算法。布局将基于各单元格的内容，换言之，可能你给某个单元格定义宽度为100px，但结果可能并不是100px。表格在每一单元格读取计算之后才会显示出来，速度很慢
- fixed：固定布局的算法。在这算法中，水平布局是仅仅基于表格的宽度，表格边框的宽度，单元格间距，列的宽度，而和表格内容无关。也就是说，内容可能被裁切


##说明

设置或检索表格的布局算法。

- 通常fixed算法会比auto算法高效，尤其是对于那些长表格来说。fixed算法使得表格可以像其它元素一样一行一行的渲染。
- 对应的脚本特性为tableLayout。


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
h1{font-size:16px;font-family:Arial;}
.auto{table-layout:auto;width:350px;}
.fixed{table-layout:fixed;width:350px;}
</style>
</head>
<body>
<h1>auto: 表格自动算法</h1>
<table border="1" class="auto">
<tbody>
	<tr>
		<td>表格自动算法，宽度将基于单元格的内容自动拉伸</td>
		<td>表格自动算法</td>
		<td>表格自动算法</td>
	</tr>
	<tr>
		<td>表格自动算法</td>
		<td>表格自动算法</td>
		<td>表格自动算法</td>
	</tr>
</tbody>
</table>
</table>

<h1>fixed: 表格固定算法</h1>
<table border="1" class="fixed">
<tbody>
	<tr>
		<td>表格固定算法布局</td>
		<td>表格固定算法</td>
		<td>表格固定算法</td>
	</tr>
	<tr>
		<td>表格固定算法</td>
		<td>表格固定算法</td>
		<td>表格固定算法</td>
	</tr>
</tbody>
</table>
</table>
</body>
</html>

```
