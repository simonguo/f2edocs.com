#perspective

##语法

- perspective：none | &lt;length&gt;
- 默认值：none
- 适用于：变换元素
- 继承性：无
- 动画性：当值为&lt;length&gt;时
- 计算值：绝对长度或「none」
- 媒体：视觉


##取值

- none：不指定透视
- &lt;length&gt;：指定观察者距离「z=0」平面的距离，为元素及其内容应用透视变换。不允许负值


##说明

指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z&gt;0」的三维元素比正常大，而「z&lt;0」时则比正常小，大小程度由该属性的值决定。

- 当该属性值为「非none」时，元素将会创建局部堆叠上下文。
- 对应的脚本特性为perspective。


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
        <td class="support">10.0-11.0<sup class="fix">-ms-</sup></td>
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




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.wrapper {
    width: 200px;
    height: 200px;
    margin: 50px auto;
    border: 1px solid #000;
    -webkit-perspective: 50px;
    perspective: 50px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-animation: test 10s infinite;
    animation: test 10s infinite;
}
.wrapper > div {
    width: 180px;
    height: 120px;
    margin: 40px 10px;
    background-color: #ccc;
    -webkit-transform: rotatex(45deg);
    transform: rotatex(45deg);
}
@-webkit-keyframes test {
    from {
        -webkit-perspective: 50px;
    }
    to {
        -webkit-perspective: 300px;
    }
}
@keyframes test {
    from {
        perspective: 50px;
    }
    to {
        perspective: 300px;
    }
}
</style>
</head>
<body>
<div class="wrapper">
    <div>1</div>
</div>
</body>
</html>

```
