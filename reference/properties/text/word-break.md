#word-break

##语法

- word-break：normal | keep-all | break-all
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：指定值
- 相关属性：&lt;' word-wrap '&gt;


##取值

- normal：依照亚洲语言和非亚洲语言的文本规则，允许在字内换行。
- keep-all：与所有非亚洲语言的normal相同。对于中文，韩文，日文，不允许字断开。适合包含少量亚洲文本的非亚洲文本。
- break-all：该行为与亚洲语言的normal相同。也允许非亚洲语言文本行的任意字内断开。该值适合包含一些非亚洲文本的亚洲文本，比如使连续的英文字母间断行。


##说明

设置或检索对象内文本的字内换行行为。

- 对于解决防止页面中出现连续无意义的长字符打破布局，应该使用break-all属性值；
- 作为IE的私有属性之一，IE5.5率先实现了 &lt;' word-break '&gt; ，后期被w3c采纳成标准属性；
- 对应的脚本特性为wordBreak。


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
		<td class="unsupport">2.0-14.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">15.0+</td>
	</tr>
	<tr>
		<td rowspan="2">keep-all</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="unsupport">2.0-14.0</td>
		<td class="unsupport" rowspan="2">4.0-45.0</td>
		<td class="unsupport" rowspan="2">6.0-8.0</td>
		<td class="unsupport" rowspan="2">15.0-29.0</td>
		<td class="unsupport" rowspan="2">6.0-8.3</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-42.0</td>
	</tr>
	<tr>
		<td class="support">15.0+</td>
	</tr>
</tbody>
</table>


- 不支持：keep-all 作为参数值。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test p{width:100px;border:1px solid #000;background-color:#eee;}
.normal p{word-break:normal;}
.break-all p{word-break:break-all;}
.keep-all p{word-break:keep-all;}
</style>
</head>
<body>
<ul class="test">
	<li class="normal">
		<strong>normal：</strong>
		<p>aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
	<li class="break-all">
		<strong>break-word：</strong>
		<p>aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
	<li class="keep-all">
		<strong>keep-all：</strong>
		<p>aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
</ul>
</body>
</html>

```
