#animation

##语法

- animation：&lt;single-animation&gt;[,&lt;single-animation&gt;]*
- &lt;single-animation&gt; = &lt;single-animation-name&gt; || &lt;time&gt; || &lt;single-animation-timing-function&gt; || &lt;time&gt; || &lt;single-animation-iteration-count&gt; || &lt;single-animation-direction&gt; || &lt;single-animation-fill-mode&gt; || &lt;single-animation-play-state&gt;
- 默认值：看每个独立属性
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：看每个独立属性
- 媒体：视觉


##取值

- &lt;' animation-name '&gt;：检索或设置对象所应用的动画名称
- &lt;' animation-duration '&gt;：检索或设置对象动画的持续时间
- &lt;' animation-timing-function '&gt;：检索或设置对象动画的过渡类型
- &lt;' animation-delay '&gt;：检索或设置对象动画延迟的时间
- &lt;' animation-iteration-count '&gt;：检索或设置对象动画的循环次数
- &lt;' animation-direction '&gt;：检索或设置对象动画在循环中是否反向运动
- &lt;' animation-fill-mode '&gt;：检索或设置对象动画时间之外的状态
- &lt;' animation-play-state '&gt;：检索或设置对象动画的状态。w3c正考虑是否将该属性移除，因为动画的状态可以通过其它的方式实现，比如重设样式


##说明

复合属性。检索或设置对象所应用的动画特效。

- 如果提供多组属性值，以逗号进行分隔。
- 注意：如果只提供一个&lt;time&gt;参数，则为 &lt;' animation-duration '&gt; 的值定义；如果提供二个&lt;time&gt;参数，则第一个为 &lt;' animation-duration '&gt; 的值定义，第二个为 &lt;' animation-delay '&gt; 的值定义
- 对应的脚本特性为animation。


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
div{position:absolute;top:50%;left:50%;overflow:hidden;width:300px;height:150px;margin:-75px 0 0 -150px;border:3px solid #eee;background:#e0e0e0;}
span{display:block;height:50px;font:bold 14px/50px Georgia;}
.a1{
    -webkit-transform:translate(60px);
    -moz-transform:translate(60px);
    transform:translate(60px);
    -webkit-animation:animations 2s ease-out forwards;
    -moz-animation:animations 2s ease-out forwards;
    animation:animations 2s ease-out forwards;
}
@-webkit-keyframes animations{
    0%{-webkit-transform:translate(0);opacity:0;}
    50%{-webkit-transform:translate(30px);opacity:1;}
    70%{-webkit-transform:translate(35px);opacity:1;}
    100%{-webkit-transform:translate(60px);opacity:0;}
}
@-moz-keyframes animations{
    0%{-moz-transform:translate(0);opacity:0;}
    50%{-moz-transform:translate(30px);opacity:1;}
    70%{-moz-transform:translate(35px);opacity:1;}
    100%{-moz-transform:translate(60px);opacity:0;}
}
@keyframes animations{
    0%{transform:translate(0);opacity:0;}
    50%{transform:translate(30px);opacity:1;}
    70%{transform:translate(35px);opacity:1;}
    100%{transform:translate(60px);opacity:0;}
}
.a3{
    opacity: 0;
    -webkit-transform:translate(100px);
    -moz-transform:translate(100px);
    transform:translate(100px);
    -webkit-animation:animations3 2s ease-out 2s forwards;
    -moz-animation:animations3 2s ease-out 2s forwards;
    animation:animations3 2s ease-out 2s forwards;
}
@-webkit-keyframes animations3{
    0%{-webkit-transform:translate(160px);opacity:0;}
    50%{-webkit-transform:translate(130px);opacity:1;}
    70%{-webkit-transform:translate(125px);opacity:1;}
    100%{-webkit-transform:translate(100px);opacity:0;}
}
@-moz-keyframes animations3{
    0%{-moz-transform:translate(160px);opacity:0;}
    50%{-moz-transform:translate(130px);opacity:1;}
    70%{-moz-transform:translate(125px);opacity:1;}
    100%{-moz-transform:translate(100px);opacity:0;}
}
@keyframes animations3{
    0%{transform:translate(160px);opacity:0;}
    50%{transform:translate(130px);opacity:1;}
    70%{transform:translate(125px);opacity:1;}
    100%{transform:translate(100px);opacity:0;}
}
.a2{
    opacity: 0;
    text-align:center;font-size:26px;
    -webkit-animation:animations2 5s ease-in-out 4s forwards;
    -moz-animation:animations2 5s ease-in-out 4s forwards;
    animation:animations2 5s ease-in-out 4s forwards;
}
@-webkit-keyframes animations2{
    0%{opacity:0;}
    40%{opacity:.8;}
    45%{opacity:.3;}
    50%{opacity:.8;}
    55%{opacity:.3;}
    60%{opacity:.8;}
    100%{opacity:0;}
}
@-moz-keyframes animations2{
    0%{opacity:0;}
    40%{opacity:.8;}
    45%{opacity:.3;}
    50%{opacity:.8;}
    55%{opacity:.3;}
    60%{opacity:.8;}
    100%{opacity:0;}
}
@keyframes animations2{
    0%{opacity:0;}
    40%{opacity:.8;}
    45%{opacity:.3;}
    50%{opacity:.8;}
    55%{opacity:.3;}
    60%{opacity:.8;}
    100%{opacity:0;}
}
</style>
</head>
<body>
<div>
    <span class="a1">CSS3 Animations</span>
    <span class="a2">CSS3 Animations</span>
    <span class="a3">CSS3 Animations</span>
</div>
</body>
</html>

```
