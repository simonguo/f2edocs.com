#list-style-image

##语法

- list-style-image：none | &lt;url&gt;
- 默认值：none
- 适用于：所有 &lt;' display '&gt; 设置为list-item的元素
- 继承性：有
- 动画性：否
- 计算值：图像计算值或none


##取值

- none：不指定图像，默认内容标记将被 &lt;' list-style-type '&gt; 代替。
- &lt;url&gt;：使用绝对或相对地址指定列表项标记图像。如果图像地址无效，默认内容标记将被 &lt;' list-style-type '&gt; 代替。


##说明

设置或检索作为对象的列表项标记的图像。

- 若 &lt;' list-style-image '&gt; 属性为none或指定图像不可用时，&lt;' list-style-type '&gt; 属性将发生作用。
- 对应的脚本特性为listStyleImage。


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
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{list-style-image:url(skin/ico.png);}
</style>
</head>
<body>
<h1>用list-style-image重置项目符号：</h1>
<ul class="test">
	<li>列表项一</li>
	<li>列表项一</li>
	<li>列表项一</li>
	<li>列表项一</li>
</ul>
</body>
</html>

```
