#text-shadow

##语法

- text-shadow：none | &lt;shadow&gt; [ , &lt;shadow&gt; ]*
- &lt;shadow&gt; = &lt;length&gt;{2,3} && &lt;color&gt;?
- 默认值：none
- 适用于：所有元素
- 继承性：有
- 动画性：是
- 计算值：1个颜色加3个绝对长度


##取值

- none：无阴影
- &lt;length&gt;①：第1个长度值用来设置对象的阴影水平偏移值。可以为负值
- &lt;length&gt;②：第2个长度值用来设置对象的阴影垂直偏移值。可以为负值
- &lt;length&gt;③：如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值
- &lt;color&gt;：设置对象的阴影的颜色。


##说明

设置或检索对象中文本的文字是否有阴影及模糊效果。

- 可以设定多组效果，每组参数值以逗号分隔。多组阴影特殊效果，Demo: 火焰文字 霓虹文字
- 对应的脚本特性为textShadow。


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
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">2.0-3.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">10.0+</td>
		<td class="support">3.5+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test li{margin-top:10px;}
.test .mormal p{text-shadow:1px 1px rgba(0,0,0,.3);}
.test .blur p{text-shadow:1px 1px 1px rgba(0,0,0,.3);}
.test .group p{text-shadow:1px 1px 0 rgba(255,255,255,1),1px 1px 2px rgba(0,85,0,.8);}
</style>
</head>
<body>
<ul class="test">
	<li class="mormal">
		<strong>普通文字阴影</strong>
		<p>测试普通文字阴影效果</p>
	</li>
	<li class="blur">
		<strong>模糊文字阴影效果</strong>
		<p>测试模糊文字阴影效果</p>
	</li>
	<li class="group">
		<strong>多重模糊文字阴影效果</strong>
		<p>测试多重模糊文字阴影效果</p>
	</li>
</ul>
</body>
</html>

```
