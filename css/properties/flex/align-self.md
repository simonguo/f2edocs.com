#align-self

##语法

- align-self：auto | flex-start | flex-end | center | baseline | stretch
- 默认值：auto
- 适用于：flex子项
- 继承性：无
- 动画性：是
- 计算值：如果值为「auto」，则计算值为父元素的 &lt;' align-items '&gt; 值，否则为指定值。


##取值

- auto：如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。
- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
- stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。


##说明

定义flex子项单独在侧轴（纵轴）方向上的对齐方式。

- 对应的脚本特性为alignSelf。


##兼容性


<table class="compatible">
<thead>
	<tr>
		<th>Values</th>
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
		<td rowspan="3"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-10.0</td>
		<td class="unsupport">2.0-21.0</td>
		<td class="unsupport">4.0-20.0</td>
		<td class="unsupport">6.0</td>
		<td class="support">15.0+<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">6.0-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-19.0</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">11.0+</td>
		<td class="support" rowspan="2">22.0+</td>
		<td class="support">21.0+<sup class="fix">-webkit-</sup></td>
		<td class="support">6.1+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">17.0+</td>
		<td class="support">7.0+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">4.4+</td>
		<td class="support">20.0+<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">29.0+</td>
		<td class="support">9.0+</td>
		<td class="support">9.0+</td>
		<td class="support">28.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font:bold 20px/1.5 georgia,simsun,sans-serif;}
.box{
	display:-webkit-flex;
	display:flex;
	-webkit-align-items: flex-end;
	height:100px;margin:0;padding:10px;border-radius:5px;list-style:none;background-color:#eee;}
.box li{margin:5px;padding:10px;border-radius:5px;background:#aaa;text-align:center;}
.box li:nth-child(1){
	-webkit-align-self: flex-end;
	align-self: flex-end;
}
.box li:nth-child(2){
	-webkit-align-self: center;
	align-self: center;
}
.box li:nth-child(3){
	-webkit-align-self: flex-start;
	align-self: flex-start;
}
.box li:nth-child(4){
	-webkit-align-self: baseline;
	align-self: baseline;
	padding:20px 10px;
}
.box li:nth-child(5){
	-webkit-align-self: baseline;
	align-self: baseline;
}
.box li:nth-child(6){
	-webkit-align-self: stretch;
	align-self: stretch;
}
.box li:nth-child(7){
	-webkit-align-self: auto;
	align-self: auto;
}
</style>
</head>
<body>
<h1>align-self示例：</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
	<li>f</li>
	<li>g</li>
	<li>h</li>
	<li>i</li>
</ul>
</body>
</html>


```
