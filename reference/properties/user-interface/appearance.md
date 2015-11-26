#appearance

##语法

- appearance：none | button | button-bevel ...
- 默认值：none
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：去除系统默认appearance的样式
- button：以按钮的风格渲染
- button-arrow-down：以复选框的风格渲染
- button-arrow-next：以列表框的风格渲染
- button-arrow-previous：以列表项的风格渲染
- button-arrow-up：以进度条的风格渲染
- button-bevel：以垂直进度条的风格渲染
- button-focus：以进度块的风格渲染
- caps-lock-indicator：以垂直进度块的风格渲染
- caret：以单选框的风格渲染
- checkbox：以滚动条按钮-上的风格渲染
- checkbox-container：以滚动条按钮-右的风格渲染
- checkbox-label：以滚动条按钮-下的风格渲染
- checkmenuitem：以滚动条按钮-左的风格渲染
- default-button：以水平滚动条滑块的风格渲染
- dualbutton：以垂直滚动条滑块的风格渲染
- groupbox：以水平滚动条拖动区域的风格渲染
- listbox：以垂直滚动条拖动区域的风格渲染
- listitem：以搜索框的风格渲染
- media-fullscreen-button：以搜索框取消按钮的风格渲染
- media-mute-button：以照选项卡标签的风格渲染
- media-play-button：以照选项卡区域的风格渲染
- media-seek-back-button：以多行文本框的风格渲染
- media-seek-forward-button：以单行行文本框的风格渲染
- media-slider：以气泡提示的风格渲染
- media-sliderthumb：
- menuarrow：
- menubar：
- menucheckbox：
- menuimage：
- menuitem：
- menuitemtext：
- menulist：
- menulist-button：
- menulist-text：
- menulist-textfield：
- menupopup：
- menuradio：
- menuseparator：
- meterbar：
- meterchunk：
- progressbar：
- progressbar-vertical：
- progresschunk：
- progresschunk-vertical：
- push-button：
- radio：
- radio-container：
- radio-label：
- radiomenuitem：
- resizer：
- resizerpanel：
- scale-horizontal：
- scalethumbend：
- scalethumb-horizontal：
- scalethumbstart：
- scalethumbtick：
- scalethumb-vertical：
- scale-vertical：
- scrollbarbutton-up：
- scrollbarbutton-right：
- scrollbarbutton-down：
- scrollbarbutton-left：
- scrollbargripper-horizontal：
- scrollbargripper-vertical：
- scrollbarthumb-horizontal：
- scrollbarthumb-vertical：
- scrollbartrack-horizontal：
- scrollbartrack-vertical：
- searchfield：
- searchfield-cancel-button：
- searchfield-decoration：
- searchfield-results-button：
- searchfield-results-decoration：
- separator：
- sheet：
- slider-horizontal：
- sliderthumb-horizontal：
- sliderthumb-vertical：
- slider-vertical：
- spinner：
- spinner-downbutton：
- spinner-textfield：
- spinner-upbutton：
- splitter：
- square-button：
- statusbar：
- statusbarpanel：
- tab：
- tabpanel：
- tabpanels：
- tab-scroll-arrow-back：
- tab-scroll-arrow-forward：
- textarea：
- textfield：
- textfield-multiline：
- toolbar：
- toolbarbutton：
- toolbarbutton-dropdown：
- toolbargripper：
- toolbox：
- tooltip：
- treeheader：
- treeheadercell：
- treeheadersortarrow：
- treeitem：
- treeline：
- treetwisty：
- treetwistyopen：
- treeview：


##说明

设置或检索外观按照本地默认样式

- 如果你想去除元素本身的外观并进行自定义，可以设置为none
- 对应的脚本特性为appearance。


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
		<td class="unsupport">6.0-11.0</td>
		<td class="support">2.0-40.0<sup class="fix">-moz-</sup></td>
		<td class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.3<sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
</head>
<body>
请选择要测试的appearance值：
<select id="choice"></select><br>
<span></span>
<script>
(function() {
	var $ = opener.$,
		choice = document.getElementById("choice");
	choice.onchange = function() {
		var val = this.value,
			span = $("span", document).css("appearance", val);
		span.html(val === span.css("appearance") ? "" : "不支持");
	}
	$("#value dt").each(function(i) {
		var val = this.innerHTML.replace(/[^\w-]/g, "");
		choice.options[i] = new Option(val, val);
	});
})();
</script>
</body>
</html>

```
