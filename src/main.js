import { banner } from './banner.js'
import { banner2 } from './banner2.js'

import App from './app.vue' // 根vue文件
import Vue from 'vue' // 引入vue.js对象

new Vue({ 
    render: h => h(App) // 渲染函数, 渲染App组件里的标签
  }).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里
banner()
banner2()
import "./style/index.css"
import "./style/index.less"
import "./assets/fonts/iconfont.css"

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

const fn = () => {
    console.log('快写完了');
}
console.log(fn);