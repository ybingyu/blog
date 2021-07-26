---
title: Web API(一)
date: 2021-02-26
---

# Web API 介绍
## JS的组成
- ECMAScript
- DOM页面文档对象模型
- BOM游览器对象模型
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39146fbcbb564241a2ca01720fd8ad1f~tplv-k3u1fbpfcp-watermark.image)

- ECMAScript - JavaScript的核心  
定义了JavaScript 的语法规范
JavaScript的核心，描述了语言的基本语法和数据类型，ECMAScript是一套标准，定义了一种语言的标准与具体实现无关  

- BOM - 浏览器对象模型  
一套操作浏览器功能的API  
通过BOM可以操作浏览器窗口，比如：弹出框、控制浏览器跳转、获取分辨率等

- DOM - 文档对象模型  
一套操作页面元素的API  
DOM可以把HTML看做是文档树，通过DOM提供的API可以对树上的节点进行操作

## JS基础阶段和WEB APIS阶段
JS基础阶段
- 学习的是 ECMAscript标准规定的基本语法
- 要求掌握JS 基础语法
- 只学习基本语法，做不了常用的网页交互效果
- 目的是为了Js后面打基础、做铺垫

web apis阶段
- web APIs是w3c组织的标准
- web APIs 主要字习DoM和BOM
- web APIs是Js所独有的部分
- 主要学习页面交互功能
- 需要使用Js 基础内容做基础


## API的概念
API（Application Programming Interface，应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，无需理解其内部工作机制细节，只需直接调用使用即可。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54b3b1ff4e364a2badef84da458d9c7d~tplv-k3u1fbpfcp-zoom-1.image)

> 举例解释什么是API。  
> 例如，  
> C语言中有一个函数 fopen()可以打开硬盘上的文件，这个函数对于我们来说，就是一个C语言提供的打开文件的工具。  
> javascript中有一个函数alert()可以在页面弹一个提示框，这个函数就是js提供的一个弹框工具。  
> 这些工具（函数）由编程语言提供，内部的实现已经封装好了，我们只要学会灵活的使用这些工具即可。  

## Web  API的概念

- Web API 是浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM 和 DOM )。
- 现阶段我们主要针对于浏览器讲解常用的 API , 主要针对浏览器做交互效果。比如我们想要浏览器弹出一个警示框， 直接使用 alert(‘弹出’)
- MDN 详细 API : https://developer.mozilla.org/zh-CN/docs/Web/API
- 因为 Web API 很多，所以我们将这个阶段称为 Web APIs。
- 此处的 Web API 特指浏览器提供的一系列API(很多函数或对象方法)，即操作网页的一系列工具。例如：操作html标签、操作页面地址的方法。

## API 和 Web  API 总结
- API 是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现
- Web API 主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果。
- Web API 一般都有输入和输出（函数的传参和返回值），Web API 很多都是方法（函数）
- 学习 Web API 可以结合前面学习内置对象方法的思路学习

链接：https://juejin.cn/post/6972170210333704229;https://juejin.cn/post/6978774911825231902

TODO:
https://juejin.cn/post/6912252527468052493
https://juejin.cn/post/6980275287837638687

# DOM
 https://juejin.cn/post/6844903922922962958
## 元素选择
- querySelector
- querySelectorAll
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
