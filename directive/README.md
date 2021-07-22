# directive 常用指令

## 文档参考
- [Vue官网指令参考](https://cn.vuejs.org/v2/guide/custom-directive.html)
- [参考](https://mp.weixin.qq.com/s/XIaJM8GHNYHReg91uRlCCg)

## 全局注册
```js
  // 项目入口文件 如 main.js
  import directives from './directive';
  Vue.use(directives);
```

## 文本复制 v-copy
- `./copy.js` 或 `./copyPlus.js`
- 使用该指令可以复制元素的文本内容  
  指令支持单击复制 v-copy、双击复制 v-copy.dblclick、点击icon复制 v-copy.icon 三种模式，  
  不传参数时，默认使用单击复制。

### 参数说明
| 参数 | 说明 | 可选 | 
| --- | --- | --- |
| dblclick | 双击复制 | 可选 |
| icon | 图标复制 | 可选 |

```html
<div v-copy> 单击复制 </div>
<div v-copy.dblclick> 双击复制 </div>
<div v-copy.icon> icon复制 </div>
```

## 全屏指令 v-screenfull
- `./screenfull.js`
- 全屏指令，点击元素进行全屏/退出全屏的操作  
  支持元素后面是否插入 element-ui 的全屏图标 el-icon-full-screen  

### 参数说明
| 参数 | 说明 | 可选 | 
| --- | --- | --- |
| icon | 是否添加 icon | 可选 |

```html
<div v-screenfull.icon> 全屏 </div>
```

## 元素说明指令 v-tooltip
- `./tooltip.js`
- 为元素添加说明，如同 element-ui 的 el-tooltip（问号 icon 在鼠标覆盖后，展示说明文字 

### 参数说明
| 参数 | 说明 | 可选 | 
| --- | --- | --- |
| content | 传给指令的参数。例如 v-tooltip:content 中，参数为 "content" ，tooltip中展示的内容为："content" | 可选 |
| tootipParams | element-ui 支持的 tooltip 属性 | 可选 |

```html
<div v-tooltip:content='tootipParams'> 提示 </div>

<div v-tooltip:提示内容为XXX1> 提示1</div>
<div v-tooltip:提示内容为XXX='tootipParams'> 提示2 </div>
```

- 为指令传入 element-ui 支持的参数
```js 
data() {
  return {
    tootipParams: {
      placement: 'top',
      effect: 'light',
    }
  }
}
```

## 回到顶部指令 v-backtop
- 使用该指令可以让页面或指定元素回到顶部  
  可选指定元素，如果不指定则全局页面回到顶部   
  可选在元素偏移多少 px 后显示 backtop 元素，例如在滚动 400px 后显示回到顶部按钮  

### 参数说明
| 参数 | 说明 | 类型 | 可选 | 
| --- | --- | --- | --- |
| id | 给需要回到顶部的元素添加的id | String | 可选 |
| offset | 偏移距离为 height 时显示指令绑定的元素 | Number | 可选 |

- 然后你可以在模板中任何元素上使用新的 v-backtop property，  
  如下表示在 id 为 app 的元素滚动 400px 后显示绑定指令的元素  

```html
<div  v-backtop:app="400"> 回到顶部 </div>
```

- 也可以这样使用，表示为一直显示绑定指令的元素，并且是全局页面回到顶部

```html
<div  v-backtop> 回到顶部 </div>
```

## 权限指令 v-permission
- 根据用户权限控制元素显隐

### 参数说明
| 参数 | 说明 | 类型 | 可选 | 
| --- | --- | --- | --- |
| value | 元素绑定的值 | String Number | 必选 |

```html
<el-button v-permission="5">
  无权限
</el-button>
<el-button v-permission="1">
  有权限
</el-button>
```

## 防抖指令 v-debounce
- 用于事件的防抖 

### 参数说明
| 参数 | 说明 | 类型 | 可选 | 
| --- | --- | --- | --- |
| value | 回调事件 | Function | 必选 |
| arg | 防抖延时 | Number | 可选 |

```html
<el-button v-debounce:[debounceTime]="debounceClick">
  延迟点击
</el-button>
```
```js
data() {
  return {
    debounceTime: 1000
  };
},
methods: {
  debounceClick() {
    this.$message.warning('点击延迟');
  },
},
```