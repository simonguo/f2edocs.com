#E:visited

##语法

- E:visited { sRules }


##说明

设置超链接a在其链接地址已被访问过时的样式。

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
		<td class="support">6.0+</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">3.1+</td>
		<td class="support">3.5+</td>
		<td class="support">3.2+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
:link {
	color: #03c;
}
:visited {
	color: #f00;
}
</style>
</head>
<body>
<ul>
	<li><a href="http://www.doyoe.com/" class="external">外部链接</a></li>
	<li><a href="http://blog.doyoe.com/">内部链接</a></li>
	<li><a href="http://demo.doyoe.com/" class="external">外部链接</a></li>
	<li><a href="http://css.doyoe.com/">内部链接</a></li>
</ul>
</body>
</html>

```
