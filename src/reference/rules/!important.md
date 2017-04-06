#!important

##语法

- Selector { sRule!important; }


##说明

提升指定样式规则的应用优先权。

- IE6及以下浏览器有个比较显式的支持问题存在，!important在同一条规则集里不生效。请看下述代码：


**示例代码：**

```css
div {
	color: #f00 !important;
	color: #000;
}
```

>在上述代码中，IE6及以下浏览器div的文本颜色为#000，!important并没有覆盖后面的规则；其它浏览器下div的文本颜色为#f00


-IE6及以下浏览器要使!important生效，可用以下代码：


**示例代码：**

```css
div {
	color: #f00 !important;
}
div {
	color: #000;
}
```

>在上述代码中，IE6及以下浏览器中div的文本颜色表现与其它浏览器一致，都为#f00



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
		<td class="support">7.0+</td>
	</tr>
</tbody>
</table>


- IE6及更早浏览器下，!important在同一条规则集内不生效。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test {
	color: #f00 !important;
	color: #000;
}
.test2 {
	color: #f00 !important;
}
.test2 {
	color: #000;
}
</style>
</head>
<body>
<div class="test">同一条样式内，!important将在IE6及以下浏览器中失效</div>
<div class="test2">在分散的样式条目内，IE6及以下浏览器对!important的支持与其它浏览器一致</div>
</body>
</html>

```
