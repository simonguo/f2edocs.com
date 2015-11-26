#text-decoration

##语法

- text-decoration：&lt;' text-decoration-line '&gt; || &lt;' text-decoration-style '&gt; || &lt;' text-decoration-color '&gt;
- 默认值：看每个独立属性
- 适用于：所有元素
- 继承性：无
- 动画性：看每个独立属性
- 计算值：看每个独立属性
- 相关属性：&lt;' text-decoration-skip '&gt; || &lt;' text-underline-position '&gt;


##取值

- &lt;' text-decoration-line '&gt;：指定文本装饰的种类。相当于CSS2.1的 &lt;' text-decoration '&gt; 属性，可取值：none | underline | overline | line-through | blink
- &lt;' text-decoration-style '&gt;：指定文本装饰的样式。
- &lt;' text-decoration-color '&gt;：指定文本装饰的颜色。


##说明

复合属性。检索或设置对象中的文本的装饰。

- 所有浏览器均支持CSS2.1中的 &lt;' text-decoration '&gt; 属性，在CSS3中，该属性定义被移植到其新的分解属性 &lt;' text-decoration-line '&gt; 上；
- 对应的脚本特性为textDecoration。


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
		<td rowspan="3">CSS3复合属性</td>
		<td class="unsupport" rowspan="3">6.0-11.0</td>
		<td class="unsupport">2.0-5.0</td>
		<td class="unsupport" rowspan="3">4.0-45.0</td>
		<td class="unsupport">6.0-7.0</td>
		<td class="unsupport" rowspan="3">15.0-29.0</td>
		<td class="unsupport">6.0-7.1</td>
		<td class="unsupport" rowspan="3">2.1-4.4.4</td>
		<td class="unsupport" rowspan="3">18.0-42.0</td>
	</tr>
	<tr>
		<td class="support">6.0-35.0<sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="2">7.1-8.0<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="2">8.0-8.3<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
	</tr>
	<tr>
		<td class="support">36.0+</td>
	</tr>
</tbody>
</table>


- 支持 &lt;' text-decoration-style '&gt; 写入 &lt;' text-decoration '&gt; 缩写方式，但其dotted | dashed属性值会表现为实线。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test li{margin-top:10px;}
.test .none{text-decoration:none;}
.test .underline{text-decoration:underline;}
.test .overline{text-decoration:overline;}
.test .line-through{text-decoration:line-through;}
.test .blink{text-decoration:blink;}
.test .text-decoration-css3{
	-webkit-text-decoration:#f00 wavy underline;
	-moz-text-decoration:#f00 solid underline;
	text-decoration:#f00 solid underline;
}
</style>
</head>
<body>
<ul class="test">
	<li class="none">无装饰文字</li>
	<li class="underline">带下划线文字</li>
	<li class="overline">带上划线文字</li>
	<li class="line-through">带贯穿线文字</li>
	<li class="blink">带闪烁文字</li>
	<li class="text-decoration-css3">如果你的浏览器支持text-decoration在CSS3下的改变，将会看到本行文字有一条红色的下划实线</li>
</ul>
</body>
</html>

```
