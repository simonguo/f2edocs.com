#white-space

##语法

- white-space：normal | pre | nowrap | pre-wrap | pre-line
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- normal：默认处理方式。
- pre：用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字超出边界时不换行。可查阅pre对象
- nowrap：强制在同一行内显示所有文本，合并文本间的多余空白，直到文本结束或者遭遇br对象。
- pre-wrap：用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字碰到边界时发生换行。
- pre-line：保持文本的换行，不保留文字间的空白距离，当文字碰到边界时发生换行。


##说明

设置或检索对象内空格的处理方式。

- 对应的脚本特性为whiteSpace。


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
		<td class="support">6.0+</td>
		<td class="support">15.0+</td>
		<td class="support">6.0+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">pre-wrap</td>
		<td class="unsupport">6.0-7.0</td>
		<td class="support">2.0 <sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="4">4.0+</td>
		<td class="support" rowspan="4">6.0+</td>
		<td class="support" rowspan="4">15.0+</td>
		<td class="support" rowspan="4">6.0+</td>
		<td class="support" rowspan="4">2.1+</td>
		<td class="support" rowspan="4">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
		<td class="support">3.0+</td>
	</tr>
	<tr>
		<td rowspan="2">pre-line</td>
		<td class="unsupport">6.0-7.0</td>
		<td class="unsupport">2.0-3.0</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
		<td class="support">3.5+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test p{width:200px;border:1px solid #000;}
.normal p{word-wrap:normal;}
.pre p{white-space:pre;}
.pre-wrap p{white-space:pre-wrap;}
.pre-line p{white-space:pre-line;}
.nowrap p{white-space:nowrap;}
</style>
</head>
<body>
<ul class="test">
	<li class="normal">
		<strong>normal：</strong>
		<p>轻轻地我走了
	正如我轻轻地来</p>
	</li>
	<li class="pre">
		<strong>pre：</strong>
		<p>轻轻地我走了（这里接很多测试文字）
	正如我轻轻地来</p>
	</li>
	<li class="pre-wrap">
		<strong>pre-wrap：</strong>
		<p>轻轻地    我走了（这里接很多测试文字）
	正如我轻轻地来</p>
	</li>
	<li class="pre-line">
		<strong>pre-line</strong>
		<p>轻轻地    我走了（这里接很多测试文字）
	正如我轻轻地来</p>
	</li>
	<li class="nowrap">
		<strong>nowrap：</strong>
		<p>轻轻地我走了
	正如我轻轻地来</p>
	</li>
</ul>
</body>
</html>

```
