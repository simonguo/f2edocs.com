#direction

##语法

- direction：ltr | rtl
- 默认值：ltr
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：特定值


##取值

- ltr：文本流从左到右。
- rtl：文本流从右到左。


##说明

检索或设置文本流的方向。

- 当指定一个内联元素的 &lt;' unicode-bidi '&gt; 属性为normal时， &lt;' direction '&gt; 属性设置不影响bidi重排序，即其设置不生效。
- 对应的脚本特性为direction。


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
