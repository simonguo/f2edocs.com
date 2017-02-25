#text-underline-position

##语法

- text-underline-position：auto | [ under || [ left | right ] ]
- 默认值：auto
- 适用于：所有元素
- 继承性：是
- 动画性：否
- 计算值：特定值


##取值

- auto：用户代理可能会使用任意算法确定下划线的位置。
- under：下划线的定位与元素内容盒子的下边缘相关
- left：下划线的定位与元素内容盒子的左边缘相关
- right：下划线的定位与元素内容盒子的右边缘相关


##说明

检检索或设置对象中的下划线的位置。

- 对应的脚本特性为textUnderlinePosition。


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
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport" rowspan="2">2.0-40.0</td>
		<td class="unsupport" rowspan="2">4.0-45.0</td>
		<td class="unsupport">6.0-7.0</td>
		<td class="unsupport" rowspan="2">15.0-29.0</td>
		<td class="unsupport">6.0-7.1</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-42.0</td>
	</tr>
	<tr>
		<td class="partsupport">7.1-8.0<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">8.0-8.3<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
	</tr>
</tbody>
</table>


- 支持auto | under属性值，但未实现效果。
