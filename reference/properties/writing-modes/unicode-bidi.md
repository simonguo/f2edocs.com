#unicode-bidi

##语法

- unicode-bidi：normal | embed | bidi-override | isolate<i class='fa fa-css3'></i> | isolate-override<i class='fa fa-css3'></i> | plaintext<i class='fa fa-css3'></i>
- 默认值：normal
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：特定值


##取值

- normal：对象不打开附加的嵌入层，对于内联元素，隐式重排序跨对象边界进行工作。
- embed：对象打开附加的嵌入层，&lt;' direction '&gt; 属性的值指定嵌入层，在对象内部进行隐式重排序。
- bidi-override：严格按照 &lt;' direction '&gt; 属性的值重排序。忽略隐式双向运算规则。


##说明

用于同一个页面里存在从不同方向读进的文本显示。与 &lt;' direction '&gt; 属性一起使用

- 对应的脚本特性为unicodeBidi。


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
.test p{width:320px;margin:15px 0;border:1px solid #000;}
.ltr p{direction:ltr;}
.rtl p{direction:rtl;unicode-bidi:bidi-override;}
</style>
</head>
<body>
<ul class="test">
	<li class="ltr">
		<strong>ltr：</strong>
		<p>本段文字将按照从左到右的方向进行流动。</p>
	</li>
	<li class="rtl">
		<strong>rtl：</strong>
		<p>本段文字将按照从右到左的方向进行流动。</p>
	</li>
</ul>
</body>
</html>

```
