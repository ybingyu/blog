/*
 * @Descripttion: 
 * @version: 
 * @Author: bindy(128080)
 * @Date: 2020-08-31 09:28:50
 * @LastEditors: bindy(128080)
 * @LastEditTime: 2021-02-23 17:50:36
 */
module.exports = {
    title: 'Bindy 的小仓库',
    description: 'Living  & Coding',
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    themeConfig: {
        logo: 'https://gitee.com/bindyy/img/raw/master/a.jpg',
        authorAvatar: 'https://gitee.com/bindyy/img/raw/master/a.jpg',
        author: 'bindy',
        type: 'blog',
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        codeTheme: 'tomorrow', // default 'tomorrow'
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            }
        },
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "动态",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "文档",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "svg",
                        "link": "/docs/svg/"
                    }
                ]
            }/* ,
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/recoluan",
                        "icon": "reco-github"
                    }
                ]
            } */
        ],
        "sidebar": {
            "/docs/svg/": [
                ['', 'SVG基础'],
                ['2', 'SVG图像处理'],
                ['3', 'SVG动画'],
                
            ]
        },
       /*  nav: [
            { text: '首页', link: '/', icon: 'reco-home'},
            {
                text: '前端', items: [
                    // { text: 'HTML', link: '/frontEnd/HTML/' },
                    // { text: 'CSS', link: '/frontEnd/CSS/' },
                    // { text: 'JavaScript', link: '/frontEnd/JavaScript/' }
                ], icon:'reco-category'
            },
            { text: '杂记', link: '/live/' , icon: 'reco-other'},
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
        ], */
        lastUpdated: true,
    },
    configureWebpack: {
        resolve: {
            alias: {
            }
        }
    },
    plugins: {

    }
};