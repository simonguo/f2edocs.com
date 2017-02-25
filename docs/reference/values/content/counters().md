#counters()

##语法

- counters() = [ counters(name, string) | counters(name, string, list-style-type) ]{1,}


##说明

重复插入计数器。

- 在CSS2.1中counters()只能被使用在content属性上。
- counters()类似于重复使用了counter()，来看个示例

**HTML**

```html
<ol class="test">
	<li>Node
		<ol>
			<li>Node</li>
			<li>Node</li>
		</ol>
	</li>
	<li>Node</li>
	<li>Node</li>
</ol>
```


**counters()：**

```css
ol {
	counter-reset: item;
}
li:before {
	counter-increment: item;
	content: counters(item, ".");
}
```

**counter()：**

```css
.test2 {
	counter-reset: item;
}
.test2 li {
	counter-increment: item;
}
.test2 li:before {
	content: counter(item)".";
}
.test2 li li {
	counter-increment: subitem;
}
.test2 li li:before {
	content: counter(item)"."counter(subitem);
}
```

>从上述代码可以看出，counters()适合使用在需要继承的章节上，而counter()更适合用在独立的计数场景上。



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
	content: counters(item, ".");
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
