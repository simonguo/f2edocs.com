#text-indent

##语法

- text-indent：[ &lt;length&gt; | &lt;percentage&gt; ] && hanging<i class='fa fa-css3'></i>? && each-line<i class='fa fa-css3'></i>?
- 默认值：0
- 适用于：块容器
- 继承性：有
- 动画性：当使用值为非关键字时
- 计算值：指定值


##取值

- &lt;length&gt;：用长度值指定文本的缩进。可以为负值。
- &lt;percentage&gt;：用百分比指定文本的缩进。可以为负值。
- each-line：定义缩进作用在块容器的第一行或者内部的每个强制换行的首行，软换行不受影响。（CSS3）
- hanging：反向所有被缩进作用的行。（CSS3）


##说明

检索或设置对象中的文本的缩进。

- 内联对象要使用该属性必须先使该对象表现为块级或内联块级。
- hanging和each-line关键字紧随在缩进数值之后

**示例代码：**

```css
div{text-indent:2em each-line;}
```

>以上代码将使得div内部的第一行及每个强制换行的首行都拥有2em的缩进

- 对应的脚本特性为textIndent。


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
	<tr>
		<td class="g-color-css3-new">hanging | each-line</td>
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-37.0</td>
		<td class="unsupport">4.0-41.0</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">15.0-27.0</td>
		<td class="unsupport">6.0-8.3</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-40.0</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test p{border:1px solid #000;}
.inline span{text-indent:30px;}
.inline-block span{display:inline-block;text-indent:30px;}
.block span{display:block;text-indent:30px;}
.other{text-indent:30px;}
.other ins{display:inline-block;background:#eee;}
</style>
</head>
<body>
<ul class="test">
	<li class="inline">
		<strong>内联元素span</strong>
		<p><span>看看我的左边有没有30px的缩进　span{text-indent:30px;}</span></p>
	</li>
	<li class="inline-block">
		<strong>被设置为内联块级元素的span</strong>
		<p><span>看看我的左边有没有30px的缩进　span{display:inline-block;text-indent:30px;}</span></p>
	</li>
	<li class="block">
		<strong>被设置为块级元素的span</strong>
		<p><span>看看我的左边有没有30px的缩进　span{display:block;text-indent:30px;}</span></p>
	</li>
	<li class="other">
		<strong>包含有内联块的块级元素</strong>
		<p><span>看看我的左边有没有30px的缩进</span><ins>我是一个被插入的内联块元素</ins>.other{text-indent:30px;}</p>
	</li>
</ul>
</body>
</html>

```
