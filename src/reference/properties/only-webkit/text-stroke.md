#text-stroke

##语法

- text-stroke：&lt;' text-stroke-width '&gt; || &lt;' text-stroke-color '&gt;
- 默认值：看每个独立属性
- 适用于：所有元素
- 继承性：有
- 动画性：看每个独立属性
- 计算值：看每个独立属性


##取值

- &lt;' text-stroke-width '&gt;：设置或检索对象中的文字的描边厚度
- &lt;' text-stroke-color '&gt;：设置或检索对象中的文字的描边颜色


##说明

复合属性。设置或检索对象中的文字的描边。

- 通过text-stroke属性，可以做出描边文字的效果。Demo: 描边文字 See with Webkit
- 对应的脚本特性为textStroke。


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
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-40.0</td>
		<td class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td class="support">4.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td class="support">4.0-8.3<sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
html,body{font:bold 14px/1.5 georgia,simsun,sans-serif;text-align:center;}
.stroke h1{margin:0;padding:10px 0 0;}
.stroke p{
	margin:50px auto 100px;font-size:100px;
	-webkit-text-stroke:1px #f00;
}
.copyright,.info{font-style:italic;}
</style>
</head>
<body>
<div class="stroke">
	<h1>描边的文字：</h1>
	<p>我是被描了1像素红边的文字</p>
</div>
</body>
</html>

```
