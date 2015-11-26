#transition-delay

##语法

- transition-delay：&lt;time&gt;[ ,&lt;time&gt; ]*
- 默认值：0
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：交互


##取值

- &lt;time&gt;：指定对象过渡的延迟时间


##说明

检索或设置对象延迟过渡的时间。

- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为transitionDelay。


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
.test li{width:220px;height:100px;margin:1px 5px;padding:10px;border:1px solid #ddd;background-color:#eee;color:#000;
	-moz-transition-property:all;
	-moz-transition-duration:.5s;
	-moz-transition-timing-function:ease;
	-webkit-transition-property:all;
	-webkit-transition-duration:.5s;
	-webkit-transition-timing-function:ease;
	transition-property:all;
	transition-duration:.5s;
	transition-timing-function:ease;
}
.test li:nth-child(1){-moz-transition-delay:.1s;-webkit-transition-delay:.1s;transition-delay:.1s;}
.test li:nth-child(2){-moz-transition-delay:.3s;-webkit-transition-delay:.3s;transition-delay:.3s;}
.test li:nth-child(3){-moz-transition-delay:.5s;-webkit-transition-delay:.5s;transition-delay:.5s;}
.test li:nth-child(4){-moz-transition-delay:.7s;-webkit-transition-delay:.7s;transition-delay:.7s;}
.test li:nth-child(5){-moz-transition-delay:.9s;-webkit-transition-delay:.9s;transition-delay:.9s;}
.test li:hover{border-color:#999;background-color:#bbb;color:#999;}
</style>
</head>
<body>
<h1>请将鼠标移动到下面的矩形上：</h1>
<ul class="test">
	<li>延迟0.1s后开始过渡</li>
	<li>延迟0.3s后开始过渡</li>
	<li>延迟0.5s后开始过渡</li>
	<li>延迟0.7s后开始过渡</li>
	<li>延迟0.9s后开始过渡</li>
</ul>
</body>
</html>

```
