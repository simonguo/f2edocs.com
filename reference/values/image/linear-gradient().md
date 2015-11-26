#linear-gradient()

##语法

- &lt;linear-gradient&gt; = linear-gradient([ [ &lt;angle&gt; | to &lt;side-or-corner&gt; ] ,]? &lt;color-stop&gt;[, &lt;color-stop&gt;]+)
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

用线性渐变创建图像。

- 如果想创建以对角线方式渐变的图像，可以使用 to top left 这样的多关键字方式来实现。
- 用默认的渐变方向绘制一个最简单的线性渐变


**示例代码：**

```css
linear-gradient(#fff, #333);
linear-gradient(to bottom, #fff, #333);
linear-gradient(to top, #333, #fff);
linear-gradient(180deg, #fff, #333);
linear-gradient(to bottom, #fff 0%, #333 100%);
```

>以上几句代码都可以实现渐变效果


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
		<td class="unsupport">6.0-9.0 <sup><a href="#support2">#2</a></sup></td>
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
- IE6.0-9.0使用私有滤镜来实现该效果: progid:DXImageTransform.Microsoft.Gradient()


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
	background: linear-gradient(#fff, #333);
}
.test2 {
	background: linear-gradient(#000, #f00 50%, #090);
}
.test3 {
	background: linear-gradient(0deg, #000 20%, #f00 50%, #090 80%);
}
.test4 {
	background: linear-gradient(45deg, #000, #f00 50%, #090);
}
.test5 {
	background: linear-gradient(to top right, #000, #f00 50%, #090);
}
</style>
</head>
<body>
<div class="test"></div>
<div class="test2"></div>
<div class="test3"></div>
<div class="test4"></div>
<div class="test5"></div>
</body>
</html>

```
