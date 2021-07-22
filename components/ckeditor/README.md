# CKEditor 

- 集成 wordcount 的富文本编辑器

## 下载源码包 

1. [官网地址](https://ckeditor.com/ckeditor-4/)
2. [Online builder 自定义](https://ckeditor.com/cke4/builder)  
  可按需定制，增加插件（如 wordcount），语言配置等  

## 项目中引入

1. 将源码包放到 `public` 目录下 `public/ckeditor`
2. 在 `index.html` 引入 `<script src="<%= BASE_URL %>ckeditor/ckeditor.js"></script>`

## 使用方法

- 引用
```js
import ckeditor from 'xxx/ckeditor.vue';

components: {
  ckeditor
}
```

- 使用
```
<ckeditor 
  :readonly="true"
  :max-length="1024"
  :ck-data.sync="data"
  :toolbar="toolbar" />
```

- 参数说明

| 参数 | 说明 | 类型 | 
| --- | --- | --- | 
| ckData | 富文本数据 | String |
| readonly | 是否只读 | Boolean |
| maxLength | 最大长度 | Number |
| toolbar | 操作栏配置项 | Array |

> [toolbar 配置参考](https://ckeditor.com/docs/ckeditor4/latest/features/toolbar.html)