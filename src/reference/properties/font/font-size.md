#font-size

##语法

- font-size：&lt;absolute-size&gt; | &lt;relative-size&gt; | &lt;length&gt; | &lt;percentage&gt;
- &lt;absolute-size&gt; = xx-small | x-small | small | medium | large | x-large | xx-large
- &lt;relative-size&gt; = smaller | larger
- 默认值：medium
- 适用于：所有元素
- 继承性：有
- 动画性：是
- 计算值：指定值


##取值

- &lt;absolute-size&gt;：根据对象字号进行调节。以 medium 作为基础参照，xx-small相当于medium 3/5 (h6)，x-small: 3/4，small: 8/9 (h5)，medium: 1 (h4)，large: 6/5 (h3)，x-large: 3/2 (h2)，xx-large: 2/1 (h1)，
- &lt;relative-size&gt;：相对于父对像中字号进行相对调节。使用成比例的em单位计算。
- &lt;length&gt;：用长度值指定文字大小。不允许负值。
- &lt;percentage&gt;：用百分比指定文字大小。其百分比取值是基于父对象中字体的尺寸。不允许负值。


##说明

设置或检索对象中的字体尺寸。

- 对应的脚本特性为fontSize。


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
.test p{margin:15px 0;border:1px solid #000;}
.xx-small p{font-size:xx-small;}
.x-small p{font-size:x-small;}
.small p{font-size:small;}
.medium p{font-size:medium;}
.large p{font-size:large;}
.x-large p{font-size:x-large;}
.xx-large p{font-size:xx-large;}
.smaller p{font-size:smaller;}
.larger p{font-size:larger;}
.float p{font-size:20px;}
.percentage{font-size:20px;}
.percentage span{font-size:60%;}
</style>
</head>
<body>
<ul class="test">
	<li class="xx-small">
		<strong>尺寸大小为xx-small：</strong>
		<p>xx-small尺寸的文字。</p>
	</li>
	<li class="x-small">
		<strong>尺寸大小为x-small：</strong>
		<p>x-small尺寸的文字。</p>
	</li>
	<li class="small">
		<strong>尺寸大小为small：</strong>
		<p>small尺寸的文字。</p>
	</li>
	<li class="medium">
		<strong>尺寸大小为medium：</strong>
		<p>medium尺寸的文字。</p>
	</li>
	<li class="large">
		<strong>尺寸大小为large：</strong>
		<p>large尺寸的文字。</p>
	</li>
	<li class="x-large">
		<strong>尺寸大小为x-large：</strong>
		<p>x-large尺寸的文字。</p>
	</li>
	<li class="xx-large">
		<strong>尺寸大小为xx-large：</strong>
		<p>xx-large尺寸的文字。</p>
	</li>
	<li class="samller">
		<strong>尺寸大小为samller：</strong>
		<p>samller尺寸的文字。</p>
	</li>
	<li class="larger">
		<strong>尺寸大小为larger：</strong>
		<p>larger尺寸的文字。</p>
	</li>
	<li class="float">
		<strong>尺寸大小为20px：</strong>
		<p>20px尺寸的文字。</p>
	</li>
	<li class="percentage">
		<strong>尺寸大小为20px：</strong>
		<p>父对象20px尺寸的文字。<span>我的尺寸只是父对象的60%</span></p>
	</li>
</ul>
</body>
</html>

```
