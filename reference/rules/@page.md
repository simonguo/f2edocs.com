#@page

##语法

- @page &lt;label&gt; &lt;pseudo-classes&gt;{ sRules }


##取值

- &lt;label&gt;：页面标识符
- &lt;pseudo-class&gt;：打印伪类:first, :left, :right


##说明

设置页面容器的版式，方向，边空等。

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
		<td class="unsupport">2.0-18.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">19.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
@page:first{margin:300px;}
</style>
</head>
<body>
<div>@page:first{margin:300px;}</div>
</body>
</html>

```
