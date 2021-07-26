---
title: width:fit-content
date: 2021-07-26
sidebar: true
categories:
  - 前端
tags:
   - CSS
   - 前端
---

## 起因
在看各种居中方式的文章时，看到一个自己不曾了解过的属性值，```width:fit-content```。  
块级元素宽高不定时的水平居中
```
<div class="parent">
  <div class="child">测试示例</div>
</div>
<style>
  .parent {
    height: 100px;
    background-color: aqua;
  }
  .child {
    background-color: blueviolet;
    color: #fff;

    width: fit-content;
    margin: 0 auto;
  }
</style>
```

## width、height新增属性值
在css3中新增了width、height的属性值：max-content;min-content和fit-content、fill-availablea，用来实现以内容为主的尺寸计算方式。
### 兼容
IE浏览器不支持，webkit内核浏览器需添加-webkit-前缀

### fill-availablea
自动填满剩余的空间。

就是有个div没有任何样式的时候，浏览器是按照自动填充的样式呈现的，就是100%width的样式填充的。

出现fill-available关键字值的价值在于，可以让元素的100%自动填充特性不仅仅在block水平元素上，也可以应用在其他元素，在inline-block上也是可以这样呈现的（包裹收缩的inline-block元素上，这里说的inline-block是具有收缩特性）。

```
div { display:inline-block; width:fill-available; }
```


类似地，高度也有此特性

　　下面的例子中，div元素高度撑满了可用高度
```
<style>
div.inner{
  background-color: pink;
  height:-webkit-fill-available;
}
</style>
<div style="height: 100px;">
  <div class="inner">小火柴的蓝色理想</div>
</div>
```
![](https://gitee.com/bindyy/img/raw/master/front/css/fit-content/2.png)

于是，利用fill-available可以轻松地实现等高布局
```
<style>
.inner{
  width:100px;
  height:-webkit-fill-available;
  margin:0 10px;
  display: inline-block;
  vertical-align: middle;
  background-color: pink;
}
</style>
<div style="height: 100px;">
  <div class="inner">HTML</div>
  <div class="inner">CSS</div>
  <div class="inner">JS<br>jQyery<br>Vue</div>
</div>
```
![](https://gitee.com/bindyy/img/raw/master/front/css/fit-content/3.png)

### max-content和min-content
```width:min-content```表示采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度
```width:max-content```表示采用内部元素宽度值最大的那个元素的宽度作为最终容器的宽度。如果出现文本，则相当于文本不换行

### fit-content的属性 
width:fit-content可以实现元素收缩效果的同时，保持原本的block水平状态，于是，就可以直接使用margin:auto实现元素向内自适应同时的居中效果了。就是div的自适应宽度不是100%而是内容的大小。很好的实现了，block元素的水平居中。  

类似地，高度也有此特性，但不常用 

![](https://gitee.com/bindyy/img/raw/master/front/css/fit-content/1.png)

max-content 和fit-content， 当元素内容没有超出行宽的时候，最终的宽度都是内容的宽度。而超出行宽的时候，max-content的表现是不换行，出现横向滚动条，fit-content的表现是会换行。