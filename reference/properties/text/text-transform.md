#text-transform

##语法

- text-transform：none | capitalize | uppercase | lowercase | full-width<i class='fa fa-css3'></i>
- 默认值：none
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- none：无转换
- capitalize：将每个单词的第一个字母转换成大写
- uppercase：将每个单词转换成大写
- lowercase：将每个单词转换成小写
- full-width：将所有字符转换成fullwidth形式。如果字符没有相应的fullwidth形式，将保留原样。这个值通常用于排版拉丁字符和数字等表意符号。（CSS3）


##说明

检索或设置对象中的文本的大小写。

- 对应的脚本特性为textTransform。


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
		<td rowspan="2">full-width</td>
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport">2.0-18.0</td>
		<td class="unsupport" rowspan="2">4.0-45.0</td>
		<td class="unsupport" rowspan="2">6.0-8.0</td>
		<td class="unsupport" rowspan="2">15.0-29.0</td>
		<td class="unsupport" rowspan="2">6.0-8.3</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-42.0</td>
	</tr>
	<tr>
		<td class="support">19.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.capitalize span{text-transform:capitalize;}
.uppercase span{text-transform:uppercase;}
.lowercase span{text-transform:lowercase;}
</style>
</head>
<body>
<ul class="test">
	<li>
		<strong>将每个单词的首字母转换成大写</strong>
		<div>原　文： <span>how do you do.</span></div>
		<div class="capitalize">转换后： <span>how do you do.</span></div>
	</li>
	<li>
		<strong>转换成大写</strong>
		<div>原　文： <span>how do you do.</span></div>
		<div class="uppercase">转换后： <span>how do you do.</span></div>
	</li>
	<li>
		<strong>转换成小写</strong>
		<div>原　文： <span>HOW ARE YOU.</span></div>
		<div class="lowercase">转换后： <span>HOW ARE YOU.</span></div>
	</li>
</ul>
</body>
</html>

```
