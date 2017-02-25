#E:enabled

##语法

- E:enabled { sRules }


##说明

匹配用户界面上处于可用状态的元素E。



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
		<td class="unsupport">6.0-8.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">IE9.0+</td>
	</tr>
</tbody>
</table>


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
li {
	padding: 3px;
}
input[type="text"]:enabled {
	border: 1px solid #090;
	background: #fff;
	color: #000;
}
input[type="text"]:disabled {
	border: 1px solid #ccc;
	background: #eee;
	color: #ccc;
}
</style>
</head>
<body>
<form method="post" action="#">
<fieldset>
	<legend>E:enabled与E:disabled</legend>
	<ul>
		<li><input type="text" value="可用状态"></li>
		<li><input type="text" value="可用状态"></li>
		<li><input type="text" value="禁用状态" disabled="disabled"></li>
		<li><input type="text" value="禁用状态" disabled="disabled"></li>
	</ul>
</fieldset>
</form>
</body>
</html>

```
