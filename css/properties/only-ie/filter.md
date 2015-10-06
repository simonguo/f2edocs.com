#filter

##语法

- filter：&lt;filter&gt;+
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;filter&gt;：要使用的滤镜效果。多个滤镜之间用空格隔开。


##说明

设置或检索对象所应用的滤镜效果。

- 最常用的滤镜效果是不透明效果，如果要实现50%的不透明度（其它高级浏览器的实现参阅opacity）：


示例代码：

```css
div{filter:alpha(opacity=50);} /* for IE8 and earlier */
div{opacity:.5;} /* for IE9 and other browsers */
```

>以上2段代码的效果相同


- 对应的脚本特性为filter。


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
		<td rowspan="2"><strong>Basic Support</strong></td>
		<td class="support">6.0-9.0</td>
	</tr>
	<tr>
		<td class="unsupport">10.0-11.0</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
body{background:#090;}
div{width:200px;height:80px;margin-top:20px;border:10px solid #000;background:#ddd;}
.test{filter:alpha(opacity=30);}
.test2{filter:blur(strength=50) flipv();}
</style>
</head>
<body>
<div class="test">透明度为30%的box</div>
<div class="test2">模糊和翻转的box</div>
</body>
</html>

```
