---
title: Taro 升级小记
date: 2021-06-15
sidebar: true
categories:
  - 前端
tags:
  - taro
  - 小程序
  - 前端
---

# 背景
早期小程序用taro 1.x版本，升级到3.x时，做一个简单的记录。

# 升级
- 新建一个空模板拷贝配置package.js、安装taro ui next
- 拷贝config文件进去

# 替换
1. 
```
// 类组件
import Taro, { Component } from '@tarojs/taro'
```
to
```
import Taro from '@tarojs/taro'
import React, { Component }  from 'react'  
```




2. 

```
import { observer, inject } from '@tarojs/mobx'
```
to
```
import { observer, inject } from 'mobx-react'
```

3. app.jsx
```
import { Provider } from '@tarojs/mobx'
render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
```

to 
```
import { Provider } from 'mobx-react'
 render() {
        return (
             <Provider  loginStore={loginStore} toastStore={toastStore} rankStore={rankStore} caStore={caStore}>

        {this.props.children}
      </Provider>
        )
    }
 
```


4. 用到 
shouldComponentUpdate的组件要继承于Taro.PureComponent
https://taro-docs.jd.com/taro/blog/2020-04-27-taro-vs-jd#shouldcomponentupdate--taropurecomponent

删除componentWillReact 生命周期

5. 

```this.$router.params ```
to  

```
import Taro,{getCurrentInstance } from '@tarojs/taro'

current = getCurrentInstance()
this.current.router.params

```

6. 
config要单独出来index.config.js
```
export default {
    navigationBarTitleText: '解绑'
}
```

7. 
out-class不起作用了，替换方案将class当属性传入
```
 static options = {
      addGlobalClass: true
    }
    static externalClasses = ['out-class']
```
to
```
 const { outCls } = this.props;
        return (
            <View>
                <Button className={`btn  ${outCls}`} ></Button>

</View> )                   ```
