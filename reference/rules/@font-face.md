#@font-face

##语法

- @font-face {
	font-family: &lt;identifier&gt;;
	src: &lt;fontsrc&gt; [, &lt;fontsrc&gt;]* ;
	&lt;font&gt;;
}
- &lt;fontsrc&gt; = &lt;url&gt; [format(&lt;string&gt;)]


##取值

- &lt;identifier&gt;：字体名称
- &lt;url&gt;：此值指的是你自定义的字体的存放路径，可以是相对路径也可以是绝路径
- &lt;string&gt;：此值指的是你自定义的字体的格式，主要用来帮助浏览器识别，其值主要有以下几种类型：truetype, opentype, embedded-opentype, svg等
- &lt;font&gt;：定义字体相关样式


##说明

设置嵌入HTML文档的字体。

- 需要兼容当前的主流浏览器，需同时使用TureTpe(.ttf)、Web Open Font Format(.woff)、Embedded Open Type(.eot)、SVG(.svg)四种字体格式。
- 嵌入HTML文档的字体是指将OpenType字体（压缩的TrueType字体）文件映射到客户端系统，用来提供HTML文档使用该字体，或取代客户端系统已有的同名字体。即让客户端显示客户端所没有安装的字体。
- .eot(Embedded Open Type)为IE的私有字体格式。Safari3.1开始支持.ttf(TrueType)和.otf(OpenType)。
- 未来.woff(Web Open Font Format)将会取代.ttf(TrueType)和.otf(OpenType)两种字体格式。
- 示例：使用一个全浏览器兼容的自定义字体


**代码如下：**

```css
@font-face {
	font-family: 'diyfont';
	src: url('diyfont.eot'); /* IE9+ */
	src: url('diyfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
		 url('diyfont.woff') format('woff'), /* chrome、firefox */
		 url('diyfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
		 url('diyfont.svg#fontname') format('svg'); /* iOS 4.1- */
}
```

>你需要同时提供4种格式的字体


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
		<td class="support">6.0+</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">3.1+</td>
		<td class="support">15.0+</td>
		<td class="support">3.2+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td>eot</td>
		<td class="support">6.0+</td>
		<td class="unsupport">2.0-38.0</td>
		<td class="unsupport">4.0-43.0</td>
		<td class="unsupport">3.1-8.1</td>
		<td class="unsupport">5.0-28.0</td>
		<td class="unsupport">3.2-8.1</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-40.0</td>
	</tr>
	<tr>
		<td rowspan="2">ttf/otf</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-3.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport">3.2-4.1</td>
		<td class="unsupport">2.1</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="partsupport">9.0+</td>
		<td class="support">3.5+</td>
		<td class="support">4.3+</td>
		<td class="support">2.2+</td>
	</tr>
	<tr>
		<td rowspan="2">woff</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-3.5</td>
		<td class="unsupport">4.0</td>
		<td class="unsupport">3.1-5.0</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport">3.2-4.3</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">3.6+</td>
		<td class="support">5.0+</td>
		<td class="support">5.1+</td>
		<td class="support">5.0+</td>
		<td class="support">4.4+</td>
	</tr>
	<tr>
		<td rowspan="2">svg</td>
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport" rowspan="2">2.0-38.0</td>
		<td class="support">4.0-37.0</td>
		<td class="unsupport">3.1</td>
		<td class="support">15.0-24.0</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="unsupport">2.1-2.3</td>
		<td class="support">18.0-37.0</td>
	</tr>
	<tr>
		<td class="partsupport">38.0-43.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="support">3.2+</td>
		<td class="partsupport">25.0-28.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="support">3.0+</td>
		<td class="partsupport">38.0-43.0 <sup><a href="#support1">#1</a></sup></td>
	</tr>
</tbody>
</table>


- 策略修改为只支持windows vista/xp上的svg fonts


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
@font-face {
	font-family: 'iconfont';
	src: url('http://at.alicdn.com/t/font_1397098551_95441.eot');
	src: url('http://at.alicdn.com/t/font_1397098551_95441.eot?#iefix') format('embedded-opentype'),
	url('http://at.alicdn.com/t/font_1397098552_0142624.woff') format('woff'),
	url('http://at.alicdn.com/t/font_1397098551_8732882.ttf') format('truetype'),
	url('http://at.alicdn.com/t/font_1397098552_0586202.svg#iconfont') format('svg');
}
body {
	font-family: 'iconfont';
	font-style: normal;
	font-size: 32px;
	line-height: 2;
	letter-spacing: .25em;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}
</style>
</head>
<body>
&#13363
&#13364
&#13365
&#13366
&#13367
&#13368
&#13369
&#13370
&#13371
&#13372
&#13373
&#13374
&#13375
&#13376
&#13377
&#13378
&#13379
&#13380
&#13381
&#13382
&#13383
&#13384
&#13385
&#13386
&#13387
&#13388
&#13389
&#13390
&#13391
&#13392
&#13393
&#13394
&#13395
&#13396
&#13397
&#13398
&#13399
&#13400
&#13401
&#13402
&#13403
&#13404
&#13362
&#13367
&#13368
&#13369
&#13370
&#13371
&#13372
&#13373
&#13374
&#13375
&#13376
&#13377
&#13378
&#13387
&#13388
&#13389
&#13390
&#13391
&#13392
&#13393
&#13394
&#13395
&#13396
&#13397
&#13398
&#13399
&#13400
&#13401
&#13402
&#13403
&#13404
&#13405
&#13406
&#13407
&#13408
&#13409
&#13410
&#13411
&#13412
&#13413
&#13414
&#13415
&#13566
&#13567
&#13568
&#13569
&#13570
&#13571
&#58881
&#58882
</body>
</html>

```
