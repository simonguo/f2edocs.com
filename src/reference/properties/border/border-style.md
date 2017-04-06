#border-style

##语法

- border-style：&lt;line-style&gt;{1,4}
- &lt;line-style&gt; = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
- 默认值：看每个独立属性
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：看每个独立属性
- 相关属性：[ border-top-style ] || [ border-right-style ] || [ border-bottom-style ] || [ border-left-style ]


##取值

- none：无轮廓。border-color将被忽略，border-width计算值为0，除非边框轮廓为图像，即border-image。
- hidden：隐藏边框。IE7及以下尚不支持
- dotted：点状轮廓。IE6下显示为dashed效果
- dashed：虚线轮廓。
- solid：实线轮廓
- double：双线轮廓。两条单线与其间隔的和等于指定的border-width值
- groove：3D凹槽轮廓。
- ridge：3D凸槽轮廓。
- inset：3D凹边轮廓。
- outset：3D凸边轮廓。


##说明

设置或检索对象的边框样式。

- 如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。
- 如果只提供一个，将用于全部的四边。
- 如果提供两个，第一个用于上、下，第二个用于左、右。
- 如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。
- 如果border-width等于0，本属性将失去作用。
- 对应的脚本特性为borderStyle。


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
		<td class="support" rowspan="5">2.0+</td>
		<td class="support" rowspan="5">4.0+</td>
		<td class="support" rowspan="5">3.1+</td>
		<td class="support" rowspan="5">3.5+</td>
		<td class="support" rowspan="5">3.2+</td>
		<td class="support" rowspan="5">2.1+</td>
		<td class="support" rowspan="5">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">hidden</td>
		<td class="unsupport">6.0-7.0</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
	</tr>
	<tr>
		<td rowspan="2">dotted</td>
		<td class="partsupport">6.0 <sup><a href="#support1">#1</a></sup></td>
	</tr>
	<tr>
		<td class="support">7.0+</td>
	</tr>
</tbody>
</table>


- dotted属性值显示为dashed的效果。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
div{float:left;margin-right:5px;}
.none{padding:10px;border:0 none;background:#eee;}
.hidden{padding:10px;border:3px hidden #000;background:#eee;}
.dotted{padding:10px;border:3px dotted #000;background:#eee;}
.dashed{padding:10px;border:3px dashed #000;background:#eee;}
.solid{padding:10px;border:3px solid #000;background:#eee;}
.double{padding:10px;border:3px double #000;background:#eee;}
.groove{padding:10px;border:3px groove #000;background:#eee;}
.ridge{padding:10px;border:3px ridge #000;background:#eee;}
.inset{padding:10px;border:3px inset #000;background:#eee;}
.outset{padding:10px;border:3px outset #000;background:#eee;}
</style>
</head>
<body>
<div class="none">none</div>
<div class="hidden">hidden</div>
<div class="dotted">dotted</div>
<div class="dashed">dashed</div>
<div class="solid">solid</div>
<div class="double">double</div>
<div class="groove">groove</div>
<div class="ridge">ridge</div>
<div class="inset">inset</div>
<div class="outset">outset</div>
</body>
</html>

```
