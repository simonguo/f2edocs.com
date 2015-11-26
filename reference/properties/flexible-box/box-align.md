#box-align

##语法

- box-align：start | end | center | baseline | stretch
- 默认值：stretch
- 适用于：伸缩盒容器
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- start：设置伸缩盒对象的子元素从开始位置对齐
- center：设置伸缩盒对象的子元素居中对齐
- end：设置伸缩盒对象的子元素从结束位置对齐
- baseline：设置伸缩盒对象的子元素基线对齐
- stretch：设置伸缩盒对象的子元素自适应父元素尺寸


##说明

设置或检索伸缩盒对象的子元素的对齐方式。

- 效果等同于过渡版本的flex-align属性和新版本的align-items属性；
- box-align的对齐方式受box-orient影响；
- 默认情况下（即box-orient设置为horizontal）start和end所呈现的效果等同于顶部对齐和底部对齐；
- 当box-orient设置为vertical时，start和end所呈现的效果等同于左对齐和右对齐；
- 对应的脚本特性为boxAlign。


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
		<td><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-11.0</td>
		<td class="support">2.0-40.0<sup class="fix">-moz-</sup></td>
		<td class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.3<sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font:bold 20px/1.5 georgia,simsun,sans-serif;}
.box,.box2{display:-webkit-box;display:-moz-box;display:-ms-box;margin:0;padding:10px;background:#000;list-style:none;}
.box{-webkit-box-orient:horizontal;-moz-box-orient:horizontal;-ms-box-orient:horizontal;width:260px;height:100px;}
.box2{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-box-orient:vertical;width:100px;height:260px;}
.box0,.box06{-webkit-box-align:start;-moz-box-align:start;-ms-box-align:start;}
.box02,.box07{-webkit-box-align:center;-moz-box-align:center;-ms-box-align:center;}
.box03,.box08{-webkit-box-align:end;-moz-box-align:end;-ms-box-align:end;}
.box04,.box09{-webkit-box-align:baseline;-moz-box-align:baseline;-ms-box-align:baseline;}
.box05,.box010{-webkit-box-align:stretch;-moz-box-align:stretch;-ms-box-align:stretch;}
.box li,.box2 li{padding:10px;}
.box li:nth-child(1),.box2 li:nth-child(1){background:#666;}
.box li:nth-child(2),.box2 li:nth-child(2){background:#999;}
.box li:nth-child(3),.box2 li:nth-child(3){background:#ccc;}
</style>
</head>
<body>
<h1>横向排列时子元素从起始位置对齐 box-align:start;</h1>
<ul class="box0 box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>横向排列时子元素居中对齐 box-align:center;</h1>
<ul class="box02 box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>横向排列时子元素从结束位置对齐 box-align:end;</h1>
<ul class="box03 box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>横向排列时子元素基线对齐 box-align:baseline;</h1>
<ul class="box04 box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>横向排列时子元素自适应父元素 box-align:stretch;</h1>
<ul class="box05 box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>纵向排列时子元素从起始位置对齐 box-align:start;</h1>
<ul class="box0 box2">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>纵向排列时子元素居中对齐 box-align:center;</h1>
<ul class="box02 box2">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>纵向排列时子元素从结束位置对齐 box-align:end;</h1>
<ul class="box03 box2">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>纵向排列时子元素基线对齐 box-align:baseline;</h1>
<ul class="box04 box2">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>纵向排列时子元素自适应父元素 box-align:stretch;</h1>
<ul class="box05 box2">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
</body>
</html>

```
