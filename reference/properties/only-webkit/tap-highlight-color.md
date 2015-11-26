#tap-highlight-color

##语法

- tap-highlight-color：&lt;color&gt;
- 默认值：由user agent决定
- 适用于：所有元素
- 继承性：有
- 动画性：是
- 计算值：指定值


##取值

- &lt;color&gt;：指定颜色。


##说明

设置或检索对象的轻按时高亮。

- 当用户轻按一个链接或者JavaScript可点击元素时给元素覆盖一个高亮色
- 如果想取消这个高亮，将值设置为全透明即可，比如transparent
- 对应的脚本特性为textHighlightColor。


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
		<td class="support">6.0-8.3 <sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4 <sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-42.0 <sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test {
    display: block;
    margin: 5px;
    padding: 10px;
    border: 1px solid #aaa;
    -webkit-user-select: none;
}
.demo1 {
    -webkit-tap-highlight-color: red;
}
.demo2 {
    -webkit-tap-highlight-color: red;
}
</style>
</head>
<body>
    <a href="#" class="test demo1">请在移动设备上查看本例</a>
    <label class="test demo2"><input type="checkbox">请在移动设备上查看本例</label>
</body>
</html>

```
