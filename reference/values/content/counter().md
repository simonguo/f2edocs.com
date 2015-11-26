#counter()

##语法

- counter() = [ counter(name) | counters(name, list-style-type) ]{1,}


##说明

插入计数器。

- 在CSS2.1中counter()只能被使用在content属性上。
- 如果想重复多次计数器可以使用 counters()


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
		<td class="support">8.0+</td>
	</tr>
</tbody>
</table>


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>



<style>
ol {
	margin: 0;
	padding: 0 0 0 2em;
	list-style: none;
	counter-reset: item;
}
li:before {
	counter-increment: item;
	content: counter(item)".";
	color: #f00;
}
</style>
</head>
<body>
<ol class="test">
	<li>Node
		<ol>
			<li>Node
				<ol>
					<li>Node</li>
					<li>Node</li>
					<li>Node</li>
				</ol>
			</li>
			<li>Node</li>
		</ol>
	</li>
	<li>Node</li>
	<li>Node</li>
</ol>
</body>
</html>

```
