#hex

##语法

- #RRGGBB 或 #RGB


##取值

- RR：红色值。十六进制正整数
- GG：绿色值。十六进制正整数
- BB：蓝色值。十六进制正整数


##说明

十六进制记法

- 以上三个参数，取值范围为：00 - FF。
- 参数必须是两位数。对于只有一位的，应在前面补零。
- 如果每个参数各自在两位上的数字都相同，那么本单位也可缩写为 #RGB 的方式。例如：#FF8800 可以缩写为 #F80。
- 此色彩模式与RGB色彩模式不同。


##兼容性


<table class="compatible">
<thead>
	<tr>
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
		<td class="support">6.0+</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">3.1+</td>
		<td class="support">3.5+</td>
		<td class="support">3.2+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.foreground { color: #f00; }
.background { background-color: #808080; }
</style>
</head>
<body>
<ul class="test">
	<li class="foreground">红色的文字</li>
	<li class="background">灰色的背景</li>
</ul>
</body>
</html>

```
