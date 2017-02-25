#子选择符(E&gt;F)

##语法

- E&gt;F { sRules }


##说明

选择所有作为E元素的子元素F。

- 与包含选择符不同的是，子选择符只能命中子元素，而不能命中孙辈。


**示例：**

```css
.demo > div {
	position: relative;
}
```

```html
<div class="demo">
	<div class="a">
		<div class="b">子选择符</div>
	</div>
</div>
```

>此例只有 .a 会被命中，因为它是 .demo 的子元素；




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
		<td class="unsupport">6.0</td>
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




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test > li > a {
	color: #f00;
}
</style>
</head>
<body>
<ul class="test">
	<li>
		<a href="?">列表项目1</a>
		<ul>
			<li><a href="?">项目列表1.1</a></li>
			<li><a href="?">项目列表1.2</a></li>
		</ul>
	</li>
	<li>
		<a href="?">列表项目2</a>
		<ul>
			<li><a href="?">项目列表2.1</a></li>
			<li><a href="?">项目列表2.2</a></li>
		</ul>
	</li>
	<li><a href="?">列表项目</a></li>
	<li><a href="?">列表项目</a></li>
</ul>
</body>
</html>

```
