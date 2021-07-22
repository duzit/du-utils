<template>
  <textarea :id="id" />
</template>

<script>
  // CKEDITOR 在 index.html 引入
  export default {
    name: 'CKEditor',
    props: {
      ckData: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      maxLength: {
        type: Number,
        default: 2048
      },
      toolbar: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        id: `CKEditor${Math.floor(Math.random() * 10000000000)}`,
        ckInstance: null,
        defaultToolbar: [
          // 打印
          {
            name: 'document',
            items: ['Source'] // Source 源码输入
          },
          // 撤销 重新编辑
          // {
          //   name: 'clipboard',
          //   items: ['Undo', 'Redo']
          // },
          {
            name: 'styles',
            items: ['Format', 'Font', 'FontSize'] // 格式 字体 大小
          },
          // 文本颜色 文本背景颜色
          {
            name: 'colors',
            items: ['TextColor', 'BGColor']
          },
          // 对齐方式
          // {
          //   name: 'align',
          //   items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
          // },
          // 操作栏 是否换行
          // '/', 
          // 文本样式操作 加粗等功能
          {
            name: 'basicstyles',
            items: ['Bold', 'Italic']
          // items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting']
          },
          // 超链接
          {
            name: 'links',
            items: ['Link', 'Unlink']
          },
          // 编号列表 项目列表等功能
          // {
          //   name: 'paragraph',
          //   items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']
          // },
          // 插入 图片 表格
          {
            name: 'insert',
            // items: ['Table']
            items: ['Image']
          },
          // 工具 全屏等功能
          // {
          //   name: 'tools',
          //   items: ['Maximize']
          // },
          // 即时拼写检查
          // {
          //   name: 'editing',
          //   items: ['Scayt']
          // }
        ]
      }
    },
    mounted() {
      this.ckInstance && this.ckInstance.destroy();
      this.ckInstance = window.CKEDITOR.replace(this.id, {
        width: '100%', // 宽 支持百分比
        height: 200, // 高 支持 '25em'
        // uiColor: '#66AB16', // 编辑器 背景颜色
        // defaultLanguage: '', // 语言 
        editorplaceholder: '', // 输入框提示
        // resize_enabled: false, // 是否可伸缩 高度 或 config.removePlugins = 'resize';
        readOnly: this.readonly,
        wordcount: {
          showRemaining: false,
          showParagraphs: false,
          showWordCount: false,
          showCharCount: true,
          countBytesAsChars: false,
          countSpacesAsChars: false,
          countHTML: true,
          countLineBreaks: false,
          hardLimit: true,
          warnOnLimitOnly: false,
          wordDelims: '',

          //MAXLENGTH Properties
          maxWordCount: -1,
          maxCharCount: this.maxLength,
          maxParagraphs: -1,

          // Filter
          filter: null,

          // How long to show the 'paste' warning
          pasteWarningDuration: 1000, // ms

          //DisAllowed functions
          // wordCountGreaterThanMaxLengthEvent: function(currentLength, maxLength) {
          //   dispatchEvent('wordCountGreaterThanMaxLengthEvent', currentLength, maxLength);
          // },
          // charCountGreaterThanMaxLengthEvent: function(currentLength, maxLength) {
          //   dispatchEvent('charCountGreaterThanMaxLengthEvent', currentLength, maxLength);
          // },

          // //Allowed Functions
          // wordCountLessThanMaxLengthEvent: function(currentLength, maxLength) {
          //   dispatchEvent('wordCountLessThanMaxLengthEvent', currentLength, maxLength);
          // },
          // charCountLessThanMaxLengthEvent: function(currentLength, maxLength) {
          //   dispatchEvent('charCountLessThanMaxLengthEvent', currentLength, maxLength);
          // }
        },
        // colorButton_colors: '00923E,F8C100,28166F',
        // 操作栏配置
        toolbar: !this.toolbar.length ? this.defaultToolbar : this.toolbar,
        // extraPlugins: 'format,font,colorbutton,uploadimage,wordcount',
        extraPlugins: 'wordcount,notification,colorbutton'
      });

      this.ckInstance && this.ckInstance.setData(this.ckData);
      // change callback
      this.ckInstance.on('change', () => {
        const ckInput = this.ckInstance.getData();
        this.$emit('update:ckData', ckInput);
      })
    },
  }
</script>