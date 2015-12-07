#cursor

##语法

- cursor：[&lt;url&gt; [&lt;x&gt; &lt;y&gt;]?,]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing]
- 默认值：auto
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- &lt;url&gt;：使用绝对或者相对地址引入外部图像作为光标形状
- &lt;url&gt; &lt;x&gt; &lt;y&gt;：通过&lt;x&gt; &lt;y&gt;两个值指定具体需要显示的图像位置。类似 &lt;' background-position '&gt;
- auto：用户代理基于当前上下文决定光标形状
- default：相关平台的默认光标形状，通常为箭头。
- none：没有光标形状


##说明

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

- 使用自定义图像作为光标类型，IE, Opera只支持*.cur等特定的图片格式；Firefox, Chrome, Safari既支持特定图片类型也支持常见的*.png, *.gif, *.jpg等图片格式。
- cursor的属性值可以是一个序列


**示例代码：**

```css
:link,:visited{
	cursor:url(example.svg#linkcursor),
			url(hyper.cur),
			url(hyper.png) 2 3,
			pointer;
}
```

>本例用来给所有的超链接定义光标类型，客户端如果不支持SVG类型的光标，则使用下个"hyper.cur"；如果cur类型也不支持，则使用下个"hyper.png"；依次类推。


- 对应的脚本特性为cursor。


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
		<td class="support">6.0-11.0<sup><a href="#support1">#1</a></sup></td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">6.0+</td>
		<td class="support">15.0+</td>
		<td class="support">6.0+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">none</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
	</tr>
	<tr>
		<td rowspan="2">alias | cell | copy |<br>ew-resize | ns-resize |<br>nesw-resize |<br>nwse-resize |<br>context-menu</td>
		<td class="unsupport">6.0-9.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">10.0+</td>
	</tr>
	<tr>
		<td rowspan="2">zoom-in | zoom-out</td>
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="support">2.0-23.0<sup class="fix">-moz-</sup></td>
		<td class="support">4.0-36.0<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-23.0<sup class="fix">-webkit-</sup></td>
		<td class="unsupport" rowspan="2">6.0-8.3</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-42.0</td>
	</tr>
	<tr>
		<td class="support">24.0+</td>
		<td class="support">37.0+</td>
		<td class="support">24.0+</td>
	</tr>
	<tr>
		<td rowspan="2">grab | grabbing</td>
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="support">2.0-27.0<sup class="fix">-moz-</sup></td>
		<td class="support">4.0-22.0<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport" rowspan="2">6.0-8.3</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-42.0</td>
	</tr>
	<tr>
		<td class="support">28.0+</td>
		<td class="support">23.0+</td>
	</tr>
</tbody>
</table>


- 6.0-8.0不支持：url()的position位置，不支持除.cur之外的图像格式。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{width:400px;border-collapse:collapse;font:14px/1.5 georgia,arial,serif,sans-serif;}
.test td{padding:2px 10px;border:1px solid #ddd;}
.test td:hover{background:#eee;}
.auto{cursor:auto;}
.default{cursor:default;}
.none{cursor:none;}
.context-menu{cursor:context-menu;}
.help{cursor:help;}
.pointer{cursor:pointer;}
.progress{cursor:progress;}
.wait{cursor:wait;}
.cell{cursor:cell;}
.crosshair{cursor:crosshair;}
.text{cursor:text;}
.vertical-text{cursor:vertical-text;}
.alias{cursor:alias;}
.copy{cursor:copy;}
.move{cursor:move;}
.no-drop{cursor:no-drop;}
.not-allowed{cursor:not-allowed;}
.e-resize{cursor:e-resize;}
.n-resize{cursor:n-resize;}
.ne-resize{cursor:ne-resize;}
.nw-resize{cursor:nw-resize;}
.s-resize{cursor:s-resize;}
.se-resize{cursor:se-resize;}
.sw-resize{cursor:sw-resize;}
.w-resize{cursor:w-resize;}
.ew-resize{cursor:ew-resize;}
.ns-resize{cursor:ns-resize;}
.nesw-resize{cursor:nesw-resize;}
.nwse-resize{cursor:nwse-resize;}
.col-resize{cursor:col-resize;}
.row-resize{cursor:row-resize;}
.all-scroll{cursor:all-scroll;}
.zoom-in{cursor:zoom-in;}
.zoom-out{cursor:zoom-out;}
.url{cursor:url(skin/cursor.gif),
			url(skin/cursor.png),
			url(skin/cursor.jpg),
			pointer;}
</style>
</head>
<body>
<table class="test">
	<caption>cursor光标类型</caption>
	<tbody>
		<tr>
			<td class="auto">auto</td>
			<td class="default">default</td>
			<td class="none">none</td>
			<td class="context-menu">context-menu</td>
			<td class="help">help</td>
			<td class="pointer">pointer</td>
			<td class="progress">progress</td>
		</tr>
		<tr>
			<td class="wait">wait</td>
			<td class="cell">cell</td>
			<td class="crosshair">crosshair</td>
			<td class="text">text</td>
			<td class="vertical-text">vertical-text</td>
			<td class="alias">alias</td>
			<td class="copy">copy</td>
		</tr>
		<tr>
			<td class="move">move</td>
			<td class="no-drop">no-drop</td>
			<td class="not-allowed">not-allowed</td>
			<td class="e-resize">e-resize</td>
			<td class="n-resize">n-resize</td>
			<td class="ne-resize">ne-resize</td>
			<td class="nw-resize">nw-resize</td>
		</tr>
		<tr>
			<td class="s-resize">s-resize</td>
			<td class="se-resize">se-resize</td>
			<td class="sw-resize">sw-resize</td>
			<td class="w-resize">w-resize</td>
			<td class="ew-resize">ew-resize</td>
			<td class="ns-resize">ns-resize</td>
			<td class="nesw-resize">nesw-resize</td>
		</tr>
		<tr>
			<td class="nwse-resize">nwse-resize</td>
			<td class="col-resize">col-resize</td>
			<td class="row-resize">row-resize</td>
			<td class="all-scroll">all-scroll</td>
			<td class="url">url</td>
			<td class="zoom-in">zoom-in</td>
			<td class="zoom-out">zoom-out</td>
		</tr>
	</tbody>
</table>
</table>
</body>
</html>

```
