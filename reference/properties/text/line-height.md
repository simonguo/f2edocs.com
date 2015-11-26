#line-height

##语法

- line-height：normal | &lt;length&gt; | &lt;percentage&gt; | &lt;number&gt;
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：当值为 &lt;length&gt; | &lt;number&gt; 时
- 计算值：指定值


##取值

- normal：允许内容顶开或溢出指定的容器边界。
- &lt;length&gt;：用长度值指定行高。不允许负值。
- &lt;percentage&gt;：用百分比指定行高，其百分比取值是基于字体的高度尺寸。不允许负值。
- &lt;number&gt;：用乘积因子指定行高。不允许负值。


##说明

检索或设置对象的行高。即字体最底端与字体内部顶端之间的距离。

- 对应的脚本特性为lineHeight。


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
.test div{width:300px;margin:15px 0;border:1px solid #000;}
.test p{margin:0;font-size:30px;}
.fixed div{line-height:20px;}
.percentage div{line-height:130%;}
.gene div{line-height:1.5;}
</style>
</head>
<body>
<ul class="test">
	<li class="fixed">
		<strong>固定数值方式：</strong> - {line-height:20px;}
		<div><p>使用固定数值的方式定义line-height，如设置行高为18px类似这样的固定数值，可能会引发文字重叠的现象。</p></div>
	</li>
	<li class="percentage">
		<strong>百分比方式：</strong> - {line-height:130%;}
		<div>
			如果是这种情况
			<p>使用百分比的方式定义line-height，与使用固定数值方式一样，也可能会引发文字重叠的现象。</p>
		</div>
	</li>
	<li class="gene">
		<strong>因子方式：</strong> - {line-height:1.5;}
		<div>
			如果是这种情况
			<p>使用因子方式定义line-height是非常安全的方式，将可以避免文字重叠的现象。</p>
		</div>
	</li>
</ul>
</body>
</html>

```
