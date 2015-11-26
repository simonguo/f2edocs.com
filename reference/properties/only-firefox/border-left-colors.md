#border-left-colors

##语法

- border-left-colors：&lt;color&gt;{1,}
- 相关属性：&lt;' border-top-colors '&gt; || &lt;' border-right-colors '&gt; || &lt;' border-bottom-colors '&gt;
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;color&gt;：指定颜色。


##说明

设置或检索对象左边边框的多重颜色。

- border的width为(n)px，那么最多可以设置n组边框色，每组边框色宽度为1px；如果border的width为10px，却只设置了6组边框色，那么最后一组边框色将自动渲染剩余的宽度
- 对应的脚本特性为borderLeftColors。


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
		<td class="support">2.0-40.0<sup class="fix">-moz-</sup></td>
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
.test{padding:10px;border-left-width:5px;border-left-style:solid;-moz-border-left-colors:#000 #fff #050 #fff #f00;}
</style>
</head>
<body>
<div class="test">左边多组边框色效果</div>
</body>
</html>

```
