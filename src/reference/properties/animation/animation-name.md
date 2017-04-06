#animation-name

##语法

- animation-name：&lt;single-animation-name&gt;[,&lt;single-animation-name&gt;]*
- &lt;single-animation-name&gt; = none | &lt;identifier&gt;
- 默认值：none
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：视觉
- 相关属性：[ @keyframes ]


##取值

- none：不引用任何动画名称
- &lt;identifier&gt;：定义一个或多个动画名称(identifier标识)


##说明

检索或设置对象所应用的动画名称

- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为animationName。


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
div{position:absolute;top:50%;left:50%;width:300px;height:150px;margin:-75px 0 0 -150px;}
.over{border:3px solid #eee;background:#e0e0e0;}
.text{font:bold 14px/150px Georgia;text-align:center;}
.over{
    -webkit-animation:animations 2.5s ease-out forwards,animations3 1s ease-out 2.5s forwards;
    -moz-animation:animations 2.5s ease-out forwards,animations3 1s ease-out 2.5s forwards;
    animation:animations 2.5s ease-out forwards,animations3 1s ease-out 2.5s forwards;
}
@-webkit-keyframes animations{
    0%{-webkit-transform:scale(0);opacity:0;}
    40%{-webkit-transform:scale(1);opacity:1;}
    100%{opacity:1;}
}
@-moz-keyframes animations{
    0%{-moz-transform:scale(0);opacity:0;}
    40%{-moz-transform:scale(1);opacity:1;}
    100%{opacity:1;}
}
@keyframes animations{
    0%{transform:scale(0);opacity:0;}
    40%{transform:scale(1);opacity:1;}
    100%{opacity:1;}
}
.text{
    opacity: 0;
    -webkit-animation:animations2 1.5s ease-out 1s forwards;
    -moz-animation:animations2 1.5s ease-out 1s forwards;
    animation:animations2 1.5s ease-out 1s forwards;
}
@-webkit-keyframes animations2{
    0%{-webkit-transform:scale(4);opacity:0;}
    40%{-webkit-transform:scale(2);opacity:1;}
    70%{-webkit-transform:scale(2);opacity:1;}
    100%{-webkit-transform:scale(5);opacity:0;}
}
@-moz-keyframes animations2{
    0%{-moz-transform:scale(4);opacity:0;}
    40%{-moz-transform:scale(2);opacity:1;}
    70%{-moz-transform:scale(2);opacity:1;}
    100%{-moz-transform:scale(5);opacity:0;}
}
@keyframes animations2{
    0%{transform:scale(4);opacity:0;}
    40%{transform:scale(2);opacity:1;}
    70%{transform:scale(2);opacity:1;}
    100%{transform:scale(5);opacity:0;}
}
@-webkit-keyframes animations3{
    0%{-webkit-transform:scale(1);opacity:1;}
    100%{-webkit-transform:scale(0);opacity:0;}
}
@-moz-keyframes animations3{
    0%{-moz-transform:scale(1);opacity:1;}
    100%{-moz-transform:scale(0);opacity:0;}
}
@keyframes animations3{
    0%{transform:scale(1);opacity:1;}
    100%{transform:scale(0);opacity:0;}
}
</style>
</head>
<body>
<div class="over"></div>
<div class="text">CSS3 Animations</div>
</body>
</html>

```
