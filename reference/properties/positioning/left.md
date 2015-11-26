#left

##语法

- left: auto | &lt;length&gt; | &lt;percentage&gt;
- 默认值：auto
- 适用于：定位元素。即定义了 &lt;' position '&gt; 为「非static」的元素
- 继承性：无
- 动画性：当值为&lt;length&gt; | &lt;percentage&gt;时
- 计算值：当position为static时，计算值是auto。
				为relative时，如果right和left都是auto，则它们的计算值是0；如果right和left其中一个为auto，则auto相当于另一个的负值，即left = -right；如果right和left的值都不为auto，则忽略right。
				否则在其它情况下，当指定值为&lt;length&gt;时，计算值为指定值，当指定值为&lt;percentage&gt;时，计算值为计算后的绝对值。除去这些情况，都为auto
- 媒体：视觉


##取值

- auto：无特殊定位，根据HTML定位规则在文档流中分配
- &lt;length&gt;：用长度值来定义距离左边的偏移量。可以为负值。
- &lt;percentage&gt;：用百分比来定义距离左边的偏移量。百分比参照包含块的宽度。可以为负值。


##说明

检索或设置对象参照相对物左边界向右偏移位置。

- 该属性用来指定盒子参照相对物左边界向右偏移。相对定位元素的相对物是自身，绝对定位和居中定位元素是从包含块的padding边界开始计算偏移值
- 对应的脚本特性为left。


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


- 在IE6及以前的版本下，如果right和left都定义了非auto的值，那么 right 的计算值将会被设置为 -left （无论是否显式的定义了 width 或 max-width），它的指定值将被忽略，说白了，你将无法在不指定某个元素宽度的情况，通过给元素指定right和left的方式来进行宽度拉伸；


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test {
	position: absolute;
	left: -50px;
	width: 200px;
	height: 200px;
	padding: 5px 10px;
	background: #c00;
	color: #fff;
	line-height: 12;
}
</style>
</head>
<body>
<div class="test">我将出现在浏览器左上角</div>
</body>
</html>

```
