#text-fill-color

##语法

- text-fill-color：&lt;color&gt;
- 默认值：transparent
- 适用于：所有元素
- 继承性：有
- 动画性：是
- 计算值：指定值


##取值

- &lt;color&gt;：指定文字的填充颜色。


##说明

检索或设置对象中的文字填充颜色。

- 若同时设置 &lt;' text-fill-color '&gt; 和 &lt;' color '&gt;，&lt;' text-fill-color '&gt; 定义的颜色将覆盖 &lt;' color '&gt; 属性；
- 通过text-fill-color属性，可以做出一些例如渐变文字和镂空文字的效果。Demo: 渐变文字 镂空文字 See with Webkit
- 对应的脚本特性为textFillColor。


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
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-40.0</td>
		<td class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td class="support">4.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td class="support">4.0-8.3<sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
html,body{
	margin:50px 0;
}
.text-fill-color{
	width:950px;
	margin:0 auto;
	background:-webkit-linear-gradient(top,#eee,#aaa 50%,#333 51%,#000);
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent;
	font:bold 95px/1.231 georgia,sans-serif;
	text-transform:uppercase;
}
</style>
</head>
<body>
<div class="text-fill-color">text-fill-color</div>
</body>
</html>

```
