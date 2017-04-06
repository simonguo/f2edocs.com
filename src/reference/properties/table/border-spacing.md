#border-spacing

##语法

- border-spacing：&lt;length&gt;{1,2}
- 默认值：0
- 适用于：table系元素
- 继承性：有
- 动画性：否
- 计算值：两个绝对长度值


##取值

- &lt;length&gt;：用长度值来定义行和单元格的边框在横向和纵向上的间距。不允许负值


##说明

设置或检索当表格边框独立时，行和单元格的边框在横向和纵向上的间距

- 该属性作用等同于标签属性cellspacing(单元格边距)。border-spacing:0等同于cellspacing="0"
- 只有当表格边框独立（即 &lt;' border-collapse '&gt; 属性等于separate时）此属性才起作用。
- 如果提供全部两个length值时，第一个作用于横向间距，第二个作用于纵向间距。
- 如果只提供一个length值时，这个值将作用于横向和纵向上的间距。
- 对应的脚本特性为borderSpacing。


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
.test1,.test3{border-collapse:separate;border-spacing:10px 20px;}
.test2{border-collapse:collapse;border-spacing:10px 20px;}
</style>
</head>
<body>
<h1>边框独立时border-spacing生效(IE6/7 是无效的)</h1>
<table border="1" class="test1">
<tbody>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
</tbody>
</table>
</table>

<h1>相邻边被合并时border-spacing无效</h1>
<table border="1" class="test2">
<tbody>
	<tr>
		<td>合并边框</td>
		<td>合并边框</td>
		<td>合并边框</td>
	</tr>
	<tr>
		<td>合并边框</td>
		<td>合并边框</td>
		<td>合并边框</td>
	</tr>
</tbody>
</table>
</table>
<h1>边框独立时border-spacing生效（IE6/7 通过标签属性 cellspacing="20" 设置）</h1>
<table border="1" class="test3" cellspacing="20">
<tbody>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
</tbody>
</table>
</table>
<p>IE6/7下通过标签属性 cellspacing="20" 替代 border-spacing:10px 20px; 设置单元格边距，可能你也注意到了 border-spacing 可以设置两个值，但是标签属性cellspacing只能设一个值，但通常情况下，我们最常用的是设置 cellspacing="0" 清除单元格边距。</p>
</body>
</html>

```
