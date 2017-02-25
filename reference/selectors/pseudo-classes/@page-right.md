#@page :right

##语法

- @page :right { sRules }


##说明

设置页面容器位于装订线右边的所有页面使用的样式。仅用于@page规则。

- 该伪类选择符只允许定义margin, padding, border 和 background属性
- 相关查看：@page, :first, :left


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
@page :right {
	margin-right: 300px;
}
div {
	page-break-after: always;
}
</style>
</head>
<body>
<div>有很长的一句话来测试页面容器位于装订线右边的所有页面左外边距为300px</div>
<div>有很长的一句话来测试页面容器位于装订线右边的所有页面左外边距为300px</div>
<div>有很长的一句话来测试页面容器位于装订线右边的所有页面左外边距为300px</div>
</body>
</html>

```
