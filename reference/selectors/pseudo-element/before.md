#E:before/E::before

##语法

- E:before/E::before { sRules }


##说明

设置在对象前（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性

- CSS3将伪对象选择符(Pseudo-Element Selectors)前面的单个冒号(:)修改为双冒号(::)用以区别伪类选择符(Pseudo-Classes Selectors)，但以前的写法仍然有效。即E:before可转化为E::before



##兼容性


<table class="compatible">
<thead>
	<tr>
		<th>Selector</th>
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
		<td rowspan="2"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-7.0</td>
		<td class="support">2.0-3.0 <sup><a href="#support2">#2</a></sup></td>
		<td class="support" rowspan="5">4.0+</td>
		<td class="support" rowspan="5">3.1+</td>
		<td class="support" rowspan="5">15.0+</td>
		<td class="support" rowspan="5">3.2+</td>
		<td class="support" rowspan="5">2.1+</td>
		<td class="support" rowspan="5">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
		<td class="support">3.5+</td>
	</tr>
	<tr>
		<td rowspan="3">::before</td>
		<td class="unsupport">6.0-7.0</td>
		<td class="support">2.0-3.0 <sup><a href="#support2">#2</a></sup></td>
	</tr>
	<tr>
		<td class="partsupport">8.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="2">3.5+</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
	</tr>
	<tr>
		<td rowspan="2">应用动画</td>
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">2.0-3.5</td>
		<td class="unsupport">4.0-25.0</td>
		<td class="unsupport">3.1-6.0</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport">3.2-6.1</td>
		<td class="unsupport">2.1-3.0</td>
		<td class="unsupport">18.0-25.0</td>
	</tr>
	<tr>
		<td class="support">10.0+ <sup><a href="#support3">#3</a></sup></td>
		<td class="support">4.0+</td>
		<td class="support">26.0+</td>
		<td class="support">6.1+</td>
		<td class="support">7.0+</td>
		<td class="support">4.0+</td>
		<td class="support">26.0+</td>
	</tr>
</tbody>
</table>


- 本质上并不支持伪元素的双冒号(::)写法，而是忽略掉了其中的一个冒号，仍以单冒号来解析，所以等同变相支持了E::before。
- 不支持设置属性position, float, list-style-\*和一些display值，Firefox3.5开始取消这些限制。
- IE10在使用伪元素动画有一个问题：

**例如：**
```css
.test:hover {}
.test:hover::before { /* 这时animation和transition才生效 */ }
```

>需要使用一个空的:hover来激活




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
p{position:relative;color:#f00;font-size:14px;font-size:0\9;*font-size:14px;}
p:before{position:absolute;background:#fff;color:#000;content:"如果你的能看到这段文字，说明你的浏览器只支持E:before";font-size:14px;}
p::before{position:absolute;background:#fff;color:#000;content:"如果你的能看到这段文字，说明你的浏览器支持E:before和E::before";font-size:14px;}
</style>
</head>
<body>
<p>Sorry, 你的浏览器不支持E:before和E::before</p>
</body>
</html>

```
