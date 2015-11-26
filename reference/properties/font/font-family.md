#font-family

##语法

- font-family：[ &lt;family-name&gt; | &lt;generic-family&gt; ] #
- &lt;family-name&gt; = arial | georgia | verdana | helvetica | simsun and etc.
- &lt;generic-family&gt; = cursive | fantasy | monospace | serif | sans-serif
- 默认值：由user agent决定
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- &lt;family-name&gt;：字体名称。按优先顺序排列。以逗号隔开。如果字体名称包含空格或中文，则应使用引号括起
- &lt;generic-family&gt;：字体序列名称。


##说明

设置或检索用于对象中文本的字体名称序列。

- 序列可包含嵌入字体。请参阅@font-face规则。
- 一般字体引用可以不加引号，如果字体名包含了空格、数字或者符号（如连接符）则需加上引号，避免引发错误。
- user agent会遍历定义的字体序列，直到匹配到某个字体为止。
- 指定字体序列：

**写法：**

```css
body { font-family: helvetica, verdana, sans-serif; }
```

>如上字体定义，假设你机器上没有helvetica字体，但有verdana，这时将会以verdana显示你的文字。


- 对应的脚本特性为fontFamily。


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
.test {
	font-family: arial, georgia, verdana, simsun, helvetica, sans-serif;
}
</style>
</head>
<body>
<div class="test">使用字体名称和字体序列名称定义字体。</div>
</body>
</html>

```
