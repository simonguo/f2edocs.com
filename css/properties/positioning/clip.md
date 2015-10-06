#clip

##语法

- clip：auto | &lt;shape&gt;
- &lt;shape&gt;：rect(&lt;number&gt;|auto &lt;number&gt;|auto &lt;number&gt;|auto &lt;number&gt;|auto)
- 默认值：auto
- 适用于：绝对定位元素
- 继承性：无
- 动画性：当值为&lt;shape&gt;时
- 计算值：指定的值
- 媒体：视觉


##取值

- auto：对象无剪切
- rect(&lt;number&gt;|auto &lt;number&gt;|auto &lt;number&gt;|auto &lt;number&gt;|auto)：依据上-右-下-左的顺序提供自对象左上角为(0,0)坐标计算的四个偏移数值，其中任一数值都可用auto替换，即此边不剪切。


##说明

检索或设置对象的可视区域。区域外的部分是透明的。

- 这个属性将被废弃，推荐使用 clip-path 代替，在过渡阶段，仍然会存在一段时间。
- 必须将position的值设为absolute或者fixed，此属性方可使用。
- 对应的脚本特性为clip。


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
		<td><strong>Basic Support</strong> <sup><a href="#support1">#1</a></sup></td>
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
		<td rowspan="2">rect(逗号分隔)</td>
		<td class="unsupport">6.0-7.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
	</tr>
</tbody>
</table>


- Basic Support包含值：auto | rect(空格分隔)


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test {
	position: absolute;
	height: 50px;
	line-height: 50px;
	clip: rect(0 auto 35px 10px);
	background: #eee;
}
</style>
</head>
<body>
<div class="test">看看被剪切后的效果</div>
</body>
</html>

```
