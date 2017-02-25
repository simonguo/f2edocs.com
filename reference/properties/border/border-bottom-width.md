#border-bottom-width

##语法

- border-bottom-width：&lt;line-width&gt;
- &lt;line-width&gt; = &lt;length&gt; | thin | medium | thick
- 默认值：medium
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：绝对长度值，如果border style设置为none或hidden，则计算值为0
- 相关属性：[ border-width ] || [ border-top-width ] || [ border-right-width ] || [ border-left-width ]


##取值

- &lt;length&gt;：用长度值来定义边框的厚度。不允许负值
- medium：定义默认厚度的边框。计算值为3px
- thin：定义比默认厚度细的边框。计算值为1px
- thick：定义比默认厚度粗的边框。计算值为5px


##说明

设置或检索对象的底部边框宽度。

- 对应的脚本特性为borderBottomWidth。


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
	padding: 10px;
	border-bottom-width: 5px;
	border-bottom-style: solid;
	border-bottom-color: #000;
}
</style>
</head>
<body>
<div class="test">设置底部边框宽度为5px</div>
</body>
</html>

```
