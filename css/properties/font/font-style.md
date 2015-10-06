#font-style

##语法

- font-style：normal | italic | oblique
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- normal：指定文本字体样式为正常的字体
- italic：指定文本字体样式为斜体。对于没有设计斜体的特殊字体，如果要使用斜体外观将应用oblique
- oblique：指定文本字体样式为倾斜的字体。人为的使文字倾斜，而不是去选取字体中的斜体字


##说明

设置或检索对象中的文本字体样式。

- 对应的脚本特性为fontStyle。


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
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">3.1+</td>
		<td class="support">3.5+</td>
		<td class="support">3.2+</td>
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
.test p{margin:15px 0;border:1px solid #000;}
.normal p{font-style:normal;}
.italic p{font-style:italic;}
.oblique p{font-style:oblique;}
</style>
</head>
<body>
<ul class="test">
	<li class="normal">
		<strong>正常的字体：</strong>
		<p>本段文字将显示为正常的字体。</p>
	</li>
	<li class="italic">
		<strong>斜体：</strong>
		<p>本段文字将显示为斜体。</p>
	</li>
	<li class="oblique">
		<strong>倾斜的字体：</strong>
		<p>本段文字将显示为倾斜的字体。</p>
	</li>
</ul>
</body>
</html>

```
