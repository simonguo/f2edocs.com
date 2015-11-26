#page-break-after

##语法

- page-break-after：auto | always | avoid | left | right
- 默认值：auto
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：页面


##取值

- auto：如果需要，在对象之后插入页分割符
- always：始终在对象之后插入页分割符
- avoid：避免在对象之后插入页分割符
- left：在对象之后插入页分割符直到它到达一个空白的左页边
- right：在对象之后插入页分割符直到它到达一个空白的右页边


##说明

检索或设置对象之后出现的页分割符。

- 对应的脚本特性为pageBreakAfter。


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
        <td class="support">6.0</td>
        <td class="support">15.0+</td>
        <td class="support">6.0+</td>
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
p{page-break-after:always;}
</style>
</head>
<body>
<div>在对象之后插入页分割符</div>
<p>page-break-after:always</p>
<p>page-break-after:always</p>
<p>page-break-after:always</p>
<p>page-break-after:always</p>
</body>
</html>

```
