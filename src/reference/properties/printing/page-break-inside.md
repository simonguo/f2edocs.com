#page-break-inside

##语法

- page-break-inside：auto | avoid
- 默认值：auto
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值
- 媒体：页面


##取值

- auto：如果需要，在当前对象内部插入页分割符
- avoid：避免在当前对象内部插入页分割符


##说明

检索或设置对象容器内部出现的页分割符。

- 对应的脚本特性为pageBreakInside。


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
p{page-break-inside:auto;}
</style>
</head>
<body>
<div>如果需要，在对象内部插入页分割符</div>
<p>page-break-inside:auto</p>
<p>page-break-inside:auto</p>
<p>page-break-inside:auto</p>
<p>page-break-inside:auto</p>
</body>
</html>

```
