#rgba

##语法

- RGBA(R,G,B,A)


##取值

- R：红色值。正整数 | 百分数
- G：绿色值。正整数 | 百分数
- B：蓝色值。正整数 | 百分数
- A：Alpha透明度。取值0~1之间。


##说明

RGBA记法。

- 此色彩模式与RGB相同，只是在RGB模式上新增了Alpha透明度。
- IE6.0-8.0不支持使用 rgba 模式实现透明度，可使用 IE 滤镜处理，如：

扩展知识：
progid:DXImageTransform.Microsoft.Gradient()滤镜里的 startColorstr 参数值是 #AARRGGBB 形式的， 其中的AA是代表不透明度的十六进制，00表示完全透明，FF就是全不透明，化成十进制的范围就是0~255，剩下的 RRGGBB 就是颜色的十六进制代码。

举例如：background: rgba(125, 0, 0, .3); 表示的是30%不透明度的红色背景。把30%的不透明度转换成十六制呢的方法如下：先计算#AA的的十进制x，x/255 = 3/10，解得x=3*255/10，然后再把x换算成十六进制，约等于4C。

常用透明度对应16进制关系：
.0（00） .1（19） .05（0C） .15（26）
.2（33） .3（4C） .25（3F） .35（59）
.4（66） .5（7F） .45（72） .55（8C）
.6（99） .7（B2） .65（A5） .75（BF）
.8（CC） .9（E5） .85（D8） .95（F2）

自动转换：
请输入请输入0-1之间的任意数字：
&nbsp;

**示例代码：**

```css
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr=#88000000, endColorstr=#88000000);
```

>#88000000 的前两位数字控制透明度，取值16进制从00 -&gt; FF（越小越透明），00表示完全透明，FF就是全不透明，后面六位是色值。




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
		<td class="unsupport">6.0-8.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
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
	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr=#80000000,endColorStr=#80000000); /* IE5.5 - IE8 */
	background: rgba(0, 0, 0, .5); /* 其他浏览器 */
	zoom: 1; /* 滤镜需要激活haslayout才能生效 */
}
:root.test {
	filter: none; /* IE9下需要关闭滤镜，否则会与背景色同时生效 */
}
</style>
</head>
<body>
<div class="test">此行的背景色为50%透明度的黑色</div>
</body>
</html>

```
