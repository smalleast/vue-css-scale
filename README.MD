# vue-css-scale
```
采用vue框架实现css3图片放大缩小
```

## 技术栈
vue + ES6/ES7 + webpack + sass + nodejs

## 项目运行
 1. node v8.1.2
 2. npm 5.0.3
 3. vue 2.4.4
```
克隆，或者直接下载
git clone https://github.com/smalleast/vue-css-scale.git

进入文件夹
cd vue-css-scale

安装依赖
npm install
```

### 编译环境
```
开启本地服务器
npm run dev    测试
npm run build  生产
```
###组件说明

安装命令
```base
npm install smalleast/vue-css-scale --save
```
页面使用说明
```code
import VueCssScale from 'vue-css-scale';

 <VueCssScale position="" className="green"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
 </VueCssScale>
 <VueCssScale position="x" className="green"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
 </VueCssScale>
  <VueCssScale position="y" className="green"
                    url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
  </VueCssScale>
   <VueCssScale position="" className="red" textClassName="bg" textPosition="top"
                     url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
          <div slot="text">
            <button class="btn-fav">收藏</button>
          </div>
  </VueCssScale>
   <VueCssScale position="" className="red" textClassName="bg" textPosition="right"
                     url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
          <div slot="text">
            <button class="btn-fav">收藏</button>
          </div>
   </VueCssScale>
         <VueCssScale position="" className="red" textClassName="bg" textPosition="bottom"
                      url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
           <div slot="text">
             <button class="btn-fav">收藏</button>
           </div>
 </VueCssScale>
      <VueCssScale position="" className="red" textClassName="bg" textPosition="left"
                    url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
         <div slot="text">
           <button class="btn-fav">收藏</button>
         </div>
 </VueCssScale>
     <VueCssScale position="" className="red" textClassName="bg" textPosition="normal"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
        <div slot="text">
          <button class="btn-fav">收藏</button>
        </div>
 </VueCssScale>

```


## props:
| name | type | value | description |
| :----| :----| :----| :----|
| className  | string | '' | Customize class name |
| url  | string | 'http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660' | Image url |
| position  | string | 'x' | Image position(x/y) |
| textClassName  | string | 'x' | Image position(x/y) |
| textPosition  | string | 'normal' | Image position(normal/left/top/right/bottom) |


## 说明
```
>  如有问题或者遇到坑请直接在 Issues 中提，或者可以加我的QQ 382026180

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

```

## 项目布局
```
|-- build      // webpack的配置目录
|   |-- webpack.base.js      // webpack编译文件的配置文件
|   |-- webpack.config.js      // webpack的服务配置文件
|   |-- webpack.dev.conf.js      // 开发使用的编译文件 npm run dev
|   |-- webpack.prod.conf.js      // 打包生产编译包的文件 npm run build
|-- src      // 静态源码目录
|   |-- components      // 组件
|       |-- vue-components-template.vue      // 实现功能的vue组件
|   |-- dev      // 测试的模板目录
|       |-- dev.vue      // 测试用的vue组件
|   |-- dev.js      //	编译组件的dev.js
|   |-- main.js      //	整个组件的入口
|-- .babelrc      // ES6语法编译配置
|-- .editorconfig      // 代码编写规格
|-- .gitignore      // git忽略的文件
|-- .npmrc      // npm配置管理及设置代理
|-- package.json      // 项目及工具的依赖配置文件
|-- webpack.config.js      // webpack 配置文件
|-- README.md      // 说明
```
