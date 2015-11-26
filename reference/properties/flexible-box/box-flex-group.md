#box-flex-group

##语法

- box-flex-group：&lt;integer&gt;
- 默认值：1
- 适用于：伸缩盒子元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- &lt;integer&gt;：用整数值来定义伸缩盒对象的子元素所在的组。


##说明

设置或检索伸缩盒对象的子元素的所属组。

- 动态给数值较大的组分配其内容所需的实际空间（如无内容、padding、border则不占空间），剩余空间则均分给数值最小的那个组（可能有1个或多个元素）
- 对应的脚本特性为boxFlexGroup。


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
		<td class="unsupport">2.0-40.0</td>
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
.box li:nth-child(1){-webkit-box-flex:1;-moz-box-flex:1;-ms-box-flex:1;-webkit-box-flex-group:1;-moz-box-flex-group:1;-ms-box-flex-group:1;background:#666;}
.box li:nth-child(2){-webkit-box-flex:1;-moz-box-flex:1;-ms-box-flex:1;-webkit-box-flex-group:2;-moz-box-flex-group:2;-ms-box-flex-group:2;background:#999;}
.box li:nth-child(3){-webkit-box-flex:1;-moz-box-flex:1;-ms-box-flex:1;-webkit-box-flex-group:1;-moz-box-flex-group:1;-ms-box-flex-group:1;background:#ccc;}
</style>
</head>
<body>
<h1>box-flex-group</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>

```
