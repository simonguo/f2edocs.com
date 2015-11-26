#justify-content

##语法

- justify-content：flex-start | flex-end | center | space-between | space-around
- 默认值：flex-start
- 适用于：flex容器
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- flex-start：弹性盒子元素将向行起始位置对齐。该行的第一个子元素的主起始位置的边界将与该行的主起始位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐。
- flex-end：弹性盒子元素将向行结束位置对齐。该行的第一个子元素的主结束位置的边界将与该行的主结束位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐。
- center：弹性盒子元素将向行中间位置对齐。该行的子元素将相互对齐并在行中居中对齐，同时第一个元素与行的主起始位置的边距等同与最后一个元素与行的主结束位置的边距（如果剩余空间是负数，则保持两端相等长度的溢出）。
- space-between：弹性盒子元素会平均地分布在行里。如果最左边的剩余空间是负数，或该行只有一个子元素，则该值等效于'flex-start'。在其它情况下，第一个元素的边界与行的主起始位置的边界对齐，同时最后一个元素的边界与行的主结束位置的边距对齐，而剩余的伸缩盒项目则平均分布，并确保两两之间的空白空间相等。
- space-around：弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半。如果最左边的剩余空间是负数，或该行只有一个伸缩盒项目，则该值等效于'center'。在其它情况下，伸缩盒项目则平均分布，并确保两两之间的空白空间相等，同时第一个元素前的空间以及最后一个元素后的空间为其他空白空间的一半。


##说明

设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。

- 当弹性盒里一行上的所有子元素都不能伸缩或已经达到其最大值时，这一属性可协助对多余的空间进行分配。当元素溢出某行时，这一属性同样会在对齐上进行控制。
- 对应的脚本特性为justifyContent。


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
		<td rowspan="3"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-10.0</td>
		<td class="unsupport">2.0-21.0</td>
		<td class="unsupport">4.0-20.0</td>
		<td class="unsupport">6.0</td>
		<td class="support">15.0+<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">6.0-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-19.0</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">11.0+</td>
		<td class="support" rowspan="2">22.0+</td>
		<td class="support">21.0+<sup class="fix">-webkit-</sup></td>
		<td class="support">6.1+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">17.0+</td>
		<td class="support">7.0+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">4.4+</td>
		<td class="support">20.0+<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">29.0+</td>
		<td class="support">9.0+</td>
		<td class="support">9.0+</td>
		<td class="support">28.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font:bold 20px/1.5 georgia,simsun,sans-serif;}
.box{
	display:-webkit-flex;
	display:flex;
	width:400px;height:100px;margin:0;padding:0;border-radius:5px;list-style:none;background-color:#eee;}
.box li{margin:5px;padding:10px;border-radius:5px;background:#aaa;text-align:center;}
#box{
	-webkit-justify-content:flex-start;
	justify-content:flex-start;
}
#box2{
	-webkit-justify-content:flex-end;
	justify-content:flex-end;
}
#box3{
	-webkit-justify-content:center;
	justify-content:center;
}
#box4{
	-webkit-justify-content:space-between;
	justify-content:space-between;
}
#box5{
	-webkit-justify-content:space-around;
	justify-content:space-around;
}
</style>
</head>
<body>
<h1>justify-content示例：</h1>
<h2>justify-content:flex-start</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>justify-content:flex-end</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>justify-content:center</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>justify-content:space-between</h2>
<ul id="box4" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>justify-content:space-around</h2>
<ul id="box5" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>


```
