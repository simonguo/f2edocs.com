#repeating-linear-gradient()

##语法

- &lt;repeating-linear-gradient&gt; = linear-gradient([ [ &lt;angle&gt; | to &lt;side-or-corner&gt; ] ,]? &lt;color-stop&gt;[, &lt;color-stop&gt;]+)
- &lt;side-or-corner&gt; = [left | right] || [top | bottom]
- &lt;color-stop&gt; = &lt;color&gt; [ &lt;length&gt; | &lt;percentage&gt; ]?


##取值

- &lt;angle&gt;：用角度值指定渐变的方向（或角度）。
- to left：设置渐变为从右到左。相当于: 270deg
- to right：设置渐变从左到右。相当于: 90deg
- to top：设置渐变从下到上。相当于: 0deg
- to bottom：设置渐变从上到下。相当于: 180deg。这是默认值，等同于留空不写。
- &lt;color&gt;：指定颜色。
- &lt;length&gt;：用长度值指定起止色位置。不允许负值
- &lt;percentage&gt;：用百分比指定起止色位置。


##说明

用重复的线性渐变创建图像。

- repeating-linear-gradient()的语法与linear-gradient()相同。

**示例代码：**

```css
repeating-linear-gradient(#f00, #ff0 10%, #f00 15%);
repeating-linear-gradient(to bottom, #f00, #ff0 10%, #f00 15%);
repeating-linear-gradient(180deg, #f00, #ff0 10%, #f00 15%);
repeating-linear-gradient(to top, #f00, #ff0 10%, #f00 15%);

```

>以上几句代码都可以实现渐变效果


- 其实可以使用 linear-gradient() 做出 repeating-linear-gradient() 的效果

**暴力实现上述效果：利用 background-size 实现上述的效果：**

```css
repeating-linear-linear-gradient(#f00, #ff0 10%, #f00 15%, #ff0 25%, #f00 30%, #ff0 40%, #f00 45%, #ff0 55%, #f00 60%, #ff0 70%, #f00 75%, #ff0 85%, #f00 90%, #ff0);
background: linear-gradient(#f00, #ff0 67%, #f00);
background-size: 100% 15%;
```

>以上几句代码都可以实现如（图一）的渐变效果使用 background-size 约束渐变图像的大小，然后通过 background-repeat 来纵向平铺




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
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">2.0-3.5</td>
		<td class="partsupport">4.0-9.0<br><sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="unsupport">3.1-3.2</td>
		<td class="support" rowspan="4">15.0+</td>
		<td class="partsupport">3.2-4.3<br><sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">2.1-3.0<br><sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="support">10.0-25.0<br><sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
	</tr>
	<tr>
		<td class="support" rowspan="3">10.0+</td>
		<td class="support">3.6-15.0<br><sup class="fix">-moz-</sup></td>
		<td class="support">10.0-25.0<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport">4.0-5.0<br><sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="support">5.0-6.1</td>
		<td class="support">4.0-4.3<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">26.0+</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">16.0+</td>
		<td class="support" rowspan="2">26.0+</td>
		<td class="support">5.1-6.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">7.0+</td>
		<td class="support" rowspan="2">4.4+</td>
	</tr>
	<tr>
		<td class="support">6.1+</td>
	</tr>
</tbody>
</table>


- 使用过时的语法：-webkit-gradient(linear,…)


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
div {
	width: 200px;
	height: 100px;
	margin-top: 10px;
	border: 1px solid #ddd;
}
.test {
	background: repeating-linear-gradient(#f00, #ff0 10%, #f00 15%);
}
.test2 {
	background: repeating-linear-gradient(to right, #f00, #ff0 10%, #f00 15%);
}
.test3 {
	background: repeating-linear-gradient(45deg, #f00, #ff0 10%, #f00 15%);
}
.test4 {
	background: repeating-linear-gradient(to bottom left, #f00, #ff0 10%, #f00 15%);
}
</style>
</head>
<body>
<div class="test"></div>
<div class="test2"></div>
<div class="test3"></div>
<div class="test4"></div>
</body>
</html>

```
