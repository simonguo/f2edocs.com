#E:focus

##语法

- E:focus { sRules }


##说明

设置对象在成为输入焦点（该对象的onfocus事件发生）时的样式。

- webkit内核浏览器会默认给:focus状态的元素加上outline的样式。


##兼容性


<table class="compatible">
<thead>
	<tr>
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
		<td class="unsupport">6.0-7.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">IE8.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>



<style>
h1 {
	font-size: 16px;
}
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
input:focus {
	background: #f6f6f6;
	color: #f60;
	border: 1px solid #f60;
	outline: none;
}
</style>
</head>
<body>
<h1>请聚焦到以下输入框</h1>
<form action="#">
	<ul>
		<li><input value="姓名"></li>
		<li><input value="单位"></li>
		<li><input value="年龄"></li>
		<li><input value="职业"></li>
	</ul>
</form>
</body>
</html>

```
