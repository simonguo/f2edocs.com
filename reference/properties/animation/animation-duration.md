#animation-duration

##语法

- animation-duration：&lt;time&gt;[,&lt;time&gt;]*
- 默认值：0s
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：视觉


##取值

- &lt;time&gt;：指定对象动画的持续时间


##说明

检索或设置对象动画的持续时间

- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为animationDuration。


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
html{height:100%;
    background:-moz-linear-gradient(top,#fff,#000);
    background:-webkit-linear-gradient(top,#fff,#000);
    background:linear-gradient(top,#fff,#000);
}
h1{font-size:16px;}
div{position:absolute;top:50%;left:50%;width:500px;height:80px;margin:-40px 0 0 -250px;color:#fff;font:bold 50px/1.5 Georgia,arial,simsun,serif;text-shadow:1px 1px 0 rgba(0,0,0,.8),2px 2px 3px rgba(255,255,255,.3);
    -moz-animation:animations 2s ease-in-out forwards;
    -webkit-animation:animations 2s ease-in-out forwards;
    animation:animations 2s ease-in-out forwards;
}
@-moz-keyframes animations{
    0%{-moz-transform:translate(0,-150px);}
    30%{-moz-transform:translate(0,-150px);}
    40%{-moz-transform:translate(0,0);}
    42%{-moz-transform:scale(1.1,.6) skew(5deg,5deg);}
    48%{-moz-transform:scale(1) skew(0,0);}
    54%{-moz-transform:scale(1.05,.8) skew(4deg,4deg);}
    60%{-moz-transform:scale(1) skew(0,0);}
    64%{-moz-transform:skew(3deg,3deg);}
    68%{-moz-transform:skew(0,0);}
    75%{-moz-transform:skew(2deg,2deg);}
    83%{-moz-transform:skew(0,0);}
    92%{-moz-transform:skew(1deg,1deg);}
    100%{-moz-transform:skew(0,0);}
}
@-webkit-keyframes animations{
    0%{-webkit-transform:translate(0,-150px);}
    30%{-webkit-transform:translate(0,-150px);}
    40%{-webkit-transform:translate(0,0);}
    42%{-webkit-transform:scale(1.1,.6) skew(5deg,5deg);}
    48%{-webkit-transform:scale(1) skew(0,0);}
    54%{-webkit-transform:scale(1.05,.8) skew(4deg,4deg);}
    60%{-webkit-transform:scale(1) skew(0,0);}
    64%{-webkit-transform:skew(3deg,3deg);}
    68%{-webkit-transform:skew(0,0);}
    75%{-webkit-transform:skew(2deg,2deg);}
    83%{-webkit-transform:skew(0,0);}
    92%{-webkit-transform:skew(1deg,1deg);}
    100%{-webkit-transform:skew(0,0);}
}
@keyframes animations{
    0%{transform:translate(0,-150px);}
    30%{transform:translate(0,-150px);}
    40%{transform:translate(0,0);}
    42%{transform:scale(1.1,.6) skew(5deg,5deg);}
    48%{transform:scale(1) skew(0,0);}
    54%{transform:scale(1.05,.8) skew(4deg,4deg);}
    60%{transform:scale(1) skew(0,0);}
    64%{transform:skew(3deg,3deg);}
    68%{transform:skew(0,0);}
    75%{transform:skew(2deg,2deg);}
    83%{transform:skew(0,0);}
    92%{transform:skew(1deg,1deg);}
    100%{transform:skew(0,0);}
}
</style>
</head>
<body>
<h1>文字落下2s内趋于平稳：</h1>
<div>CSS3 Animations</div>
</body>
</html>

```
