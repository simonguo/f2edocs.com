#writing-mode

##语法

- writing-mode：horizontal-tb | vertical-rl | vertical-lr | lr-tb | tb-rl
- 默认值：normal
- 适用于：除 &lt;' display '&gt; 属性定义为table-row-group | table-column-group | table-row | table-column之外的所有元素
- 继承性：有
- 动画性：否
- 计算值：特定值


##取值

- horizontal-tb：水平方向自上而下的书写方式。即 left-right-top-bottom（类似IE私有值lr-tb）
- vertical-rl：垂直方向自右而左的书写方式。即 top-bottom-right-left（类似IE私有值tb-rl）
- vertical-lr：垂直方向自左而右的书写方式。即 top-bottom-left-right
- lr-tb：左-右，上-下。对象中的内容在水平方向上从左向右流入，后一行在前一行的下面。 所有的字形都是竖直向上的。这种布局是罗马语系使用的（IE）
- tb-rl：上-下，右-左。对象中的内容在垂直方向上从上向下流入，自右向左。后一竖行在前一竖行的左面。全角字符是竖直向上的，半角字符如拉丁字母或片假名顺时针旋转90度。这种布局是东亚语系通常使用的（IE）


##说明

设置或检索对象的内容块固有的书写方向。西方语言一般都是 lr-tb 的书写方式，但是亚洲语言 lr-tb | tb-rl 的书写方式都有。

- 作为IE的私有属性之一，IE5.5率先实现了 writing-mode ，后期被w3c采纳成标准属性；
- 此属性效果不能被累加使用。例如，父对象的此属性值设为 tb-rl ，子对象再设置该属性将不起作用，仍应用父对象的设置。
- 对应的脚本特性为writingMode。


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
		<td rowspan="2"><strong>Basic Support</strong></td>
		<td class="support" rowspan="2">6.0-11.0<sup><a href="#support1">#1</a> <a href="#support2">#2</a></sup></td>
		<td class="unsupport" rowspan="2">2.0-37.0</td>
		<td class="unsupport">4.0-27.0</td>
		<td class="support" rowspan="2">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">15.0-27.0<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">6.0-8.3<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">2.1-3.0</td>
		<td class="unsupport">18.0-26.0</td>
	</tr>
	<tr>
		<td class="support">28.0-41.0<sup class="fix">-webkit-</sup></td>
		<td class="support">4.0-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">27.0-40.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>


- 不支持标准属性：horizontal-tb | vertical-rl | vertical-lr
- 支持自带的私有属性值：lr-tb | tb-rl


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{width:100px;height:100px;margin:10px;border:1px solid #aaa;}
.lr-tb{-webkit-writing-mode:horizontal-tb;writing-mode:lr-tb;writing-mode:horizontal-tb;}
.tb-rl{-webkit-writing-mode:vertical-rl;writing-mode:tb-rl;writing-mode:vertical-rl;}
.tb-lr{-webkit-writing-mode:vertical-lr;writing-mode:tb-rl;writing-mode:vertical-lr;}
</style>
</head>
<body>
<div class="test lr-tb">本段文字将按照水平从左到右的书写方向进行流动。</div>
<div class="test tb-rl">本段文字将按照垂直从右到左的书写方向进行流动。</div>
<div class="test tb-lr">本段文字将按照垂直从左到右的书写方向进行流动。</div>
<ul class="tb-rl">
	<li class="test">本段文字将按照垂直从右到左的书写方向进行流动。</li>
	<li class="test">本段文字将按照垂直从右到左的书写方向进行流动。</li>
</ul>
<ul class="tb-lr">
	<li class="test">本段文字将按照垂直从左到右的书写方向进行流动。</li>
	<li class="test">本段文字将按照垂直从左到右的书写方向进行流动。</li>
</ul>
</body>
</html>

```
