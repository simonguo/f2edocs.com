#E:nth-of-type(n)

##语法

- E:nth-of-type(n) { sRules }


##说明

匹配同类型中的第n个同级兄弟元素E。

- 要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是html，即E可以是html的子元素，也就是说E可以是body
- 该选择符总是能命中父元素的第n个为E的子元素，不论第n个子元素是否为E
- 有一点需要注意的是：


**HTML示例代码：**

```html
<div>
	<p>第1个p</p>
	<p>第2个p</p>
	<span>第1个span</span>
	<p>第3个p</p>
	<span>第2个span</span>
</div>
```

**如上HTML，假设要命中第一个span：**

```css
span:nth-of-type(1){color:#f00;}
```

**如果使用E:nth-child(n)：**
```css
span:nth-child(3){color:#f00;}
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
		<td class="unsupport">6.0-8.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
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
p:nth-of-type(2) {
	color: #f00;
}
</style>
</head>
<body>
<div class="test">
	<p>我是一个p元素</p>
	<div>我是一个div元素</div>
	<p>我是一个p元素</p>
	<p>我是一个p元素</p>
</div>
</body>
</html>

```
