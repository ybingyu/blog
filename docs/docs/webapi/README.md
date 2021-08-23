---
title: Web API(一)
date: 2021-02-26
---

## Web API 介绍
### JS的组成
![](https://gitee.com/bindyy/img/raw/master/webapi/1.png)


- ECMAScript - JavaScript的核心  
定义了JavaScript 的**语法规范**  
描述了语言的基本语法和数据类型，ECMAScript是一套标准，定义了一种语言的标准与具体实现无关  

- DOM - 文档对象模型  
一套操作**页面元素**的API  
DOM可以把HTML看做是文档树，通过DOM提供的API可以对树上的节点进行操作

- BOM - 浏览器对象模型  
一套操作**浏览器**功能的API  
通过BOM可以操作浏览器窗口，比如：弹出框、控制浏览器跳转、获取分辨率等


### API
API（Application Programming Interface，应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，无需理解其内部工作机制细节，只需直接调用使用即可。
 
API就是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能
> 例如，  
> C语言中有一个函数 fopen()可以打开硬盘上的文件，这个函数对于我们来说，就是一个C语言提供的打开文件的工具。  
> javascript中有一个函数alert()可以在页面弹一个提示框，这个函数就是js提供的一个弹框工具。  
> 这些工具（函数）由编程语言提供，内部的实现已经封装好了，我们只要学会灵活的使用这些工具即可。  

###  Web  API
- Web API 是浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM 和 DOM )。
- 现阶段我们主要针对于浏览器讲解常用的 API , 主要针对浏览器做交互效果。比如我们想要浏览器弹出一个警示框，直接使用 alert(‘弹出’)
- MDN 详细 API : [https://developer.mozilla.org/zh-CN/docs/Web/API](https://developer.mozilla.org/zh-CN/docs/Web/API)
- 因为 Web API 很多，所以我们将这个阶段称为 Web APIs。
- 此处的 Web API 特指浏览器提供的一系列API(很多函数或对象方法)，即操作网页的一系列工具。例如：操作html标签、操作页面地址的方法。

### 总结
- API 是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现
- Web API 主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果。
- Web API 一般都有输入和输出（函数的传参和返回值），Web API 很多都是方法（函数）
- 学习 Web API 可以结合前面学习内置对象方法的思路学习

<!-- 链接：https://juejin.cn/post/6972170210333704229;https://juejin.cn/post/6978774911825231902 -->


<!--TODO: https://juejin.cn/post/6912252527468052493
https://juejin.cn/post/6980275287837638687 -->

# DOM
<!-- https://juejin.cn/post/6844903922922962958 -->

## 文档对象类型
当网页被加载时，浏览器会创建页面的**文档对象模型**（Document Object Model，DOM）。  
HTML DOM 模型被结构化为对象树：
![](https://gitee.com/bindyy/img/raw/master/webapi/2.png)

- 文档：一个网页可以称为文档
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等）
- 元素：网页中的标签
- 属性：标签的属性

**文档对象模型**为用户提供了操作HTML文档的API：
- 获取元素
- 对元素进行操作（设置属性或者调用其方法）
- 动态创建元素
- 事件
## 元素选择
### 通过CSS选择符选择元素
```querySelector```和```querySelectorAll```可以按CSS选择符找到匹配的元素。
1. ```querySelector```，接收一个CSS选择符字符串作为参数。找到文档中第一个匹配的元素，如果没有找到返回null
```javascript
let spiner = document.querySelector('#spinder')//  属性id="spinder"的元素
let span1 = document.querySelector('span.fatal.error')// class属性中包含'fatal'和'error'的<span>元素
let span2 = document.querySelector('span[name="x"]') // 属性 name="x"的<span>元素
let span3 = document.querySelector('#logo span') // id="logo"元素的后代中的第一个<span>元素
let span4 = document.querySelector('.logo,.title') // class="logo"或者class=".title"的第一个匹配的元素
```

2. ```querySelectorAll```类似，不同的是返回文档中所有匹配的元素
```javascript
let titles = document.querySelectorAll('h1,h2,h3')// 查找文档所有<h1><h2><h3>
```
返回的是类似数组的NodeList对象。NodeList对象有length属性，可以像数组一样通过索引访问，因此可以使用传统的for循环遍历。NodeList也是可迭代对象，因此也可以在for/of循环中使用。如果想把NodeList转换为真正的数组，只要把它传给Array.from()即可。
 
如果文档中没有找到匹配的元素，返回的length等于0。

```querySelector```和```querySelectorAll```是匹配不到伪元素的。

- closest（元素向上查询）
- matches 是否匹配
- 预选择的元素 document.forms document.all
- 文档结构与遍历 children parent等等（看书）
- 创建、插入、删除节点
- dataset（获取元素以"data-"为前缀的属性集合）

## 操作CSS
- classList
- style
- style.cssText 和 计算属性window.getComputeStyle()
- 操作样式表
- 渐变和动画的事件监听

## 文档几何
- 文档坐标、视口坐标、容器坐标
- getBoundingClientRect() getClientRects 
- elementFromPoint()
- scrollTo scrollBy scrollIntoView
- 视口大小、内容大小、滚动位置



## 事件
事件定义、类别、注册事件（passive等第二个参数）、事件传播（捕获冒泡）、取消（preventDefault stopPropagation）、自定义事件 CustomEvent===来自书
## 组件
(需要找资料理解一下)
组件script module 模板tempate 自定义元素customElements.define 影子Dom shadowRoot
lit-element库

## audio webAudio API
这个很复杂-是否要讲-都用库


# BOM
## 位置导航历史
- assign\replace reload
- back forward go
- hash\hashchange （在uc浏览器及uc团队出品的夸克浏览器下 响应速度很慢）
- pushState() replaceState()  popstate事件===找点资料看看，书上有个猜数字的例子

## 网络
- fetch
- SSE
- WebSocket
可以是一个大章节-结合demo重点单开一课上一下？

## 存储
- storage:getItem setItem deleteItem clear、事件storage、跨站限制
- cookie
- IndexedDB

## Workers 线程






# 网络状态
# 电池状态
# 设备震动
# 页面状态
页面可见性
屏幕方向
page lifecycle(网页生命周期) https://juejin.cn/post/6844903741024370701#heading-0
# execCommand 执行命令
https://juejin.cn/post/6844903741024370701#heading-0



# IntersectionObserver 
https://juejin.cn/post/6844903874302574599#heading-0

# 全屏
