#transition-property

##语法

- transition-property：none | &lt;single-transition-property&gt;[ ,&lt;single-transition-property&gt; ]*
- &lt;single-transition-property&gt; = all | &lt;IDENT&gt;
- 默认值：all
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：视觉


##取值

- none：不指定过渡的css属性
- all：所有可以进行过渡的css属性
- &lt;IDENT&gt;：指定要进行过渡的css属性


##说明

检索或设置对象中的参与过渡的属性。

- 默认值为：all。默认为所有可以进行过渡的css属性。
- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为transitionProperty。


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
.test li{float:left;width:170px;height:100px;margin:0 5px;padding:10px;border:1px solid #ddd;background-color:#eee;color:#000;
	-moz-transition-property:border-color,background-color,color;
	-moz-transition-duration:.5s;
	-moz-transition-timing-function:ease-in;
	-webkit-transition-property:border-color,background-color,color;
	-webkit-transition-duration:.5s;
	-webkit-transition-timing-function:ease-in;
	transition-property:border-color,background-color,color;
	transition-duration:.5s;
	transition-timing-function:ease-in;
}
.test li:hover{border-color:#999;background-color:#bbb;color:#999;}
</style>
</head>
<body>
<h1>请将鼠标移动到下面的矩形上：</h1>
<ul class="test">
	<li>本次设置过渡的属性： border-color, background-color, color</li>
</ul>
</body>
</html>

```
