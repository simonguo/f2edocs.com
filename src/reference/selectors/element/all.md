#通配选择符 (\*)

##语法

- * { sRules }


##说明

选定所有对象。

- 通配选择符(Universal Selector)
- 通常不建议使用通配选择符，因为它会遍历并命中文档中所有的元素，出于性能考虑，需酌情使用


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
		<td class="unsupport">6.0 <sup><a href="#support1">#1</a></sup></td>
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


- IE6及更早浏览器并不支持通配选择符(\*)，而是将它忽略了，所以也变相的能看到效果。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
* {
	color: #f00;
}
</style>
</head>
<body>
<h1>标题</h1>
<p>正文内容</p>
</body>
</html>

```
