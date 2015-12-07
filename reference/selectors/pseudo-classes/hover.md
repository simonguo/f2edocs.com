#E:hover

##语法

- E:hover { sRules }


##说明

设置元素在其鼠标悬停时的样式。

- 如果需要给超链接定义：访问前，鼠标悬停，当前被点击，已访问这4种伪类效果，而又没有按照一致的书写顺序，不同的浏览器可能会有不同的表现
- 超链接的4种状态，需要有特定的书写顺序才能生效。

**超链接状态顺序：**

```css
a:link {}
a:visited {}
a:hover {}
a:active {}
```

>注意，a:hover 必须位于 a:link 和 a:visited 之后，a:active 必须位于 a:hover 之后可靠的顺序是：l(link)ov(visited)e h(hover)a(active)te, 即用喜欢(love)和讨厌(hate)两个词来概括




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
		<td class="partsupport">6.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">IE7.0+</td>
	</tr>
</tbody>
</table>


- IE6及更早浏览器只支持a元素的:hover，从IE7开始支持其它元素的:hover。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1 {
	font-size: 16px;
}
a,
div {
	display: block;
	margin-top: 10px;
	padding: 10px;
	border: 1px solid #ddd;
}
a:hover,
div:hover {
	background: #ddd;
	color: #f00;
}
</style>
</head>
<body>
<h1>请将鼠标分别移动到下面2个元素上</h1>
<a href="?">我是一个a</a>
<div>我是一个div</div>
</body>
</html>

```
