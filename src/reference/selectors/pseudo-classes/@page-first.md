#@page :first

##语法

- @page :first { sRules }


##说明

设置在打印时页面容器第一页使用的样式。仅用于@page规则。

- 该伪类选择符只允许定义margin, orphans, widows 和 page breaks相关属性
- 相关查看：@page, :left, :right


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
		<td class="unsupport" rowspan="2">2.0-38.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="unsupport" rowspan="2">3.1-8.1</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport" rowspan="2">3.2-8.1</td>
		<td class="unknown" rowspan="2">2.1-4.4.4</td>
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
@page :first {
	margin: 100px 200px;
}
div {
	page-break-after: always;
}
</style>
</head>
<body>
<div>页面容器中第一页的外边距为100px 200px</div>
<div>页面容器中第二页的外边距为默认值</div>
</body>
</html>

```
