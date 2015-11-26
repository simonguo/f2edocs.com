#transform

##语法

- transform：none | &lt;transform-function&gt;+
- matrix() = matrix(&lt;number&gt;[,&lt;number&gt;]{5,5})
- matrix3d() = matrix3d(&lt;number&gt;[,&lt;number&gt;]{15,15})
- translate() = translate(&lt;translation-value&gt;[,&lt;translation-value&gt;]?)
- translate3d() = translate3d(&lt;translation-value&gt;,&lt;translation-value&gt;,&lt;length&gt;)
- translatex() = translatex(&lt;translation-value&gt;)
- translatey() = translatey(&lt;translation-value&gt;)
- translatez() = translatez(&lt;length&gt;)
- rotate() = rotate(&lt;angle&gt;)
- rotate3d() = rotate3d(&lt;number&gt;,&lt;number&gt;,&lt;number&gt;,&lt;angle&gt;)
- rotatex() = rotatex(&lt;angle&gt;)
- rotatey() = rotatey(&lt;angle&gt;)
- rotatez() = rotatez(&lt;angle&gt;)
- scale() = scale(&lt;number&gt;[,&lt;number&gt;]?)
- scale3d() = scale3d(&lt;number&gt;,&lt;number&gt;,&lt;number&gt;)
- scalex() = scalex(&lt;number&gt;)
- scaley() = scaley(&lt;number&gt;)
- scalez() = scalez(&lt;number&gt;)
- skew() = skew(&lt;angle&gt;[,&lt;angle&gt;]?)
- skewx() = skewx(&lt;angle&gt;)
- skewy() = skewy(&lt;angle&gt;)
- perspective() = perspective(&lt;length&gt;)
- &lt;translation-value&gt; = &lt;length&gt; | &lt;percentage&gt;
- 默认值：none
- 适用于：所有块级元素及某些内联元素
- 继承性：无
- 动画性：是
- 计算值：指定值，但相对长度会转换为绝对长度
- 媒体：视觉


##取值

- none：无转换
- matrix()：以一个含六值的(a,b,c,d,e,f)变换矩阵的形式指定一个2D变换，相当于直接应用一个[a,b,c,d,e,f]变换矩阵
- translate()：指定对象的2D translation（2D平移）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0
- translatex()：指定对象X轴（水平方向）的平移
- translatey()：指定对象Y轴（垂直方向）的平移
- rotate()：指定对象的2D rotation（2D旋转），需先有 &lt;' transform-origin '&gt; 属性的定义
- scale()：指定对象的2D scale（2D缩放）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认取第一个参数的值
- scalex()：指定对象X轴的（水平方向）缩放
- scaley()：指定对象Y轴的（垂直方向）缩放
- skew()：指定对象skew transformation（斜切扭曲）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0
- skewx()：指定对象X轴的（水平方向）扭曲
- skewy()：指定对象Y轴的（垂直方向）扭曲
- matrix3d()：以一个4x4矩阵的形式指定一个3D变换
- translate3d()：指定对象的3D位移。第1个参数对应X轴，第2个参数对应Y轴，第3个参数对应Z轴，参数不允许省略
- translatez()：指定对象Z轴的平移
- rotate3d()：指定对象的3D旋转角度，其中前3个参数分别表示旋转的方向x,y,z，第4个参数表示旋转的角度，参数不允许省略
- rotatex()：指定对象在x轴上的旋转角度
- rotatey()：指定对象在y轴上的旋转角度
- rotatez()：指定对象在z轴上的旋转角度
- scale3d()：指定对象的3D缩放。第1个参数对应X轴，第2个参数对应Y轴，第3个参数对应Z轴，参数不允许省略
- scalez()：指定对象的z轴缩放
- perspective()：指定透视距离


##说明

设置或检索对象的转换。

