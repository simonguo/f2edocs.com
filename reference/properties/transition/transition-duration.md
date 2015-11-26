#transition-duration

##语法

- transition-duration：&lt;time&gt;[ ,&lt;time&gt; ]*
- 默认值：0
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：交互


##取值

- &lt;time&gt;：指定对象过渡的持续时间


##说明

检索或设置对象过渡的持续时间。

- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为transitionDuration。


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
.test{position:absolute;left:8px;width:200px;height:100px;margin:0 5px;padding:10px;border:1px solid #ddd;background-color:#eee;color:#000;
	-webkit-transition-timing-function:ease-in;
	-moz-transition-timing-function:ease-in;
	transition-timing-function:ease-in;
	-webkit-transition-property:left;
	-moz-transition-property:left;
	transition-property:left;
	-webkit-transition-duration:.5s;
	-moz-transition-duration:.5s;
	transition-duration:.5s;
}
.test:hover{left:100px;}
</style>
</head>
<body>
<h1>请将鼠标移动到下面的矩形上：</h1>
<div class="test">矩形在0.5s内慢慢向右移动<br>transition-duration:.5s;</div>
</body>
</html>

```
