#transition-timing-function

##语法

- transition-timing-function：&lt;single-transition-timing-function&gt;[,&lt;single-transition-timing-function&gt;]*
- &lt;single-transition-timing-function&gt; = ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(&lt;integer&gt;[, [ start | end ] ]?) | cubic-bezier(&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;)
- 默认值：ease
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：交互


##取值

- linear：线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
- ease：平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
- ease-in：由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
- ease-out：由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
- ease-in-out：由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
- step-start：等同于 steps(1, start)
- step-end：等同于 steps(1, end)
- steps(&lt;integer&gt;[, [ start | end ] ]?)：接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。第二个参数是可选的，默认值为end。
- cubic-bezier(&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;)：特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内


##说明

检索或设置对象中过渡的动画类型。

- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为transitionTimingFunction。


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
        <td class="unsupport">2.0-3.6</td>
        <td class="support">4.0-25.0<sup class="fix">-webkit-</sup></td>
        <td class="support">6.0<sup class="fix">-webkit-</sup></td>
        <td class="support" rowspan="3">15.0+</td>
        <td class="support">6.0-6.1<sup class="fix">-webkit-</sup></td>
        <td class="support">2.1-4.3<sup class="fix">-webkit-</sup></td>
        <td class="support">18.0-24.0<sup class="fix">-webkit-</sup></td>
    </tr>
    <tr>
        <td class="support" rowspan="2">10.0+</td>
        <td class="support">4.0-15.0<sup class="fix">-moz-</sup></td>
        <td class="support" rowspan="2">26.0+</td>
        <td class="support" rowspan="2">6.1+</td>
        <td class="support" rowspan="2">7.0+</td>
        <td class="support" rowspan="2">4.4.4+</td>
        <td class="support" rowspan="2">25.0+</td>
    </tr>
    <tr>
        <td class="support">16.0+</td>
    </tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font-size:16px;}
.test{overflow:hidden;width:100%;margin:0;padding:0;list-style:none;}
.test li{position:relative;left:8px;width:220px;height:100px;margin:1px 5px;padding:10px;border:1px solid #ddd;background-color:#eee;color:#000;
	-webkit-transition-duration:.5s;
	-moz-transition-duration:.5s;
	transition-duration:.5s;
	-webkit-transition-property:left;
	-moz-transition-property:left;
	transition-property:left;
}
.test li:nth-child(1){
	-webkit-transition-timing-function:linear;
	-moz-transition-timing-function:linear;
	transition-timing-function:linear;
}
.test li:nth-child(2){
	-webkit-transition-timing-function:ease;
	-moz-transition-timing-function:ease;
	transition-timing-function:ease;
}
.test li:nth-child(3){
	-webkit-transition-timing-function:ease-in;
	-moz-transition-timing-function:ease-in;
	transition-timing-function:ease-in;
}
.test li:nth-child(4){
	-webkit-transition-timing-function:ease-out;
	-moz-transition-timing-function:ease-out;
	transition-timing-function:ease-out;
}
.test li:nth-child(5){
	-webkit-transition-timing-function:ease-in-out;
	-moz-transition-timing-function:ease-in-out;
	transition-timing-function:ease-in-out;
}
.test li:hover{left:100px;}
</style>
</head>
<body>
<h1>请将鼠标移动到下面的矩形上：</h1>
<ul class="test">
	<li>linear: 线性过渡</li>
	<li>ease: 平滑过渡</li>
	<li>ease-in: 由慢到快</li>
	<li>ease-out: 由快到慢</li>
	<li>ease-in-out: 由慢到快再到慢</li>
</ul>
</body>
</html>

```
