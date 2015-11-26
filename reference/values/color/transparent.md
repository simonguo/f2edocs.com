#transparent

##语法

- RGBA(R,G,B,A)


##取值

- R：红色值。正整数 | 百分数
- G：绿色值。正整数 | 百分数
- B：蓝色值。正整数 | 百分数
- A：Alpha透明度。取值0~1之间。


##说明

用来指定全透明色彩。

- transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值。
- 在CSS1中，transparent被用来作为background-color的一个参数值，用于表示背景透明。
- 在CSS2中，border-color也开始接受transparent作为参数值，《Open eBook(tm) Publication Structure 1.0.1》[OEB101]延伸到color也接受transparent作为参数值。
- 在CSS3中，transparent被延伸到任何一个有color值的属性上。


##兼容性


<table class="compatible">
<thead>
	<tr>
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
		<td class="partsupport">6.0 <sup><a href="#support1">#1</a> <a href="#support2">#2</a></sup></td>
		<td class="support" rowspan="3">2.0+</td>
		<td class="support" rowspan="3">4.0+</td>
		<td class="support" rowspan="3">3.1+</td>
		<td class="support" rowspan="3">3.5+</td>
		<td class="support" rowspan="3">3.2+</td>
		<td class="support" rowspan="3">2.1+</td>
		<td class="support" rowspan="3">18.0+</td>
	</tr>
	<tr>
		<td class="partsupport">7.0-8.0 <sup><a href="#support2">#2</a></sup></td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
	</tr>
</tbody>
</table>


- border-color 不接受该值，如果使用了该值，则使用 currentColor；
- color 不接受该值，如果使用了该值，则使用 currentColor；


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test {
	color: transparent;
	border: 1px solid transparent;
	background: transparent;
}
</style>
</head>
<body>
<div class="test">看看各带color的属性设置为transparent时的效果</div>
</body>
</html>

```