- 对应的脚本特性为transform。


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
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-3.0</td>
		<td class="support">4.0-35.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-22.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.4<sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-34.0<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">9.0<sup class="fix">-ms-</sup></td>
		<td class="support">3.5-15.0<sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="2">36.0+</td>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support" rowspan="2">23.0+</td>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support" rowspan="2">40.0+</td>
		<td class="support" rowspan="2">35.0+</td>
	</tr>
	<tr>
		<td class="support">10.0+</td>
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
h1{clear:both;padding-top:10px;font-size:16px;font-family:Arial;}
.test{zoom:1;width:700px;margin:0;padding:0;list-style:none;}
.test li{float:left;margin:20px 30px 0 0;border:1px solid #000;}
.test li p{width:300px;height:100px;margin:0;background:#ddd;}
.test .matrix{-moz-transform:matrix(0,1,1,1,10px,10px);-webkit-transform:matrix(0,1,1,1,10,10);-ms-transform:matrix(0,1,1,1,10,10);transform:matrix(0,1,1,1,10,10);}
.test .translate p{-moz-transform:translate(5%,10px);-webkit-transform:translate(10px,10px);-ms-transform:translate(10px,10px);transform:translate(10px,10px);}
.test .translate2 p{-moz-transform:translate(-10px,-10px);-webkit-transform:translate(-10px,-10px);-ms-transform:translate(-10px,-10px);transform:translate(-10px,-10px);}
.test .translateX p{-moz-transform:translateX(20px);-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px);}
.test .translate3 p{-moz-transform:translate(20px);-webkit-transform:translate(20px);-ms-transform:translate(20px);transform:translate(20px);}
.test .translateY p{-moz-transform:translateY(10px);-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);}
.test .translate4 p{-moz-transform:translate(0,10px);-webkit-transform:translate(0,10px);-ms-transform:translate(0,10px);transform:translate(0,10px);}
.test .rotate{-moz-transform:rotate(-5deg);-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}
.test .rotate2{-moz-transform:rotate(5deg);-webkit-transform:rotate(5deg);-ms-transform:rotate(5deg);transform:rotate(5deg);}
.test .scale{-moz-transform:scale(.8);-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);}
.test .scale2{-moz-transform:scale(1.2);-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}
.test .skew{-moz-transform:skew(-5deg);-webkit-transform:skew(-5deg);-ms-transform:skew(-5deg);transform:skew(-5deg);}
.test .skew2{-moz-transform:skew(-5deg,-5deg);-webkit-transform:skew(-5deg,-5deg);-ms-transform:skew(-5deg,-5deg);transform:skew(-5deg,-5deg);}
</style>
</head>
<body>
<h1>矩阵变换：matrix()</h1>
<ul class="test">
	<li class="matrix">
		<p>transform:matrix(0,1,1,1,10,10)</p>
	</li>
</ul>
<h1>平移：translate(), translateX(), translateY()</h1>
<ul class="test">
	<li class="translate">
		<p>transform:translate(5%,10px)</p>
	</li>
	<li class="translate2">
		<p>transform:translate(-10px,-10px)</p>
	</li>
	<li class="translateX">
		<p>transform:translateX(20px)</p>
	</li>
	<li class="translate3">
		<p>transform:translate(20px)</p>
	</li>
	<li class="translateY">
		<p>transform:translateY(10px)</p>
	</li>
	<li class="translate4">
		<p>transform:translate(0,10px)</p>
	</li>
</ul>
<h1>旋转：rotate()</h1>
<ul class="test">
	<li class="rotate">
		<p>transform:rotate(-15deg)</p>
	</li>
	<li class="rotate2">
		<p>transform:rotate(15deg)</p>
	</li>
</ul>
<h1>缩放：scale()</h1>
<ul class="test">
	<li class="scale">
		<p>transform:scale(.8)</p>
	</li>
	<li class="scale2">
		<p>transform:scale(1.2)</p>
	</li>
</ul>
<h1>扭曲：skew()</h1>
<ul class="test">
	<li class="skew">
		<p>transform:skew(-5deg)</p>
	</li>
	<li class="skew2">
		<p>transform:skew(-5deg,-5deg)</p>
	</li>
</ul>
</body>
</html>

```
