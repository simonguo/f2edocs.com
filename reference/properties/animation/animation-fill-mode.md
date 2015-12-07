#animation-fill-mode

##语法

- animation-fill-mode：&lt;single-animation-fill-mode&gt;[,&lt;single-animation-fill-mode&gt;]*
- &lt;single-animation-fill-mode&gt; = none | forwards | backwards | both
- 默认值：none
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：视觉


##取值

- none：默认值。不设置对象动画之外的状态
- forwards：设置对象状态为动画结束时的状态
- backwards：设置对象状态为动画开始时的状态
- both：设置对象状态为动画结束或开始的状态


##说明

检索或设置对象动画时间之外的状态

- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为animationFillMode。


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
li{padding:10px;}
span{display:block;width:80px;height:80px;padding:10px;border-radius:50px;box-shadow:0 0 10px rgba(204,102,0,.8);background:#F6D66E;background:-moz-linear-gradient(top,#fff,#F6D66E);background:-webkit-linear-gradient(top,#fff,#F6D66E);background:linear-gradient(top,#fff,#F6D66E);}
.none span{
	-moz-animation:animations 1s ease;
	-webkit-animation:animations 1s ease;
	animation:animations 1s ease;
}
@-webkit-keyframes animations{
	0%{-webkit-transform:translate(0,0);}
	100%{-webkit-transform:translate(400px);}
}
@-moz-keyframes animations{
	0%{-moz-transform:translate(0,0);}
	100%{-moz-transform:translate(400px);}
}
@keyframes animations{
	0%{transform:translate(0,0);}
	100%{transform:translate(400px);}
}
.forwards span{
	-moz-animation:animations2 1s ease forwards;
	-webkit-animation:animations2 1s ease forwards;
	animation:animations2 1s ease forwards;
}
@-webkit-keyframes animations2{
	0%{-webkit-transform:translate(0,0);}
	100%{-webkit-transform:translate(400px);}
}
@-moz-keyframes animations2{
	0%{-moz-transform:translate(0,0);}
	100%{-moz-transform:translate(400px);}
}
@keyframes animations2{
	0%{transform:translate(0,0);}
	100%{transform:translate(400px);}
}
.backwards span{
	-moz-animation:animations3 1s ease backwards;
	-webkit-animation:animations3 1s ease backwards;
	animation:animations3 1s ease backwards;
}
@-webkit-keyframes animations3{
	0%{-webkit-transform:translate(0,0);}
	100%{-webkit-transform:translate(400px);}
}
@-moz-keyframes animations3{
	0%{-moz-transform:translate(0,0);}
	100%{-moz-transform:translate(400px);}
}
@keyframes animations3{
	0%{transform:translate(0,0);}
	100%{transform:translate(400px);}
}
.both span{
	-moz-animation:animations4 1s ease both;
	-webkit-animation:animations4 1s ease both;
	animation:animations4 1s ease both;
}
@-webkit-keyframes animations4{
	0%{-webkit-transform:translate(0,0);}
	100%{-webkit-transform:translate(400px);}
}
@-moz-keyframes animations4{
	0%{-moz-transform:translate(0,0);}
	100%{-moz-transform:translate(400px);}
}
@keyframes animations4{
	0%{transform:translate(0,0);}
	100%{transform:translate(400px);}
}
</style>
</head>
<body>
<h1>animation-fill-mode：</h1>
<ul>
	<li class="none">
		<strong>none: </strong>
		<span></span>
	</li>
	<li class="forwards">
		<strong>forwards: </strong>
		<span></span>
	</li>
	<li class="backwards">
		<strong>backwards: </strong>
		<span></span>
	</li>
	<li class="both">
		<strong>both: </strong>
		<span></span>
	</li>
</ul>
</body>
</html>

```
