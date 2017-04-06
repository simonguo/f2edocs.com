#E:checked

##语法

- E:checked { sRules }


##说明

匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时)



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
input:checked + span {
	background: #f00;
}
input:checked + span:after {
	content: " 我被选中了";
}
</style>
</head>
<body>
<form method="post" action="#">
<fieldset>
	<legend>选中下面的项试试</legend>
	<ul>
		<li><label><input type="radio" name="colour-group" value="0"><span>蓝色</span></label></li>
		<li><label><input type="radio" name="colour-group" value="1"><span>红色</span></label></li>
		<li><label><input type="radio" name="colour-group" value="2"><span>黑色</span></label></li>
	</ul>
</fieldset>
<fieldset>
	<legend>选中下面的项试试</legend>
	<ul>
		<li><label><input type="checkbox" name="colour-group2" value="0"><span>蓝色</span></label></li>
		<li><label><input type="checkbox" name="colour-group2" value="1"><span>红色</span></label></li>
		<li><label><input type="checkbox" name="colour-group2" value="2"><span>黑色</span></label></li>
	</ul>
</fieldset>
</form>
</body>
</html>

```
