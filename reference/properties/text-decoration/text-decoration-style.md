#text-decoration-style

##语法

- text-decoration-style：solid | double | dotted | dashed | wavy
- 默认值：solid
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定的值


##取值

- solid：实线
- double：双线
- dotted：点状线条
- dashed：虚线
- wavy：波浪线


##说明

检索或设置对象中的文本装饰线条的形状。

- 对应的脚本特性为textDecorationStyle。


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
		<td class="partsupport" rowspan="2">7.1-8.0<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport" rowspan="2">8.0-8.3<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
	</tr>
	<tr>
		<td class="support">36.0+</td>
	</tr>
</tbody>
</table>


- 支持dotted | dashed属性值，但效果都表现为实线。


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
    -webkit-text-decoration-style:solid;
    -moz-text-decoration-style:solid;
    text-decoration-style:solid;
}
.test li:nth-child(2){
    -webkit-text-decoration-style:double;
    -moz-text-decoration-style:double;
    text-decoration-style:double;
}
.test li:nth-child(3){
    -webkit-text-decoration-style:dotted;
    -moz-text-decoration-style:dotted;
    text-decoration-style:dotted;
}
.test li:nth-child(4){
    -webkit-text-decoration-style:dashed;
    -moz-text-decoration-style:dashed;
    text-decoration-style:dashed;
}
.test li:nth-child(5){
    -webkit-text-decoration-style:wavy;
    -moz-text-decoration-style:wavy;
    text-decoration-style:wavy;
}
</style>
</head>
<body>
<ul class="test">
	<li>文本装饰实线</li>
    <li>文本装饰双线</li>
    <li>文本装饰密虚线</li>
    <li>文本装饰疏虚线</li>
    <li>文本装饰波浪线</li>
</ul>
</body>
</html>

```
