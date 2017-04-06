#transform-style

##语法

- transform-style：flat | preserve-3d
- 默认值：flat
- 适用于：变换元素
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：视觉


##取值

- flat：指定子元素位于此元素所在平面内
- preserve-3d：指定子元素定位在三维空间内


##说明

指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化。

- 当该属性值为「preserve-3d」时，元素将会创建局部堆叠上下文。
- 决定一个变换元素看起来是处在三维空间还是平面内，需要该元素的父元素上定义 &lt;' transform-style '&gt; 属性。
- 对应的脚本特性为transformStyle。


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
    <td class="partsupport">10.0-11.0<sup class="fix">-ms-</sup><sup><a href="#support1">#1</a></sup></td>
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


- 不支持「preserve-3d」属性值


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
body {
    -webkit-perspective: 1000px;
    perspective: 1000px;
}
.cube {
    position: relative;
    font-size: 80px;
    width: 2em;
    margin: 1.5em auto;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: rotateX(-30deg) rotateY(30deg);
    transform: rotateX(-30deg) rotateY(30deg);
}
.cube > div {
    position: absolute;
    width: 2em;
    height: 2em;
    background: rgba(0, 0, 0, .1);
    border: 1px solid #999;
    color: white;
    text-align: center;
    line-height: 2em;
}
.front {
    -webkit-transform: translateZ(1em);
    transform: translateZ(1em);
}
.top {
    -webkit-transform: rotateX(90deg) translateZ(1em);
    transform: rotateX(90deg) translateZ(1em);
}
.right {
    -webkit-transform: rotateY(90deg) translateZ(1em);
    transform: rotateY(90deg) translateZ(1em);
}
.left {
    -webkit-transform: rotateY(-90deg) translateZ(1em);
    transform: rotateY(-90deg) translateZ(1em);
}
.bottom {
    -webkit-transform: rotateX(-90deg) translateZ(1em);
    transform: rotateX(-90deg) translateZ(1em);
}
.back {
    -webkit-transform: rotateY(-180deg) translateZ(1em);
    transform: rotateY(-180deg) translateZ(1em);
}
</style>
</head>
<body>
<div class="cube">
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
