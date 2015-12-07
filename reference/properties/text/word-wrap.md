#word-wrap

##语法

- word-wrap：normal | break-word
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：指定值
- 相关属性：&lt;' overflow-wrap '&gt; || &lt;' word-break '&gt;


##取值

- normal：允许内容顶开或溢出指定的容器边界。
- break-word：内容将在边界内换行。如果需要，单词内部允许断行。


##说明

设置或检索当内容超过指定容器的边界时是否断行。

- 作为IE的私有属性之一，IE5.5率先实现了 &lt;' word-wrap '&gt; ，后期被w3c采纳成标准属性；
- CSS3中将 &lt;' word-wrap '&gt; 改名为 &lt;' overflow-wrap '&gt;；
- 对应的脚本特性为wordWrap。


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
		<td class="support" rowspan="2">6.0+</td>
		<td class="unsupport">2.0-3.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
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
.test p{width:100px;border:1px solid #000;background-color:#eee;}
.normal p{word-wrap:normal;}
.break-word p{word-wrap:break-word;}
</style>
</head>
<body>
<ul class="test">
	<li class="normal">
		<strong>normal：</strong>
		<p>aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
	<li class="break-word">
		<strong>break-word：</strong>
		<p>aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
	<li class="break-word">
		<strong>break-word：</strong>
		<p>中英混排的时候abcdefghijklmnopqrst</p>
	</li>
</ul>
</body>
</html>

```
