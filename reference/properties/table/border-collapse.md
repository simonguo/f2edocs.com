#border-collapse

##语法

- border-collapse：separate | collapse
- 默认值：separate
- 适用于：table系元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- separate：边框独立
- collapse：相邻边被合并


##说明

设置或检索表格的行和单元格的边是合并还是独立。

- 只有当表格边框独立（即 &lt;' border-collapse '&gt; 属性等于separate时）， &lt;' border-spacing '&gt; 和 &lt;' empty-cells '&gt; 才起作用。
- 对应的脚本特性为borderCollapse。


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
.separate{border-collapse:separate;}
.collapse{border-collapse:collapse;}
</style>
</head>
<body>
<h1>separate: 边框独立</h1>
<table border="1" class="separate">
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

<h1>collapse: 相邻边被合并</h1>
<table border="1" class="collapse">
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
</body>
</html>

```
