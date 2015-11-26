#text-justify

##语法

- text-justify：auto | none | inter-word | inter-ideograph | inter-cluster | distribute | kashida
- 默认值：auto
- 适用于：块容器及某些内联元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- auto：允许浏览器用户代理确定使用的两端对齐法则。
- none：禁止两端对齐。
- inter-word：通过增加字之间的空格对齐文本。该行为是对齐所有文本行最快的方法，它的两端对齐行为对段落的最后一行无效。
- inter-ideograph：为表意字文本提供完全两端对齐，增加或减少表意字和词间的空格。
- inter-cluster：调整文本无词间空格的行。这种模式的调整是用于优化亚洲语言文档的
- distribute：通过增加或减少字或字母之间的空格对齐文本，适用于东亚文档，尤其是泰国。
- kashida：通过拉长选定点的字符调整文本。这种调整模式是特别为阿拉伯脚本语言提供的。需要IE5.5+支持


##说明

设置或检索对象内调整文本使用的对齐方式。

- 因为这个属性影响文本布局，所以 &lt;' text-align '&gt; 属性必须被设置为justify。
- 对应的脚本特性为textJustify。


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
		<td class="partsupport">6.0-11.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="unsupport">2.0-37.0</td>
		<td class="unsupport">4.0-41.0</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">15.0-27.0</td>
		<td class="unsupport">6.0-8.3</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-40.0</td>
	</tr>
</tbody>
</table>


- 不支持：none


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
div{width:300px;margin-top:10px;background:#aaa;text-align:justify;text-justify:inter-word;}
</style>
</head>
<body>
<div>我是第一行，后面紧接着强 制换行一些随意的文字 内容一些随意的文字内容一些随意的文字内容一些随意的文 字内容一些随意的文字内容一些随意的文字内容我后 面紧跟着强制换行 一些随意的文字内容一些随意 的文字内容一些随意的文字内容一些随意的文字内容一些 随意的文字内容我是最后一行</div>
</body>
</html>

```
