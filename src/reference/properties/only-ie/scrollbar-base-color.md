#scrollbar-base-color

##语法

- scrollbar-base-color：&lt;color&gt;
- 默认值：transparent
- 适用于：除table系外的所有块级元素
- 继承性：有
- 动画性：是
- 计算值：指定值


##取值

- &lt;color&gt;：指定颜色。


##说明

检索或设置对象滚动条基准颜色。其它界面颜色将据此自动调整。

- 对应的脚本特性为scrollbarBaseColor。


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
.test{scrollbar-base-color:#f00;}
.test2{scrollbar-base-color:#080;}
.test3{scrollbar-base-color:#630;}
</style>
</head>
<body>
<div class="test">自定义滚动条整体的基准色调。你将在IE浏览器下看到滚动条的整体的基准色调为红色</div>
<div class="test2">自定义滚动条整体的基准色调。你将在IE浏览器下看到滚动条的整体的基准色调为绿色</div>
<div class="test3">自定义滚动条整体的基准色调。你将在IE浏览器下看到滚动条的整体的基准色调为棕色</div>
</body>
</html>

```
