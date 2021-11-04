module.exports = {
  plugins: [
    [
      // TODO 使用babel-plugin-import 插件，不能自动导入按需引用的组件对应的css样式
      'import',
      {
        libraryName: 'element-plus',
        customName: (name) => {
          name = name.slice(3)
          return `element-plus/lib/components/${name}`
        },
        //Import style
        customStyleName: (name) => {
          name = name.slice(3)

          return `element-plus/lib/components/${name}/style`
        },
      },
    ],
  ],
  presets: ['@vue/cli-plugin-babel/preset'],
}
