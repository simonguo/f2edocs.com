#scrollbar-track-color

##语法

- scrollbar-track-color：&lt;color&gt;
- 默认值：transparent
- 适用于：除table系外的所有块级元素
- 继承性：有
- 动画性：是
- 计算值：指定值


##取值

- &lt;color&gt;：指定颜色。


##说明

检索或设置对象滚动条拖动区域的外观颜色。

- 对应的脚本特性为scrollbarTrackColor。


##兼容性


<table class="compatible">
<thead>
	<tr>
		<th>Values</th>
		<th>IE</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td><strong>Basic Support</strong></td>
		<td class="support">6.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
div{overflow:scroll;width:200px;height:80px;margin-top:20px;}
.test{scrollbar-track-color:#f00;}
.test2{scrollbar-track-color:#080;}
.test3{scrollbar-track-color:#630;}
</style>
</head>
<body>
<div class="test">自定义滚动条拖动区域的外观颜色。你将在IE浏览器下看到滚动条的拖动区域变成红色</div>
<div class="test2">自定义滚动条拖动区域的外观颜色。你将在IE浏览器下看到滚动条的拖动区域变成绿色</div>
<div class="test3">自定义滚动条拖动区域的外观颜色。你将在IE浏览器下看到滚动条的拖动区域变成棕色</div>
</body>
</html>

```
