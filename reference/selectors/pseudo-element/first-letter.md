#E:first-letter/E::first-letter

##语法

- E:first-letter/E::first-letter { sRules }


##说明

设置对象内的第一个字符的样式。

- 此伪对象仅作用于块对象。内联对象要使用该伪对象，必须先将其设置为块级对象。
- 该伪类常被用来配合font-size属性和float属性制作首字下沉效果。
- IE6在使用该选择符时有个显式的BUG：选择符与包含规则的花括号之间不能紧挨着，需留有空格或换行。同时还存在该BUG的选择符包括：E:first-line
- CSS3将伪对象选择符(Pseudo-Element Selectors)前面的单个冒号(:)修改为双冒号(::)用以区别伪类选择符(Pseudo-Classes Selectors)，但以前的写法仍然有效。即E:first-letter可转化为E::first-letter



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
		<td class="partsupport">6.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="5">2.0+</td>
		<td class="support" rowspan="5">4.0+</td>
		<td class="support" rowspan="5">3.1+</td>
		<td class="support" rowspan="5">3.5+</td>
		<td class="support" rowspan="5">3.2+</td>
		<td class="support" rowspan="5">2.1+</td>
		<td class="support" rowspan="5">18.0+</td>
	</tr>
	<tr>
		<td class="support">7.0+</td>
	</tr>
	<tr>
		<td rowspan="4">::first-letter</td>
		<td class="unsupport">6.0</td>
	</tr>
	<tr>
		<td class="partsupport">7.0-8.0 <sup><a href="#support2">#2</a></sup></td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
	</tr>
</tbody>
</table>


- E:first-letter选择符不能紧挨着规则集大括号，需留有空格或换行。
- 本质上并不支持伪元素的双冒号(::)写法，而是忽略掉了其中的一个冒号，仍以单冒号来解析，所以等同变相支持了E::first-letter。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font-size:16px;}
p{width:200px;padding:5px 10px;border:1px solid #ddd;font:14px/1.5 simsun,serif,sans-serif;}
p:first-letter {float:left;font-size:40px;font-weight:bold;line-height:1;}
p::first-letter {float:left;font-size:40px;font-weight:bold;line-height:1;}
</style>
</head>
<body>
<h1>杂志常用的首字下沉效果</h1>
<p>今天，阳光明媚，晴空万里，非常适合户外活动，如踏青、远足之类的。长期坐在办公室的同学们要多注意运动。</p>
</body>
</html>

```
