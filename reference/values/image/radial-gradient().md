#radial-gradient()

##语法

- &lt;radial-gradient&gt; = radial-gradient([ [ &lt;shape&gt; || &lt;size&gt; ] [ at &lt;position&gt; ]? , | at &lt;position&gt;, ]?&lt;color-stop&gt;[ , &lt;color-stop&gt; ]+)
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

用径向渐变创建图像。

- 用默认的渐变方向绘制一个最简单的径向渐变


**示例代码：**

```css
radial-gradient(circle, #f00, #ff0, #080);
radial-gradient(circle at center, #f00, #ff0, #080);
radial-gradient(circle at 50%, #f00, #ff0, #080);
radial-gradient(circle farthest-corner, #f00, #ff0, #080);

```

>以上几句代码都可以实现渐变效果


- &lt;shape&gt; 和 &lt;size&gt; 使用注意：

**错误代码：错误代码：**

```css
radial-gradient(circle 50px 50px, #f00, #ff0, #080);
radial-gradient(circle 50%, #f00, #ff0, #080);
```

>因为 circle 是正圆，一个值就能表示其直径长度，所以此时 &lt;size&gt; 只能是一个值。circle 不接受 &lt;size&gt; 的值是 &lt;percentage&gt;。


- 不通过 &lt;shape&gt; 来表示圆和椭圆的方法：

**以下2行代码都可以表示一个圆：**

```css
radial-gradient(100px, #f00, #ff0, #080); /* 1 */
radial-gradient(100px 100px, #f00, #ff0, #080); /* 2 */
radial-gradient(50px 100px, #f00, #ff0, #080); /* 3 */
```

>代码1：只给出100px，所以被当成是正圆的半径，于是就能确定一个直径为100px的圆；
>代码2：给出了2个值，按理应该是要画一个椭圆的，但2个值相等，所以这个椭圆其实此时是个正圆形态。需要注意的是，代码2如果加上 circle，那将是错误语法，因为这是2个值只有椭圆才接受；
>代码3：表示了一个水平半径为50px，垂直半径为100px的椭圆





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
	background: radial-gradient(circle at center, #f00, #ff0, #080);
}
.test2 {
	background: radial-gradient(circle closest-side, #f00, #ff0, #080);
}
.test3 {
	background: radial-gradient(farthest-side, #f00 20%, #ff0 50%, #080 80%);
}
.test4 {
	background: radial-gradient(at top right, #f00, #ff0, #080);
}
.test5 {
	background: radial-gradient(farthest-side at top right, #f00, #ff0, #080);
}
.test6 {
	background:
				radial-gradient(farthest-side at top right, #f00, #ff0, #080, transparent),
				radial-gradient(60px at top left, #f00, #ff0, #080);
}
</style>
</head>
<body>
<div class="test"></div>
<div class="test2"></div>
<div class="test3"></div>
<div class="test4"></div>
<div class="test5"></div>
<div class="test6"></div>
</body>
</html>

```
