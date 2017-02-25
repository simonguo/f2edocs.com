#repeating-radial-gradient()

##语法

- &lt;repeating-radial-gradient&gt; = radial-gradient([ [ &lt;shape&gt; || &lt;size&gt; ] [ at &lt;position&gt; ]? , | at &lt;position&gt;, ]?&lt;color-stop&gt;[ , &lt;color-stop&gt; ]+)
- &lt;position&gt; = [ &lt;length&gt;① | &lt;percentage&gt;① | left | center① | right ]? [ &lt;length&gt;② | &lt;percentage&gt;② | top | center② | bottom ]?
- &lt;shape&gt; = circle | ellipse
- &lt;size&gt; = &lt;extent-keyword&gt; | [ &lt;circle-size&gt; || &lt;ellipse-size&gt; ]
- &lt;extent-keyword&gt; = closest-side | closest-corner | farthest-side | farthest-corner
- &lt;circle-size&gt; = &lt;length&gt;
- &lt;ellipse-size&gt; = [ &lt;length&gt; | &lt;percentage&gt; ]{2}
- &lt;shape-size&gt; = &lt;length&gt; | &lt;percentage&gt;
- &lt;color-stop&gt; = &lt;color&gt; [ &lt;length&gt; | &lt;percentage&gt; ]?


##取值

- &lt;percentage&gt;①：用百分比指定径向渐变圆心的横坐标值。可以为负值。
- &lt;length&gt;①：用长度值指定径向渐变圆心的横坐标值。可以为负值。
- left：设置左边为径向渐变圆心的横坐标值。
- center①：设置中间为径向渐变圆心的横坐标值。
- right：设置右边为径向渐变圆心的横坐标值。
- &lt;percentage&gt;②：用百分比指定径向渐变圆心的纵坐标值。可以为负值。
- &lt;length&gt;②：用长度值指定径向渐变圆心的纵坐标值。可以为负值。
- top：设置顶部为径向渐变圆心的纵坐标值。
- center②：设置中间为径向渐变圆心的纵坐标值。
- bottom：设置底部为径向渐变圆心的纵坐标值。
- circle：指定圆形的径向渐变
- ellipse：指定椭圆形的径向渐变。
- closest-side：指定径向渐变的半径长度为从圆心到离圆心最近的边
- closest-corner：指定径向渐变的半径长度为从圆心到离圆心最近的角
- farthest-side：指定径向渐变的半径长度为从圆心到离圆心最远的边
- farthest-corner：指定径向渐变的半径长度为从圆心到离圆心最远的角
- &lt;length&gt;：用长度值指定正圆径向渐变的半径长度。不允许负值。
- &lt;length&gt;：用长度值指定椭圆径向渐变的横向或纵向半径长度。不允许负值。
- &lt;percentage&gt;：用百分比指定椭圆径向渐变的横向或纵向半径长度。不允许负值。
- &lt;color&gt;：指定颜色。
- &lt;length&gt;：用长度值指定起止色位置。不允许负值
- &lt;percentage&gt;：用百分比指定起止色位置。不允许负值


##说明

用重复的径向渐变创建图像。

- repeating-radial-gradient()的语法与radial-gradient()相同。
-


示例代码：

```css
repeating-radial-gradient(circle closest-side, #f00, #ff0 10%, #f00 15%);
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


- 使用过时的语法：-webkit-gradient(radial,…)


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
	background: repeating-radial-gradient(circle, #f00 0, #ff0 10%, #f00 15%);
}
.test2 {
	background: repeating-radial-gradient(at top left, #f00, #ff0 10%, #080 15%, #ff0 20%, #f00 25%);
}
.test3 {
	background: repeating-radial-gradient(circle closest-corner at 20px 50px, #f00, #ff0 10%, #080 20%, #ff0 30%, #f00 40%);
}
</style>
</head>
<body>
<div class="test"></div>
<div class="test2"></div>
<div class="test3"></div>
</body>
</html>

```
