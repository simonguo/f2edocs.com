#box-direction

##语法

- box-direction：normal | reverse
- 默认值：normal
- 适用于：伸缩盒容器
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- normal：设置伸缩盒对象的子元素按正常顺序排列
- reverse：反转伸缩盒对象的子元素的排列顺序


##说明

设置或检索伸缩盒对象的子元素的排列顺序是否反转。

- 可以通过box-orient:horizontal + box-direction:normal 达到新版本 flex-direction:row 的效果；
- 可以通过box-orient:horizontal + box-direction:reverse 达到新版本 flex-direction:row-reverse 的效果；
- 可以通过box-orient:vertical + box-direction:normal 达到新版本 flex-direction:column 的效果；
- 可以通过box-orient:horizontal + box-direction:reverse 达到新版本 flex-direction:column-reverse 的效果；
- Firefox设置box-direction为reverse时，在将元素的排列顺序反转的同时也将元素的对齐方式逆转了；Safari和Chrome则只是反转元素排列顺序
- 对应的脚本特性为boxDirection。


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
.box{display:-webkit-box;display:-moz-box;display:-ms-box;background:#000;width:240px;height:100px;margin:0;padding:10px;list-style:none;vertical-align:top;}
.box li{width:60px;}
.box li:nth-child(1){background:#666;}
.box li:nth-child(2){background:#999;}
.box li:nth-child(3){background:#ccc;}
#box{-webkit-box-direction:normal;-moz-box-direction:normal;-ms-box-direction:normal;}
#box2{-webkit-box-direction:reverse;-moz-box-direction:reverse;-ms-box-direction:reverse;}
</style>
</head>
<body>
<h1>box-direction:normal;</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h1>box-direction:reverse;</h1>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>

```
