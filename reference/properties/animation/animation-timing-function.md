#animation-timing-function

##语法

- animation-timing-function：&lt;single-animation-timing-function&gt;[,&lt;single-animation-timing-function&gt;]*
- &lt;single-animation-timing-function&gt; = ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(&lt;integer&gt;[, [ start | end ] ]?) | cubic-bezier(&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;)
- 默认值：ease
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：视觉


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

检索或设置对象动画的过渡类型

- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为animationTimingFunction。


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
        <td class="unsupport">2.0-4.0</td>
        <td class="support">4.0-42.0<sup class="fix">-webkit-</sup></td>
        <td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
        <td class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
        <td class="support">6.0-8.4<sup class="fix">-webkit-</sup></td>
        <td class="partsupport">2.1-3.0<sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
        <td class="support" rowspan="3">18.0-42.0<sup class="fix">-webkit-</sup></td>
    </tr>
    <tr>
        <td class="support" rowspan="2">10.0+</td>
        <td class="support">5.0-15.0<sup class="fix">-moz-</sup></td>
        <td class="support" rowspan="2">43.0+</td>
        <td class="support" rowspan="2">9.0+</td>
        <td class="support" rowspan="2">30.0+</td>
        <td class="support" rowspan="2">9.0+</td>
        <td class="support" rowspan="2">4.0-40.0<sup class="fix">-webkit-</sup></td>
    </tr>
    <tr>
        <td class="support">16.0+</td>
    </tr>
</tbody>
</table>


- 在一些场景中会有错误行为
- 部分浏览器不支持伪元素动画，或者支持得不够好，尽可能不要利用伪元素来做动画


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font-size:16px;}
div{width:60px;height:60px;margin:200px 0 0 50px;padding:10px;border-radius:41px;box-shadow:0 0 10px rgba(204,102,0,.8);background:#F6D66E;background:-moz-linear-gradient(top,#fff,#F6D66E);background:-webkit-linear-gradient(top,#fff,#F6D66E);background:linear-gradient(top,#fff,#F6D66E);
    -moz-animation:animations 4s linear infinite;
    -webkit-animation:animations 4s linear infinite;
    animation:animations 4s linear infinite;
}
@-webkit-keyframes animations{
    0%{-webkit-transform:translate(0,0);}
    12%{-webkit-transform:translate(80px,-25px);}
    25%{-webkit-transform:translate(200px,-50px);}
    38%{-webkit-transform:translate(320px,-25px);}
    50%{-webkit-transform:translate(400px,0);}
    62%{-webkit-transform:translate(320px,25px);}
    75%{-webkit-transform:translate(200px,50px);}
    87%{-webkit-transform:translate(80px,25px);}
    100%{-webkit-transform:translate(0,0);}
}
@-moz-keyframes animations{
    0%{-moz-transform:translate(0,0);}
    12%{-moz-transform:translate(80px,-25px);}
    25%{-moz-transform:translate(200px,-50px);}
    38%{-moz-transform:translate(320px,-25px);}
    50%{-moz-transform:translate(400px,0);}
    62%{-moz-transform:translate(320px,25px);}
    75%{-moz-transform:translate(200px,50px);}
    87%{-moz-transform:translate(80px,25px);}
    100%{-moz-transform:translate(0,0);}
}
@keyframes animations{
    0%{transform:translate(0,0);}
    12%{transform:translate(80px,-25px);}
    25%{transform:translate(200px,-50px);}
    38%{transform:translate(320px,-25px);}
    50%{transform:translate(400px,0);}
    62%{transform:translate(320px,25px);}
    75%{transform:translate(200px,50px);}
    87%{transform:translate(80px,25px);}
    100%{transform:translate(0,0);}
}
</style>
</head>
<body>
<h1>线性运动的太阳（您还可以定义其它的动画过渡类型，如ease-in,ease-out等）：</h1>
<div></div>
<p></p>
</body>
</html>

```
