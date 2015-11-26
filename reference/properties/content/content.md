#content

##语法

- content：[ [&lt;uri&gt; | icon] ',' ]* [ normal | none | inhibit | &lt;content-list&gt; ]
- &lt;content-list&gt; = [ pending(&lt;identifier&gt;) | &lt;string&gt; | contents | footnote | endnote | section-note | list-item | &lt;counter&gt; | &lt;named-string&gt; | open-quote | close-quote | no-open-quote | no-close-quote | icon | &lt;glyph&gt; | &lt;uri&gt; | &lt;datetime&gt; | document-url | &lt;target&gt; ]+
- &lt;counter&gt; = counter(name) | counter(name,list-style-type) | counters(name,string) | counters(name,string,list-style-type)
- 默认值：normal
- 适用于：所有元素，::before, ::after, ::alternate, ::marker, ::line-marker, margin areas, @footnote areas
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- normal：默认值。表现与none值相同
- none：不生成任何值。
- &lt;attr&gt;：插入标签属性值
- &lt;url&gt;：使用指定的绝对或相对地址插入一个外部资源（图像，声频，视频或浏览器支持的其他任何资源）
- &lt;string&gt;：插入字符串
- counter(name)：使用已命名的计数器
- counter(name,list-style-type)：使用已命名的计数器并遵从指定的list-style-type属性
- counters(name,string)：使用所有已命名的计数器
- counters(name,string,list-style-type)：使用所有已命名的计数器并遵从指定的list-style-type属性
- no-close-quote：并不插入quotes属性的后标记。但增加其嵌套级别
- no-open-quote：并不插入quotes属性的前标记。但减少其嵌套级别
- close-quote：插入quotes属性的后标记
- open-quote：插入quotes属性的前标记


##说明

用来和:after及:before伪元素一起使用，在对象前或后显示内容。

- 对应的脚本特性为content。


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
		<td rowspan="2"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-7.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.string p:after{margin-left:-16px;background:#fff;content:"是";color:#f00;}
.attr p:after{content:attr(title);}
.url p:before{content:url(../../skin/ico.png);}
.test ol{margin:16px 0;padding:0;list-style:none;}
.counter1 li{counter-increment:testname;}
.counter1 li:before{content:counter(testname);color:#f00;font-family:georgia,serif,sans-serif;}
.counter2 li{counter-increment:testname2;}
.counter2 li:before{content:counter(testname2,lower-roman);color:#f00;font-family:georgia,serif,sans-serif;}
.counter3 ol ol{margin:0 0 0 28px;}
.counter3 li{padding:2px 0;counter-increment:testname3;}
.counter3 li:before{content:counter(testname3,decimal)".";color:#f00;font-family:georgia,serif,sans-serif;}
.counter3 li li{counter-increment:testname4;}
.counter3 li li:before{content:counter(testname3,decimal)"."counter(testname4,decimal)".";}
.counter3 li li li{counter-increment:testname5;}
.counter3 li li li:before{content:counter(testname3,decimal)"."counter(testname4,decimal)"."counter(testname5,decimal)".";}
</style>
</head>
<body>
<ul class="test">
	<li class="string">
		<strong>string：</strong>
		<p>你的浏览器是否支持content属性：否</p>
	</li>
	<li class="attr">
		<strong>attr：</strong>
		<p title="如果你看到我则说明你目前使用的浏览器支持content属性"></p>
	</li>
	<li class="url">
		<strong>url()：</strong>
		<p>如果你看到文字前面的图标则说明你目前使用的浏览器支持content属性</p>
	</li>
	<li class="counter1">
		<strong>counter(name)：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter2">
		<strong>counter(name,list-style-type)：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter3">
		<strong>counter(name)拓展应用：</strong>
		<ol>
			<li>列表项
				<ol>
					<li>列表项
						<ol>
							<li>列表项</li>
							<li>列表项</li>
						</ol>
					</li>
					<li>列表项</li>
				</ol>
			</li>
			<li>列表项
				<ol>
					<li>列表项</li>
					<li>列表项</li>
				</ol>
			</li>
			<li>列表项
				<ol>
					<li>列表项</li>
					<li>列表项</li>
				</ol>
			</li>
		</ol>
	</li>
</ul>
</body>
</html>

```
