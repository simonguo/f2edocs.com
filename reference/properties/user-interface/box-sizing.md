#box-sizing

##语法

- box-sizing：content-box | border-box
- 默认值：content-box
- 适用于：所有接受 &lt;' width '&gt; 和 &lt;' height '&gt; 的元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- content-box：padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和，即 ( Element width = width + border + padding )
- border-box：此属性表现为标准模式下的盒模型。


##说明

设置或检索对象的盒模型组成模式。


**标准盒模型代码:**

```css
.test1{
	box-sizing:content-box;
	width:200px;
	padding:10px;
	border:15px solid #eee;
}
```

**怪异盒模型代码:**

```css
.test1{
	box-sizing:border-box;
	width:200px;
	padding:10px;
	border:15px solid #eee;
}
```

- 对应的脚本特性为boxSizing。

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
		<td rowspan="2"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-7.0</td>
		<td class="support">2.0-28.0<sup class="fix">-moz-</sup></td>
		<td class="support">4.0-9.0<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
		<td class="support">29.0+</td>
		<td class="support">10.0+</td>
	</tr>
</tbody>
</table>


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{width:200px;height:70px;padding:10px;border:15px solid #999;-moz-box-sizing:content-box;-ms-box-sizing:content-box;box-sizing:content-box;background:#eee;}
.test2{width:200px;height:70px;padding:10px;border:15px solid #999;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;background:#eee;margin-top:20px;}
</style>
</head>
<body>
<div class="test">content-box</div>
<div class="test2">border-box</div>
</body>
</html>

```
