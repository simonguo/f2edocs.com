#rgb

##语法

- RGB(R,G,B)


##取值

- R：红色值。正整数 | 百分数
- G：绿色值。正整数 | 百分数
- B：蓝色值。正整数 | 百分数


##说明

RGB记法。

- 以上三个参数，正整数值的取值范围为：0 - 255。百分数值的取值范围为：0.0% - 100.0%。
- 超出范围的数值将被截至其最接近的取值极限。如：rgb(300,0,0)会被解析为rgb(255,0,0)
- 正整数值255对应百分比数值100%，如：rgb(255,255,255) = rgb(100%,100%,100%) = #FFFFFF = #FFF
- RGB色彩是通过对红(R)、绿(G)、蓝(B)三个颜色通道的变化和它们相互之间的叠加来得到各式各样的颜色的。
- 此RGB色彩模式与#RRGGBB/#RGB(HEX)不同。


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
.foreground { color: rgb(255, 0, 0); }
.background { background-color: rgb(128, 128, 128); }
.percent-color { background-color: rgb(50%, 50%, 50%); }
</style>
</head>
<body>
<ul class="test">
	<li class="foreground">红色的文字</li>
	<li class="background">灰色的背景</li>
	<li class="percent-color">能看到此行背景说明你的浏览器支持RGB记法使用百分数值</li>
</ul>
</body>
</html>

```
