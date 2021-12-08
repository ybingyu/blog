---
title: Web API(一)
date: 2021-11-01
---

## Web API 介绍


### API
API（Application Programming Interface，应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，无需理解其内部工作机制细节，只需直接调用使用即可。
 
API就是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能
> 例如，  
> C语言中有一个函数 fopen()可以打开硬盘上的文件，这个函数对于我们来说，就是一个C语言提供的打开文件的工具。  
> javascript中有一个函数alert()可以在页面弹一个提示框，这个函数就是js提供的一个弹框工具。  
> 这些工具（函数）由编程语言提供，内部的实现已经封装好了，我们只要学会灵活的使用这些工具即可。  

###  Web  API

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


<!-- 因为 Web API 很多，所以我们将这个阶段称为 Web APIs。
此处的 Web API 特指浏览器提供的一系列API(很多函数或对象方法)，即操作网页的一系列工具。例如：操作html标签、操作页面地址的方法。 -->

### 总结
- API 是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现
- Web API是浏览器提供的一套操作浏览器功能和页面元素的API( BOM和DOM)
- MDN 详细 API : [https://developer.mozilla.org/zh-CN/docs/Web/API](https://developer.mozilla.org/zh-CN/docs/Web/API)

<!-- - 学习 Web API 可以结合前面学习内置对象方法的思路学习 -->

<!-- 链接：https://juejin.cn/post/6972170210333704229;https://juejin.cn/post/6978774911825231902 -->


<!--TODO: https://juejin.cn/post/6912252527468052493
https://juejin.cn/post/6980275287837638687 -->

## DOM
<!-- https://juejin.cn/post/6844903922922962958 -->

### 概念
当网页被加载时，浏览器会创建页面的**文档对象模型**（Document Object Model，DOM）。  
HTML DOM 模型被结构化为对象树：  
![](https://gitee.com/bindyy/img/raw/master/webapi/2.gif)

- 文档：一个网页可以称为文档
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等）
- 元素：网页中的标签
- 属性：标签的属性

**文档对象模型**(DOM)为用户提供了操作HTML文档的API：
1. 获取元素
2. 对元素进行操作（设置属性或者调用其方法）
3. 动态创建元素
4. 事件
5. 操作CSS
### 获取元素
#### 通过CSS选择符选择元素
<!-- ```querySelector```和```querySelectorAll```可以按CSS选择符找到匹配的元素。 -->
1. ```querySelector```，可以按CSS选择符找到匹配的元素。接收一个CSS选择符字符串作为参数。找到文档中**第一个**匹配的元素，如果没有找到返回null
```javascript
let spiner = document.querySelector('#logo')//  属性id="logo"的元素
let span1 = document.querySelector('span.tips.error')// class属性中包含'tips'和'error'的<span>元素
let span2 = document.querySelector('span[name="x"]') // 属性 name="x"的<span>元素
let span3 = document.querySelector('#logo span') // id="logo"元素的后代中的第一个<span>元素
let span4 = document.querySelector('.logo,.title') // class="logo"或者class=".title"的第一个匹配的元素
```

2. ```querySelectorAll```，与```querySelector```类似，不同的是返回文档中**所有**匹配的元素
```javascript
let titles = document.querySelectorAll('h1,h2,h3')// 查找文档所有<h1><h2><h3>
```
返回的是类似数组的```NodeList```对象。```NodeList```对象有```length```属性，可以像数组一样通过索引访问，因此可以使用传统的```for```循环遍历。```NodeList```也是可迭代对象（```iterable```），因此也可以在```for/of```循环中使用。如果想把```NodeList```转换为真正的数组，只要把它传给```Array.from()```即可。
 
如果文档中没有找到匹配的元素，返回的```length```等于0。

注意：```querySelector```和```querySelectorAll```是匹配不到伪元素的。

3. ```closest```以一个选择符作为唯一参数。如果选择符匹配那个调用它的元素，则返回该元素；否则就返回与选择不匹配的最近的祖先元素；如果没有匹配，则返回```null```。
```javascript
// 查找有href属性的最近的<a>标签
let hyperlink = event.target.closest('a[href]')
```
<!-- closest是向上查询，querySelector是向下匹配，是逆向操作 -->
4. ```matches``` 检查元素是否与选择符匹配。如果匹配，则返回```true```；否则，返回```false```
```javascript
// 如果 e 是一个 HTML 标题元素则返回true
function isHeading(e){
    return e.matched('h1,h2,h3,h4,h5,h6')
}
```
#### 文档结构与遍历
从```Document```中选择一个```Element```之后，常常还需要查找文档结构中相关的部分（父亲、同辈、孩子）。```Element```对象上有一组属性，可以引用当前元素的父亲、孩子和同辈：
- ```parentNode``` 引用元素的父节点
- ```children``` 这个属性是```NodeList```，包含元素的所有子元素，不含非```Element```节点，如```Text```节点和```Comment```节点
- ```childElementCount```元素所有子元素的个数，与```children.length```返回的值相同
- ```firstElementChild```、```lastElementChild```分别引用元素的第一个子元素和最后一个子元素。如果没有子元素，它们的值为```null```
- ```previousElementSibling```、```nextElementSibling```，分别引用元素左侧紧邻和右侧紧邻的同辈元素。如果没有相应的同辈元素则为```null```

以上属性只获得文档中的```Element```，而不包括```Text```节点（文本，以及元素间的空白）和```Comment```节点（注释）。如果不想忽略```Text```节点和```Comment```节点，可以使用另一组在所有```Node```对象上都有定义的属性

- ```childNodes``` ，```NodeList```对象，包含节点的所有子节点
- ```firstChild```、```lastChild```当前节点的第一个子节点和最后一个子节点
- ```previousSibling```、```nextSibling``` 当前节点的前一个同辈节点和后一个同辈节点。
<!-- NOTE:讲完后去页面上操作一下 childNodes firstChild 看一下区别 -->
### 属性
#### 通用方法
```Element```类定义了查询、设置、检查和删除元素的属性的通用方法：
- ```getAttribute()``` 获得属性值：```e.getAttribute('href')```
- ```setAttribute()``` 设置属性值：```e.setAttribute('href','https://baidu.com')```
- ```hasAttribute()``` 属性值是否存在，返回```Boolean```： ```e.hasAttribute('href')```
- ```removeAttribute()``` 删除元素的属性： ```e.removeAttribute('href')```
<!-- NOTE:去页面上操作一下 -->
#### class 属性
```Element```对象上的
1. ```className```属性，获得的值是空格分割的CSS类名的字符串。（由于```class```在JavaScript中是保留字）  
2. ```classList```属性，支持将class属性作为一个列表来操作
    - ```add()``` 增加类名
    - ```remove()``` 删除类名
    - ```contains()``` 是否包含指定类名(返回Boolean)
    - ```toggle()``` 切换类名（有则删、无则增，常用于一些切换操作，如显示/隐藏）
    - ```replace()``` 替换类名

```javascript
dom.classList.remove('hidden')
dom.classList.add('ani')
dom.classList.replace("title", "title-old");
```
<!-- ### dataset -->
### 动态操作元素
#### 元素内容
- ```innerHTML```返回该元素内容的标记字符串。在元素上设置这个属性会调用浏览器的解析器，并以新字符串解析后的表示替换元素当前的内容。
<!-- innerHTML的效率很高，+=追加效率不高 -->
- ```outerHTML```类似，只是返回的值包含元素自身。设置元素的```outerHTML```时，新内容会取代元素自身。
- ```textContent``` 得到元素的纯文本内容，或者向文档中插入纯文本（不转义HTML中使用的尖括号和&字符）
#### 创建、插入和删除节点
- ```createElement()```创建新元素
- ```append()```和```prepend```添加元素添加到```childNodes```的末尾和开头，可以接收多个参数
```javascript
let p = document.createElement('p');// 创建一个空的<p>元素
let e = document.createElement('em');// 创建一个空的<em>元素
e.append('World');// 向<em>元素中添加文本
p.append('Hello ',e,'!');// 向<p>元素中添加文本和<em>
p.prepend('i')// 向<p>元素的开头添加文本
p.innerHTML// iHello <em>World</em>!
```
- ```after()```和```before()```自己前/后插入新内容
```javascript
let dom = document.querySelector('h2')
dom.after(p,document.createElement('hr'))// 在标题h2后面插入新创建的p和一条水平线
```
元素如果已经在文档中了，再调用插入，它会挪到新位置，而不会复制一个新的过去。
 <!-- 操作页面示例  -->
- ```cloneNode()```复制方法，传入```true```复制全部内容（子元素），否则只复制本身
- ```remove()```移走调用的元素
```javascript
dom.remove()// 把dom从文档中移除
```
- ```replaceWith()```接收任意个数的字符串和元素，替换调用元素
```javascript
dom.replaceWith(p)// 移走dom，插入p元素
```

### 事件
#### 事件模型
1. **事件类型**，是一个字符串。如"mouseover"，"keydown"，"keyup"
2. **事件目标**，是一个对象。事件就发生在该对象或者事件与该对象有关。比如```Window.onload```的事件目标是```Window```，一个HTML元素发生了点击事件，这个元素就是点击事件的事件目标
3. **事件处理程序**或**事件监听器**，是一个函数。当事件目标上发生指定类型的事件时，浏览器会调用这个处理程序。
4. **事件对象**，包含有关该事件的细节。事件对象最为事件处理程序的参数传入。所有事件对象都有```type```和```target```属性，分别表示事件类型和事件目标。
5. **事件传播**，是一个过程。“冒泡”、“捕获”的过程。
#### 注册事件
<!-- onclick这种不讲 -->
```addEventListener()```，第一个参数是注册处理程序的**事件类型**(String)，第二个参数是指定事件类型发生时调用的函数。第三参数是可选的。
```javascript
let b = document.querSelector('.btn');
b.addEventListener('click',(e)=>{console.log('button click:',e)})
```
从一个对象上移除注册事件用```removeEventLitener()```方法，前两个参数是一样的，第三个参数也是可选的。

添加注册事件时，要给事件处理程序命名，然后
```javascript
d.removeEventListener('mousemove',handleMouseMove);
```

第三个参数是一个布尔值或对象。
- 传入```true```，函数就会被注册成捕获事件处理程序。那么移除的时候，调用```removeEventLitener()```时也传入```true```作为第三个参数
- 传入对象

```javascript
d.addEventListener('click',handleMouseMove,{
    capture: true, 
    once: true,
    passive: true
});
```

1. ```capture```: true捕获处理程序；false或者省略，处理程序就不会注册到捕获阶段，而是冒泡阶段
2. ```once```: true 事件监听在触发一次后会自动移除。false或者省略，处理程序永远不会被自动移除
3. ```passive```：true 让 阻止默认行为（```preventDefault()```）失效。
> Firefox和Chrome都默认把touchmove和mousewheel事件设置为“被动式”(passive:true)。那么调用```preventDefault()```函数，就会失效。同时浏览器的开发工具也会发出警告

![](https://gitee.com/bindyy/img/raw/master/webapi/2.png)

如果确实想为这两个事件注册一个会调用```preventDefault()```的事件处理程序，应该显示地将```passive```属性设置为```false```。

移除的时候，可以把选项对象传给第三个参数，但只有```capture```属性是有用的，其他两个属性不需要指定，指定了也会被忽略。

#### 自定义事件
通过```CustomEvent()```构造函数创建自定义事件对象，然后再把它传给```dispatchEvent()```。

自定义事件:
```new CustomEvent(typeArg,customEventInit);```
- ```typeArg```:字符串，表示事件类型
- ```customEventInit```：可选，对象，用于指定事件对象的属性。
    - ```detail```:字符串，对象或者其他值
    - ```bubbles```:布尔值，如果是true则向上冒泡；默认false，不冒泡
    - ```cancelable```:布尔值，表示该事件是否可以取消，true:可以使用事件对象的 ```stopPropagation()``` 方法取消事件传播。
```javascript
// 监听
window.addEventListener('test', function(e) {  console.log(e) })

// 创建一个自定义事件
let event = new CustomEvent('test', { detail: '测试自定义事件' })
// 发起事件
window.dispatchEvent(event)

```
<!-- 游戏中：分数和角色，角色触发了分数加分，发起事件，传分数给分数类， -->


注意：现代浏览器基本支持，除了IE。Polyfill：
```javascript
// IE9+
(function(){
    try{
        // a : While a window.CustomEvent object exists, it cannot be called as a constructor.
        // b : There is no window.CustomEvent object
        new window.CustomEvent('T');
    }
    catch(e){
        var CustomEvent = function(event, params){
            params = params || { bubbles: false, cancelable: false, detail: undefined };

            var evt = document.createEvent('CustomEvent');

            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

            return evt;
        };

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    }
})();
```
[demo](http://w.bindyy.cn/webapi/customevent.html)

<!-- > 拓展：Event()与CustomEvent()的区别 -->
<!-- TODO: event()区别是否是event不能在web worker中使用， -->
### 操作CSS
<!-- - classList -->
#### 行内样式
```DOM```在所有```Element```对象上都定义了对应的```style```属性，这个```style```属性返回的是```CSSStyleDelcaration```对象

> 命名约定：如果CSS属性名包含一个或多个连字符，对应的```CSSStyleDelcaration```属性名将剔除连字符，并将每个连字符后面的字母变成大写。
```javascript
e.style.display = 'block';
e.style.fontFamily = 'sans-serif';
e.style.backgroundColor = '#ffffff';
e.style.marginLeft = '300px';
```

有时候，以字符串的形式设置和读取行内样式会更方便。
```javascript
// 把元素e的行内样式复制给元素f
f.setAttribute('style',e.getAttribute('style'))
// 或者cssText属性
f.style.cssText = e.style.cssText
```
<!-- 以上获得的是行内样式的： -->
#### 计算样式
元素的计算样式（computed style）是浏览器根据一个元素的行内样式和所有样式表中使用的样式规则导出（或计算得到的）一组属性值。

使用```Window```对象的```getComputedStyle()```方法可以获取一个元素的计算样式。
- 第一个参数是要查询的元素，可选的第二个参数用于指定一个CSS伪元素（```::before```,```::after```）
```javascript
let styles = window.getComputedStyle(dom);
let beforeStyles = window.getComputedStyle(dom,'::before');
```
- 返回值是```CSSStyleDelcaration```对象表示
- 只读的，不能修改计算样式
- 计算样式的属性是绝对值。百分比和点等相对单位都会被转换成绝对值。
    - 大小属性，返回的字符串会带'```px```'后缀
    - 颜色属性用'```rgba()```'返回
- 简写属性不会被计算，只有它们代表的基础属性会被计算。简写属性，如```margin```、```padding```、```border```

#### 操作样式表
```Javascript```可以操作样式表。给```<style>```标签或者```<link red="stylesheet">```标签定个id。然后可以通过获得DOM的API，比如```querySelector()```找到标签。

方法1. disabled
```<style>```和```<link>```标签对应的```Element```对象都有```disabled```属性，可以用它禁用整个样式表
```javascript
// 'light'和'dark'主题切换
function toggleTheme(){
    let lightTheme = document.querySelector('#lightTheme')
    let darkTheme = document.querySelector('#darkTheme')
    if(darkTheme.disabled){
        lightTheme.disabled = true;
        darkTheme.disabled = false;
    }else{
        lightTheme.disabled = false;
        darkTheme.disabled = true;
    }
}
```
[demo](http://w.bindyy.cn/webapi/styledisabled/index.html)


方法2. ```DOM API```插入新样式表
```javascript
function setTheme(name){
    let link = document.createElement('link');
    link.id = 'theme';
    link.rel = 'stylesheet';
    link.href = '${name}.css';

    // 通过id = 'theme'查找当前的<link>元素
    let cureentTheme = document.querSelector('#theme');
    if(currentTheme){
        // 如果找到了，则将当前主题替换为新主题
        currentTheme.replceWith(link);
    }else{
        // 否则，直接插入包含主题的<link>元素
        document.head.append(link)
    }
}

```

#### 更多
 [CSS Object Model](https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model)是一组允许用JavaScript操纵CSS的API。 它是继DOM和HTML API之后，又一个操纵CSS的接口，从而能够动态地读取和修改CSS样式。

