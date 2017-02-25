#list-style

##语法

- list-style：&lt;' list-style-type '&gt; || &lt;' list-style-position '&gt; || &lt;' list-style-image '&gt;
- 默认值：看独立属性自身
- 适用于：所有 &lt;' display '&gt; 设置为list-item的元素
- 继承性：有
- 动画性：否
- 计算值：看独立属性自身


##取值

- &lt;' list-style-type '&gt;：设置或检索对象的列表项所使用的预设标记
- &lt;' list-style-position '&gt;：设置或检索作为对象的列表项标记如何根据文本排列
- &lt;' list-style-image '&gt;：设置或检索作为对象的列表项标记的图像


##说明

复合属性。设置列表项目相关内容

- 需要注意的是，如果使用 &lt;' list-style '&gt; 复合属性，&lt;' list-style-image '&gt; 属性必须放在最后，否则部分浏览器（包括所有的webkit/blink内核浏览器）将会解析出错。
- 对应的脚本特性为listStyle。


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
.test{list-style:upper-alpha outside none;}
</style>
</head>
<body>
<ul class="test">
	<li class="colorname">列表项一</li>
	<li class="colorname">列表项一</li>
	<li class="colorname">列表项一</li>
	<li class="colorname">列表项一</li>
</ul>
</body>
</html>

```
