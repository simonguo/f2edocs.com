#empty-cells

##语法

- empty-cells：hide | show
- 默认值：show
- 适用于：table系元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- hide：指定当表格的单元格无内容时，隐藏该单元格的边框。
- show：指定当表格的单元格无内容时，显示该单元格的边框。


##说明

设置或检索当表格的单元格无内容时，是否显示该单元格的边框。

- IE7及以下浏览器中默认隐藏无内容的单元格边框，要想使其获得与show参数值相同的效果，可以变相给该空单元格加个占位且不可见的元素，例如全角空格或&ampnbsp;等等。
- 只有当表格边框独立（即 &lt;' border-collapse '&gt; 属性等于separate时）此属性才起作用。
- 对应的脚本特性为emptyCells。


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
.test{empty-cells:show;}
.test2{empty-cells:hide;}
</style>
</head>
<body>
<h1>show:</h1>
<table border="1" class="test">
<tbody>
	<tr>
		<td>序号</td>
		<td>姓名</td>
		<td>年龄</td>
	</tr>
	<tr>
		<td>1</td>
		<td>Joy</td>
		<td>26</td>
	</tr>
	<tr>
		<td>2</td>
		<td>Kate</td>
		<td></td>
	</tr>
</tbody>
</table>
</table>

<h1>hide:</h1>
<table border="1" class="test2">
<tbody>
	<tr>
		<td>序号</td>
		<td>姓名</td>
		<td>年龄</td>
	</tr>
	<tr>
		<td>1</td>
		<td>Joy</td>
		<td>26</td>
	</tr>
	<tr>
		<td>2</td>
		<td>Kate</td>
		<td></td>
	</tr>
</tbody>
</table>
</table>
</body>
</html>

```
