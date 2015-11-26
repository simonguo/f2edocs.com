#box-reflect

##语法

- box-reflect：none | &lt;direction&gt; &lt;offset&gt;? &lt;mask-box-image&gt;?
- &lt;direction&gt; = above | below | left | right
- &lt;offset&gt; = &lt;length&gt; | &lt;percentage&gt;
- &lt;mask-box-image&gt; =  none | &lt;url&gt; | &lt;linear-gradient&gt; | &lt;radial-gradient&gt; | &lt;repeating-linear-gradient&gt; | &lt;repeating-radial-gradient&gt;
- 默认值：none
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：无倒影
- above：指定倒影在对象的上边
- below：指定倒影在对象的下边
- left：指定倒影在对象的左边
- right：指定倒影在对象的右边
- &lt;length&gt;：用长度值来定义倒影与对象之间的间隔。可以为负值
- &lt;percentage&gt;：用百分比来定义倒影与对象之间的间隔。可以为负值
- none：无遮罩图像
- &lt;url&gt;：使用绝对或相对地址指定遮罩图像。
- &lt;linear-gradient&gt;：使用线性渐变创建遮罩图像。
- &lt;radial-gradient&gt;：使用径向(放射性)渐变创建遮罩图像。
- &lt;repeating-linear-gradient&gt;：使用重复的线性渐变创建背遮罩像。
- &lt;repeating-radial-gradient&gt;：使用重复的径向(放射性)渐变创建遮罩图像。


##说明

设置或检索对象倒影。

- 假设定义了 &lt;mask-box-image&gt;，&lt;offset&gt;必须指定，否则可以省略
- 对应的脚本特性为boxReflect。


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
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
		<td class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>


- 需要注意的是4.0以前的安卓系统需要使用老式的渐变语法，详见&lt;gradient&gt;下的各种渐变支持数据。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
html,body{
	margin:50px 0;
}
.reflect{
	width:950px;
	margin:0 auto;
	-webkit-box-reflect:below 0 -webkit-linear-gradient(transparent,transparent 50%,rgba(255,255,255,.3));
	font:bold 100px/1.231 georgia,sans-serif;
	text-transform:uppercase;
}
</style>
</head>
<body>
<div class="reflect">你看到倒影了么？</div>
</body>
</html>

```
