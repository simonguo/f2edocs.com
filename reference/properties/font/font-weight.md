#font-weight

##语法

- font-weight：normal | bold | bolder | lighter | &lt;integer&gt;
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：是
- 计算值：数字重量值


##取值

- normal：正常的字体。相当于数字值400
- bold：粗体。相当于数字值700。
- bolder：定义比继承值更重的值
- lighter：定义比继承值更轻的值
- &lt;integer&gt;：用数字表示文本字体粗细。取值范围：100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900


##说明

设置或检索对象中的文本字体的粗细。

- 作用由客户端系统安装的字体的特定字体变量映射决定。系统选择最近的匹配。也就是说，用户可能看不到不同值之间的差异。
- 对应的脚本特性为fontWeight。


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
.normal p{font-weight:normal;}
.bold p{font-weight:bold;}
.bolder p{font-weight:bolder;}
.lighter p{font-weight:lighter;}
.number p{font-weight:700;}
</style>
</head>
<body>
<ul class="test">
	<li class="normal">
		<strong>正常的字体：</strong>
		<p>本段文字将显示为正常的字体。</p>
	</li>
	<li class="bold">
		<strong>粗体：</strong>
		<p>本段文字将显示为粗体。</p>
	</li>
	<li class="bolder">
		<strong>特粗体：</strong>
		<p>本段文字将显示为特粗体。</p>
	</li>
	<li class="lighter">
		<strong>细体：</strong>
		<p>本段文字将显示为细体。</p>
	</li>
	<li class="number">
		<strong>用number值表示粗体：</strong>
		<p>本段文字将显示为粗体。</p>
	</li>
</ul>
</body>
</html>
			
```