#E:not(s)

##语法

- E:not(s) { sRules }


##说明

匹配不含有s选择符的元素E。

- 有了这个选择符，那么你将可以很好的处理类似这样的场景：假定有个列表，每个列表项都有一条底边线，但是最后一项不需要底边线


**示例：**

```css
.demo li:not(:last-child) {
	border-bottom: 1px solid #ddd;
}
```

>上述代码的意思是：给该列表中除最后一项外的所有列表项加一条底边线




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
p:not(.abc) {
	color: #f00;
}
</style>
</head>
<body>
<p class="abc">否定伪类选择符 E:not(s)</p>
<p id="abc">否定伪类选择符 E:not(s)</p>
<p class="abcd">否定伪类选择符 E:not(s)</p>
<p>否定伪类选择符 E:not(s)</p>
</body>
</html>

```
