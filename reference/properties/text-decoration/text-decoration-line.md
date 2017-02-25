#text-decoration-line

##语法

- text-decoration-line：none | [ underline || overline || line-through || blink ]
- 默认值：none
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定的值


##取值

- none：指定文字无装饰
- underline：指定文字的装饰是下划线
- overline：指定文字的装饰是上划线
- line-through：指定文字的装饰是贯穿线
- blink：指定文字的装饰是闪烁。


##说明

检索或设置对象中的文本装饰线条的位置。

- 相当于CSS2.1的 &lt;' text-decoration '&gt; 属性
- 需要注意的是大部分浏览器都不支持blink值，因为规范允许用户代理忽略该效果；
- 对应的脚本特性为textDecorationLine。


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
		<td rowspan="3"><strong>Basic Support</strong></td>
		<td class="unsupport" rowspan="3">6.0-11.0</td>
		<td class="unsupport">2.0-5.0</td>
		<td class="unsupport" rowspan="3">4.0-45.0</td>
		<td class="unsupport">6.0-7.0</td>
		<td class="unsupport" rowspan="3">15.0-29.0</td>
		<td class="unsupport">6.0-7.1</td>
		<td class="unsupport" rowspan="3">2.1-4.4.4</td>
		<td class="unsupport" rowspan="3">18.0-42.0</td>
	</tr>
	<tr>
		<td class="support">6.0-35.0<sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="2">7.1-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">8.0-8.3<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">36.0+</td>
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
.test li:nth-child(1){
	-webkit-text-decoration-line:none;
    -moz-text-decoration-line:none;
    text-decoration-line:none;
}
.test li:nth-child(2){
    -webkit-text-decoration-line:underline;
    -moz-text-decoration-line:underline;
    text-decoration-line:underline;
}
.test li:nth-child(3){
    -webkit-text-decoration-line:overline;
    -moz-text-decoration-line:overline;
    text-decoration-line:overline;
}
.test li:nth-child(4){
    -webkit-text-decoration-line:line-through;
    -moz-text-decoration-line:line-through;
    text-decoration-line:line-through;
}
.test li:nth-child(5){
    -webkit-text-decoration-line:blink;
    -moz-text-decoration-line:blink;
    text-decoration-line:blink;
}
</style>
</head>
<body>
<ul class="test">
    <li>没有文本装饰</li>
    <li>文本带有下划线装饰</li>
    <li>文本带有上划线装饰</li>
    <li>文本带有贯穿线装饰</li>
    <li>文本带有闪烁装饰</li>
</ul>
</body>
</html>

```
