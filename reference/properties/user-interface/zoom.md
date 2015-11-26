#zoom

##语法

- zoom：normal | &lt;number&gt; | &lt;percentage&gt;
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：是
- 计算值：绝对长度


##取值

- normal：使用对象的实际尺寸。
- &lt;number&gt;：用浮点数来定义缩放比例。不允许负值
- &lt;percentage&gt;：用百分比来定义缩放比例。不允许负值


##说明

设置或检索对象的缩放比例。

- 对应的脚本特性为zoom。


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
		<td class="support">6.0+</td>
		<td class="unsupport">2.0-40.0</td>
		<td class="support">4.0+</td>
		<td class="support">6.0+</td>
		<td class="support">15.0+</td>
		<td class="support">6.0+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
body{line-height:1.5;}
h1{margin:0;font-size:16px;font-family:Arial;}
.test{zoom:normal;}
.test2{zoom:5;}
.test3{zoom:300%;}
</style>
</head>
<body>
<h1>zoom:normal</h1>
<div class="test">zoom:normal</div>

<h1>zoom:5</h1>
<div class="test2">zoom:5</div>

<h1>zoom:300%</h1>
<div class="test3">zoom:300%</div>
</body>
</html>

```
