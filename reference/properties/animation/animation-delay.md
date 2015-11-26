#animation-delay

##语法

- animation-delay：&lt;time&gt;[,&lt;time&gt;]*
- 默认值：0s
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：视觉


##取值

- &lt;time&gt;：指定对象动画延迟的时间


##说明

检索或设置对象动画的延迟时间

- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为animationDelay。


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
p{position:relative;z-index:2;height:200px;margin:300px 0 0 0;background:#fff;}
p:after{position:absolute;z-index:3;top:0px;left:0;width:100%;height:1px;background:#ddd;content:'';box-shadow:0 0 30px 1px rgba(0,0,0,.9);}
div{width:100px;height:100px;padding:10px;border-radius:61px;box-shadow:0 0 10px rgba(204,102,0,.8);background:#F6D66E;background:-moz-linear-gradient(top,#fff,#F6D66E);background:-webkit-linear-gradient(top,#fff,#F6D66E);background:linear-gradient(top,#fff,#F6D66E);
    -moz-animation:animations 6s ease 1s forwards;
    -webkit-animation:animations 6s ease 1s forwards;
    animation:animations 6s ease 1s forwards;
}
@-webkit-keyframes animations{
    0%{-webkit-transform:translate(0,0);}
    55%{-webkit-transform:translate(480px,360px);}
    100%{-webkit-transform:translate(600px,450px);}
}
@-moz-keyframes animations{
    0%{-moz-transform:translate(0,0);}
    55%{-moz-transform:translate(480px,360px);}
    100%{-moz-transform:translate(600px,450px);}
}
@keyframes animations{
    0%{transform:translate(0,0);}
    55%{transform:translate(480px,360px);}
    100%{transform:translate(600px,450px);}
}
</style>
</head>
<body>
<h1>太阳将在1s后开始下山：</h1>
<div></div>
<p></p>
</body>
</html>

```
