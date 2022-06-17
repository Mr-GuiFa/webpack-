import { banner } from './banner.js'
import { banner2 } from './banner2.js'
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