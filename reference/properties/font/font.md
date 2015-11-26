#font

##语法

- font：[ [ &lt;' font-style '&gt; || &lt;' font-variant '&gt; || &lt;' font-weight '&gt; ]? &lt;' font-size '&gt; [ / &lt;' line-height '&gt; ]? &lt;' font-family '&gt; ] | caption | icon | menu | message-box | small-caption | status-bar
- 默认值：看独立属性自身
- 适用于：所有元素
- 继承性：有
- 动画性：看独立属性自身
- 计算值：看独立属性自身


##取值

- &lt;' font-style '&gt;：指定文本字体样式
- &lt;' font-variant '&gt;：指定文本是否为小型的大写字母
- &lt;' font-weight '&gt;：指定文本字体的粗细
- &lt;' font-size '&gt;：指定文本字体尺寸
- &lt;' line-height '&gt;：指定文本字体的行高
- &lt;' font-family '&gt;：指定文本使用某个字体或字体序列
- caption：使用有标题的系统控件的文本字体（如按钮，菜单等）（CSS2）
- icon：使用图标标签的字体（CSS2）
- menu：使用菜单的字体（CSS2）
- message-box：使用信息对话框的文本字体（CSS2）
- small-caption：使用小控件的字体（CSS2）
- status-bar：使用窗口状态栏的字体（CSS2）


##说明

设置或检索对象中的文本特性。该属性是复合属性。

- 使用第一种声明方式参数必须按照如上的排列顺序，且 &lt;' font-size '&gt; 和 &lt;' font-family '&gt; 是不可忽略的。每个参数仅允许有一个值。忽略的将使用其参数对应的独立属性的默认值。
- 对于如何使用客户端系统没有字体和自定义字体，可以参阅@font-face规则。
- 对应的脚本特性为font。


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
.test p{margin:15px 0;border:1px solid #000;}
.font1 p{font:18px Simsun,arial,sans-serif;}
.font2 p{font:italic 18px Simsun,arial,sans-serif;}
.font3 p{font:italic small-caps 18px Simsun,arial,sans-serif;}
.font4 p{font:italic small-caps bold 18px Simsun,arial,sans-serif;}
.font5 p{font:italic small-caps bold 18px/2 Simsun,arial,sans-serif;}
.caption p{font:caption;}
.icon p{font:icon;}
.menu p{font:menu;}
.message-box p{font:message-box;}
.small-caption p{font:small-caption;}
.status-bar p{font:status-bar;}
</style>
</head>
<body>
<ul class="test">
	<li class="font1">
		<strong>只指定字体大小和字体：</strong>
		<p>本段文字将显示为18px宋体。</p>
	</li>
	<li class="font2">
		<strong>只指定字体样式、大小和字体：</strong>
		<p>本段文字将显示为斜体的18px宋体。</p>
	</li>
	<li class="font3">
		<strong>只指定字体样式、小型大写字母、大小和字体：</strong>
		<p>本段文字将显示为斜体的带小型大写字母的18px宋体。大小型大写字母对比：AaBbCcDdEeFfGg</p>
	</li>
	<li class="font4">
		<strong>只指定字体样式、小型大写字母、粗细、大小和字体：</strong>
		<p>本段文字将显示为斜体的带小型大写字母的加粗18px宋体。</p>
	</li>
	<li class="font5">
		<strong>只指定字体样式、小型大写字母、粗细、大小、行高和字体：</strong>
		<p>本段文字将显示为行高为2的斜体的带小型大写字母的加粗18px宋体。</p>
	</li>
	<li class="caption">
		<strong>指定字体为caption：</strong>
		<p>本段文字将以caption的字体显示。</p>
	</li>
	<li class="icon">
		<strong>指定字体为icon：</strong>
		<p>本段文字将以icon的字体显示。</p>
	</li>
	<li class="menu">
		<strong>指定字体为menu：</strong>
		<p>本段文字将以menu的字体显示。</p>
	</li>
	<li class="message-box">
		<strong>指定字体为message-box：</strong>
		<p>本段文字将以message-box的字体显示。</p>
	</li>
	<li class="small-caption">
		<strong>指定字体为small-caption：</strong>
		<p>本段文字将以small-caption的字体显示。</p>
	</li>
	<li class="status-bar">
		<strong>指定字体为status-bar：</strong>
		<p>本段文字将以status-bar的字体显示。</p>
	</li>
</ul>
</body>
</html>

```
