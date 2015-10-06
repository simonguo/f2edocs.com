#类选择符(E.class)

##语法

- E.myclass { sRules }


##说明

以class属性包含myclass的E对象作为选择符。

- 类选择符(Class Selector)
- 不同于ID选择符的唯一性，类选择符可以同时定义多个，如：


**定义多个类：**
```css
.a {
	color: #f00;
}
.b {
	font-weight: 700;
}
```

```html
<div class="a b">给某个div元素定义.a和.b两个类</div>
```

>注意，id选择符不能在同个元素上定义多个，比如id="a b"就是错误的写法


**类选择符高级用法：多类选择符**

```css
.a.b {
	color: #f00;
}
```

```html
<div class="a b">多类选择符使用方法</div>
```
>此例命中同时拥有.a和.b两个类的元素。需要注意的是IE6并不支持多类选择符，如：.a.b{}将会被视为：.b{}


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
		<td class="unsupport">6.0 <sup><a href="#support1">#1</a></sup></td>
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


- 不支持多类选择符，形如：`.a.b {}`


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.title {
	font-size: 20px;
}
p.content {
	font-size: 13px;
}
.content.note {
	font-size: 30px;
}
</style>
</head>
<body>
<h1 class="title">标题</h1>
<p class="content">正文内容</p>
<p class="content note">多类选择符的使用</p>
</body>
</html>

```
