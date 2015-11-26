#attr()

##语法

- attr() = attr(attr-name)


##说明

插入元素的属性值。

- 在CSS2.1中attr()总是返回一个字符串。在CSS3中attr()可以返回多种不同的类型。
- 在CSS2.1中可以这样使用：


**示例代码：**

```css
a:after {
	content: "("attr(href)")";
	font-size: 12px;
}

```

```html
<a >CSS参考手册</a>
```



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
		<td class="support" rowspan="2">15.0+</td>
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
div:after {
	content: attr(title);
}
</style>
</head>
<body>
<div title="在支持content属性的浏览器中能看到我被显示了"></div>
</body>
</html>

```
