#font-stretch

##语法

- font-stretch：normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：是
- 计算值：指定值


##取值

- normal：正常文字宽度
- ultra-condensed：比正常文字宽度窄4个基数。
- extra-condensed：比正常文字宽度窄3个基数。
- condensed：比正常文字宽度窄2个基数。
- semi-condensed：比正常文字宽度窄1个基数。
- semi-expanded：比正常文字宽度宽1个基数。
- expanded：比正常文字宽度宽2个基数。
- extra-expanded：比正常文字宽度宽3个基数。
- ultra-expanded：比正常文字宽度宽4个基数。


##说明

设置或检索对象中的文字是否横向拉伸变形。

- 文字的拉伸是相对于浏览器显示的字体的正常宽度。
- 对应的脚本特性为fontStretch。


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
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-8.0</td>
		<td class="unsupport" rowspan="2">4.0-43.0</td>
		<td class="unsupport" rowspan="2">3.1-8.1</td>
		<td class="unsupport" rowspan="2">15.0-28.0</td>
		<td class="unsupport" rowspan="2">3.2-8.1</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-40.0</td>
	</tr>
	<tr>
		<td class="support">9.0+ <sup><a href="#support1">#1</a></sup></td>
		<td class="support">9.0+ <sup><a href="#support1">#1</a></sup></td>
	</tr>
</tbody>
</table>


- 已支持font-stretch，但显示效果与正常文字并无不同。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
p{margin:0;font-size:80px;font-weight:bold;background:#ddd;width:30px;}
.test .normal p{font-stretch:normal;}
.test .condensed p{font-stretch:condensed;}
.test .ultra-condensed p{font-stretch:ultra-condensed;}
.test .extra-condensed p{font-stretch:extra-condensed;}
.test .semi-expanded p{font-stretch:semi-expanded;}
.test .expanded p{font-stretch:expanded;}
.test .ultra-expanded p{font-stretch:ultra-expanded;}
.test .extra-expanded p{font-stretch:extra-expanded;}
.test .semi-condensed p{font-stretch:semi-condensed;}
</style>
</head>
<body>
<ul class="test">
	<li class="normal">
		<strong>normal</strong>
		<p>a</p>
	</li>
	<li class="condensed">
		<strong>condensed</strong>
		<p>a</p>
	</li>
	<li class="ultra-condensed">
		<strong>ultra-condensed</strong>
		<p>a</p>
	</li>
	<li class="extra-condensed">
		<strong>extra-condensed</strong>
		<p>a</p>
	</li>
	<li class="semi-expanded">
		<strong>semi-expanded</strong>
		<p>a</p>
	</li>
	<li class="expanded">
		<strong>expanded</strong>
		<p>a</p>
	</li>
	<li class="ultra-expanded">
		<strong>ultra-expanded</strong>
		<p>a</p>
	</li>
	<li class="extra-expanded">
		<strong>extra-expanded</strong>
		<p>a</p>
	</li>
	<li class="semi-condensed">
		<strong>semi-condensed</strong>
		<p>a</p>
	</li>
</ul>
</body>
</html>

```
