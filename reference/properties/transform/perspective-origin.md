#perspective-origin

##语法

- perspective-origin：[ &lt;percentage&gt; | &lt;length&gt; | left | center① | right ] [ &lt;percentage&gt; | &lt;length&gt; | top | center② | bottom ]?
- 默认值：50% 50%，效果等同于center center
- 适用于：变换元素
- 继承性：无
- 动画性：当值为数值时
- 计算值：除了指定绝对值，否则都为百分比
- 媒体：视觉


##取值

- &lt;percentage&gt;：用百分比指定透视点坐标值，相对于元素宽度。可以为负值。
- &lt;length&gt;：用长度值指定透视点坐标值。可以为负值。
- left：指定透视点的横坐标为left
- center①：指定透视点的横坐标为center
- right：指定透视点的横坐标为right
- top：指定透视点的纵坐标为top
- center②：指定透视点的纵坐标为center
- bottom：指定透视点的纵坐标为bottom


##说明

指定透视点的位置。

- 该属性提供2个参数值。
- 如果提供两个，第一个用于横坐标，第二个用于纵坐标。
- 如果只提供一个，该值将用于横坐标；纵坐标将默认为center。
- 对应的脚本特性为perspactiveOrigin。


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
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">2.0-9.0</td>
		<td class="unsupport">4.0-11.0</td>
		<td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-22.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.4<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">2.1-2.3</td>
		<td class="support">18.0-34.0<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">10.0-11.0<sup class="fix">-ms-</sup></td>
		<td class="support">10.0-15.0<sup class="fix">-moz-</sup></td>
		<td class="support">12.0-35.0<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support" rowspan="2">23.0+</td>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support">3.0-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">35.0+</td>
	</tr>
	<tr>
		<td class="support">Edge</td>
		<td class="support">16.0+</td>
        <td class="support">36.0+</td>
        <td class="support">40.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.wrapper {
    display: inline-block;
    width: 200px;
    height: 200px;
    margin: 10px;
    border: 1px solid #000;
    -webkit-perspective: 150px;
    perspective: 150px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.w1 {
    -webkit-perspective-origin: top;
    perspective-origin: top;
}
.w2 {
    -webkit-perspective-origin: bottom;
    perspective-origin: bottom;
}
.wrapper > div {
    width: 180px;
    height: 120px;
    margin: 40px 10px;
    background-color: #ccc;
    -webkit-transform: rotatex(90deg);
    transform: rotatex(90deg);
}
</style>
</head>
<body>
<div class="wrapper w1">
    <div>1</div>
</div>
<div class="wrapper w2">
    <div>2</div>
</div>
</body>
</html>

```
