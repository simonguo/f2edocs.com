#E:empty

##语法

- E:empty { sRules }


##说明

匹配没有任何子元素（包括text节点）的元素E。



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
p:empty {
	height: 25px;
	border: 1px solid #ddd;
	background: #eee;
}
</style>
</head>
<body>
<div class="test">
	<p>结构性伪类选择符 E:empty</p>
	<p><!--我是一个空节点p，请注意我与其它非空节点p的外观有什么不一样--></p>
	<p>结构性伪类选择符 E:empty</p>
</div>
</body>
</html>

```
