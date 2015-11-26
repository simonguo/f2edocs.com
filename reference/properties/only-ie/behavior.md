#behavior

##语法

- behavior：&lt;url&gt; | url(#objID) | url(#default#behaviorName)
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- &lt;url&gt;：使用绝对或相对地址指定DHTML行为组件（.htc）
- url(#objID)：用二进制实现DHTML行为，#objID为object对象指定的id特性
- url(#default#behaviorName)：IE的默认行为。由behaviorName指定


##说明

设置或检索对象的DHTML行为。

- 多个行为之间用空格隔开。
- 对应的脚本特性为behavior。


##兼容性


<table class="compatible">
<thead>
	<tr>
		<th>Values</th>
		<th>IE</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td rowspan="2"><strong>Basic Support</strong></td>
		<td class="support">6.0-9.0</td>
	</tr>
	<tr>
		<td class="unsupport">10.0-11.0</td>
	</tr>
</tbody>
</table>
