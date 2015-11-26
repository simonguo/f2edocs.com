#page

##语法

- page：auto | &lt;identifier&gt;
- 默认值：auto
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：页面


##取值

- auto：参照当前的默认页面
- &lt;identifier&gt;：指定@page规则下的页面类型定义


##说明

检索或指定显示对象容器时使用的页面类型。

**示例代码：**

```css
@page rotated{size:landscape;}
p{page:rotated;page-break-before:left;}
```

- 对应的脚本特性为page。


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
        <td class="support" rowspan="2">6.0</td>
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
