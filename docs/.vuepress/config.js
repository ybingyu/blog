/*
 * @Descripttion: 
 * @version: 
 * @Author: bindy(128080)
 * @Date: 2020-08-31 09:28:50
 * @LastEditors: bindy(128080)
 * @LastEditTime: 2021-01-29 11:55:11
 */
module.exports = {
    title: 'Bindy 的小仓库',
    description: 'Living  & Coding',
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    theme: 'reco',
    themeConfig: {
        logo: 'https://gitee.com/bindyy/img/raw/master/a.jpg',
        authorAvatar: 'https://gitee.com/bindyy/img/raw/master/a.jpg',
        author: 'bindy',
        type: 'blog',
       /*  blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置
                text: '主页' 
            },
            category: {
                location: 3,     // 在导航栏菜单中所占的位置
                text: '前端' 
            },
            category: {
                location: 4,     // 在导航栏菜单中所占的位置
                text: '生活' 
            },
        }, */
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        /**
* support for
* 'default'
* 'funky'
* 'okaidia'
* 'solarizedlight'
* 'tomorrow'
*/

        codeTheme: 'tomorrow', // default 'tomorrow'
        nav: [
            { text: '首页', link: '/', icon: 'reco-home'},
            {
                text: '前端', items: [
                    { text: 'HTML', link: '/html/' },
                    { text: 'CSS', link: '/css/' },
                    { text: 'JavaScript', link: '/javascript/' }
                ]
            },
            { text: '杂记', link: '/vue/' , icon: 'reco-other'},
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
        ],
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