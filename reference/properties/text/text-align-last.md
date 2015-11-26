#text-align-last

##语法

- text-align-last：auto | start | end | left | right | center | justify
- 默认值：auto
- 适用于：块容器
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- auto：无特殊对齐方式。
- left：内容左对齐。
- center：内容居中对齐。
- right：内容右对齐。
- justify：内容两端对齐。
- start：内容对齐开始边界。
- end：内容对齐结束边界。


##说明

设置或检索一个块内的最后一行（包括块内仅有一行文本的情况，这时既是第一行也是最后一行）或者被强制打断的行的对齐方式

- 如果某一行同时也是块内的第一行或者第一行但后面紧跟着强制换行，除非显示的指定 &lt;' text-align '&gt; 第一行对齐方式（值 'start end'），否则 &lt;' text-align-last '&gt; 将会覆盖 &lt;' text-align '&gt;；
- 如果auto值被指定，内容的对齐方式将依据 &lt;' text-align '&gt; 的设定，除非 &lt;' text-align '&gt; 设置为justify；
- 作为IE的私有属性之一，IE5.5率先实现了 &lt;' text-align-last '&gt;，后期被w3c采纳成标准属性；
- IE7及以下浏览器只实现了块内最后一行的对齐方式，没有处理被强制打断的行的对齐方式，从IE8开始，这两种形式的行对齐都被支持；
- IE浏览器下，如果 &lt;' text-align-last '&gt; 要生效，必须先定义 &lt;' text-align '&gt; 为justify；
- 查看 form表单标签名两端对齐效果demo
- 对应的脚本特性为textAlignLast。


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
		<td class="unsupport">2.0-11.0</td>
		<td class="unsupport" rowspan="2">4.0-41.0</td>
		<td class="unsupport" rowspan="2">6.0-8.0</td>
		<td class="unsupport" rowspan="2">15.0-27.0</td>
		<td class="unsupport" rowspan="2">6.0-8.3</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-40.0</td>
	</tr>
	<tr>
		<td class="support">12.0-37.0 <sup class="fix">-moz-</sup></td>
	</tr>
	<tr>
		<td rowspan="2">start | end</td>
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport">2.0-11.0</td>
		<td class="unsupport" rowspan="2">4.0-41.0</td>
		<td class="unsupport" rowspan="2">6.0-8.0</td>
		<td class="unsupport" rowspan="2">15.0-27.0</td>
		<td class="unsupport" rowspan="2">6.0-8.3</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-40.0</td>
	</tr>
	<tr>
		<td class="support">12.0-37.0 <sup class="fix">-moz-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
div{width:300px;margin-top:10px;background:#aaa;text-align:justify;-moz-text-align-last:center;text-align-last:center;}
</style>
</head>
<body>
<div>我是第一行，后面紧接着强制换行<br>一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容我后面紧跟着强制换行<br>一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容我是最后一行</div>
</body>
</html>

```
