#backface-visibility

##语法

- backface-visibility：visible | hidden
- 默认值：visible
- 适用于：变换元素
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：视觉


##取值

- visible：指定元素背面可见，允许显示正面的镜像。
- hidden：指定元素背面不可见


##说明

指定元素背面面向用户时是否可见。

- 决定一个元素背面面向用户时是否可见，需要直接在该元素上定义 &lt;' backface-visibility '&gt; 属性，而不能在其父元素上，因为该属性默认为不可继承。
- 对应的脚本特性为backfaceVisibility。


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
body {
    -webkit-perspective: 800px;
    perspective: 800px;
    -webkit-perspective-origin: 50%;
    perspective-origin: 50%;
}
.cube {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 50px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-animation: rotate 5s infinite;
    animation: rotate 5s infinite;
}
.cube > div {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, .2);
    background-color: rgba(255, 255, 255, .1);
    color: gray;
    font-size: 20px;
    line-height: 100px;
    text-align: center;
}
.front {
    -webkit-transform: translatez(50px);
    transform: translatez(50px);
}
.back {
    -webkit-transform: rotatey(180deg) translatez(50px);
    transform: rotatey(180deg) translatez(50px);
}
.right {
    -webkit-transform: rotatey(90deg) translatez(50px);
    transform: rotatey(90deg) translatez(50px);
}
.left {
    -webkit-transform: rotatey(-90deg) translatez(50px);
    transform: rotatey(-90deg) translatez(50px);
}
.top {
    -webkit-transform: rotatex(90deg) translatez(50px);
    transform: rotatex(90deg) translatez(50px);
}
.bottom {
    -webkit-transform: rotatex(-90deg) translatez(50px);
    transform: rotatex(-90deg) translatez(50px);
}
@-webkit-keyframes rotate {
    from {
        -webkit-transform: rotatey(0);
    }
    to {
        -webkit-transform: rotatey(360deg);
    }
}
@keyframes rotate {
    from {
        transform: rotatey(0);
    }
    to {
        transform: rotatey(360deg);
    }
}
.c1 > div {
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}
.c2 > div {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
</style>
</head>
<body>
<div class="cube c1">
    <div class="front">1</div>
    <div class="back">2</div>
    <div class="right">3</div>
    <div class="left">4</div>
    <div class="top">5</div>
    <div class="bottom">6</div>
</div>

<div class="cube c2">
    <div class="front">1</div>
    <div class="back">2</div>
    <div class="right">3</div>
    <div class="left">4</div>
    <div class="top">5</div>
    <div class="bottom">6</div>
</div>
</body>
</html>

```
