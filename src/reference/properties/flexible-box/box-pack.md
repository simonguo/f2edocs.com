#box-pack

##语法

- box-pack：start | center | end | justify
- 默认值：start
- 适用于：伸缩盒容器
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- start：设置伸缩盒对象的子元素从开始位置对齐（大部分情况等同于左对齐，受）
- center：设置伸缩盒对象的子元素居中对齐
- end：设置伸缩盒对象的子元素从结束位置对齐（大部分情况等同于右对齐）
- justify：设置或伸缩盒对象的子元素两端对齐


##说明

设置或检索伸缩盒对象的子元素的对齐方式。

- 效果等同于过渡版本的flex-pack属性和新版本的justify-content属性；
- box-pack的对齐方式受box-orient影响；
- 默认情况下（即box-orient设置为horizontal）start和end所呈现的效果等同于左对齐和右对齐；
- 当box-orient设置为vertical时，start和end所呈现的效果等同于顶部对齐和底部对齐；
- 对应的脚本特性为boxPack。


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
		<td class="support">2.0-40.0<sup class="fix">-moz-</sup><sup><a href="#support1">#1</a></sup></td>
		<td class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.3<sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>


- 支持justify值但无效果。


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
#box,#box5{-webkit-box-pack:start;-moz-box-pack:start;-ms-box-pack:start;}
#box2,#box6{-webkit-box-pack:center;-moz-box-pack:center;-ms-box-pack:center;}
#box3,#box7{-webkit-box-pack:end;-moz-box-pack:end;-ms-box-pack:end;}
#box4,#box8{-webkit-box-pack:justify;-moz-box-pack:justify;-ms-box-pack:justify;}
.box li{width:50px;}
.box2 li{height:50px;}
.box li:nth-child(1),.box2 li:nth-child(1){background:#666;}
.box li:nth-child(2),.box2 li:nth-child(2){background:#999;}
.box li:nth-child(3),.box2 li:nth-child(3){background:#ccc;}
</style>
</head>
<body>
<h1>横向排列时子元素从起始位置对齐 box-pack:start;</h1>
<ul id="box" class="box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>横向排列时子元素居中对齐 box-pack:center;</h1>
<ul id="box2" class="box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>横向排列时子元素从结束位置对齐 box-pack:end;</h1>
<ul id="box3" class="box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>横向排列时子元素两端对齐 box-pack:justify;</h1>
<ul id="box4" class="box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>纵向排列时子元素从起始位置对齐 box-pack:start;</h1>
<ul id="box5" class="box2">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>纵向排列时子元素居中对齐 box-pack:center;</h1>
<ul id="box6" class="box2">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>纵向排列时子元素从结束位置对齐 box-pack:end;</h1>
<ul id="box7" class="box2">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>纵向排列时子元素两端对齐 box-pack:justify;</h1>
<ul id="box8" class="box2">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
</body>
</html>

```
