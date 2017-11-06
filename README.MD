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
```


## props:
| name | type | value | description |
| :----| :----| :----| :----|
| className  | string | '' | Customize class name |
| url  | string | 'http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660' | Image url |
| position  | string | 'x' | Image title(x/y) |


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
|       |-- services      // 所有跟服务器交互的js文件
|       |-- styles      // 全局公共样式
|       |-- vue      // 全局公共的组件
|   |-- assets      // 公共静态文件、图片
|   |-- modules      //	所有的页面
|-- .babelrc      // ES6语法编译配置
|-- .editorconfig      // 代码编写规格
|-- .gitignore      // git忽略的文件
|-- .npmrc      // npm配置管理及设置代理
|-- package.json      // 项目及工具的依赖配置文件
|-- webpack.config.js      // webpack 配置文件
|-- README.md      // 说明
```
