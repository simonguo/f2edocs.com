#border-width

##语法

- border-width：&lt;line-width&gt;{1,4}
- &lt;line-width&gt; = &lt;length&gt; | thin | medium | thick
- 默认值：看每个独立属性
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：看每个独立属性
- 相关属性：[ border-top-width ] || [ border-right-width ] || [ border-bottom-width ] || [ border-left-width ]


##取值

- &lt;length&gt;：用长度值来定义边框的厚度。不允许负值
- medium：定义默认厚度的边框。计算值为3px
- thin：定义比默认厚度细的边框。计算值为1px
- thick：定义比默认厚度粗的边框。计算值为5px


##说明

设置或检索对象的边框宽度。

- 如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。
- 如果只提供一个，将用于全部的四边。
- 如果提供两个，第一个用于上、下，第二个用于左、右。
- 如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。
- 如果border-style设置为none或hidden，border-width的使用值将为0。
- 对应的脚本特性为borderWidth。


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
.test{padding:10px;border-width:1px;border-style:solid;border-color:#000;}
.test2{margin-top:10px;padding:10px;border-width:1px 5px;border-style:solid;border-color:#000 #f00;}
.test3{margin-top:10px;padding:10px;border-width:1px 5px 10px;border-style:solid;border-color:#000 #f00 #090;}
.test4{margin-top:10px;padding:10px;border-width:1px 5px 10px 15px;border-style:solid;border-color:#000 #f00 #090 #0ff;}
</style>
</head>
<body>
<div class="test">提供1个参数</div>
<div class="test2">提供2个参数</div>
<div class="test3">提供3个参数</div>
<div class="test4">提供4个参数</div>
</body>
</html>

```
