#text-decoration-color

##语法

- text-decoration-color：&lt;color&gt;
- 默认值：采用文本颜色
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：计算后颜色值


##取值

- &lt;color&gt;：指定颜色。


##说明

检索或设置对象中的文本装饰线条的颜色。

- 对应的脚本特性为textDecorationColor。


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
.test li{
    margin-top:10px;
    -webkit-text-decoration-line:underline;
    -moz-text-decoration-line:underline;
    text-decoration-line:underline;
}
.test li:nth-child(1){
    -webkit-text-decoration-color:red;
    -moz-text-decoration-color:red;
    text-decoration-color:red;
}
.test li:nth-child(2){
    -webkit-text-decoration-color:blue;
    -moz-text-decoration-color:blue;
    text-decoration-color:blue;
}
.test li:nth-child(3){
    -webkit-text-decoration-color:yellow;
    -moz-text-decoration-color:yellow;
    text-decoration-color:yellow;
}
</style>
</head>
<body>
<ul class="test">
    <li>红色的文本装饰线</li>
    <li>蓝色的文本装饰线</li>
    <li>黄色的文本装饰线</li>
</ul>
</body>
</html>

```
