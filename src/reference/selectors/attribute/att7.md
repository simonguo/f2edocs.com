#E[att|=&quot;val&quot;]

##语法

- E[att|=&quot;val&quot;] { sRules }


##说明

选择具有att属性且属性值为以val开头并用连接符"-"分隔的字符串的E元素，如果属性值仅为val，也将被选择。



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
		<td class="unsupport">6.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">7.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
li[class|="test3"] {
	color: #f00;
}
</style>
</head>
<body>
<ul>
	<li class="test1-abc">列表项目</li>
	<li class="test2-abc">列表项目</li>
	<li class="test3">列表项目</li>
	<li class="test3-abc">列表项目</li>
	<li class="test4-abc">列表项目</li>
	<li class="test5-abc">列表项目</li>
	<li class="test6-abc">列表项目</li>
</ul>
</body>
</html>

```
