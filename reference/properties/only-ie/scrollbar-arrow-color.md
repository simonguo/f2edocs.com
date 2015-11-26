#scrollbar-arrow-color

##语法

- scrollbar-arrow-color：&lt;color&gt;
- 默认值：buttontext
- 适用于：除table系外的所有块级元素
- 继承性：有
- 动画性：是
- 计算值：指定值


##取值

- &lt;color&gt;：指定颜色。


##说明

检索或设置对象滚动条方向箭头的颜色。当滚动条出现但不可用时，此属性失效。

- 对应的脚本特性为scrollbarArrowColor。


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
.test{scrollbar-arrow-color:#f00;}
.test2{scrollbar-arrow-color:#080;}
.test3{scrollbar-arrow-color:#630;}
</style>
</head>
<body>
<div class="test">自定义滚动条方向箭头的外观颜色。你将在IE浏览器下看到滚动条的方向箭头变成红色</div>
<div class="test2">自定义滚动条方向箭头的外观颜色。你将在IE浏览器下看到滚动条的方向箭头变成绿色</div>
<div class="test3">自定义滚动条方向箭头的外观颜色。你将在IE浏览器下看到滚动条的方向箭头变成棕色</div>
</body>
</html>

```
