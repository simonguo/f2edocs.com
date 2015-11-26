#nav-left

##语法

- nav-left：auto | &lt;id&gt; [ current | root | &lt;target-name&gt; ]?
- 默认值：auto
- 适用于：所有 enabled 的元素
- 继承性：无
- 动画性：否
- 计算值：指定值
- 相关属性: &lt;' nav-index '&gt; || &lt;' nav-up '&gt; || &lt;' nav-right '&gt; || &lt;' nav-down '&gt;


##取值

- auto：默认顺序。
- &lt;id&gt;：被导航元素的id。
- &lt;target-name&gt;：框架目标页面之间的元素焦点导航。


##说明

设置或检索对象的导航方向。

- 只有支持nav-index属性的元素才能参与导航排序。
- 被禁用的元素将不参与导航排序。
- 该属性有被w3c标准移除的风险。
- 对应的脚本特性为navLeft。


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
		<td class="unsupport">4.0-45.0</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">15.0-29.0</td>
		<td class="unsupport">6.0-8.3</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-42.0</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
html,body{margin:0;}
button{position:absolute;}
button#b1{
	top:0;left:50%;
	nav-index:1;
	nav-right:#b2;nav-left:#b4;
	nav-down:#b2;nav-up:#b4;
}
button#b2{
	top:50%;right:0;
	nav-index:2;
	nav-right:#b3;nav-left:#b1;
	nav-down:#b3;nav-up:#b1;
}
button#b3{
	left:50%;bottom:0;
	nav-index:3;
	nav-right:#b4;nav-left:#b2;
	nav-down:#b4;nav-up:#b2;
}
button#b4{
	top:50%;left:0;
	nav-index:4;
	nav-right:#b1;nav-left:#b3;
	nav-down:#b1;nav-up:#b3;
}
</style>
</head>
<body>
<div class="test">
	<button id="b1">button1</button>
	<button id="b2">button2</button>
	<button id="b3">button3</button>
	<button id="b4">button4</button>
</div>
</body>
</html>

```
