{
  "presets": [
    ["@babel/preset-env", {
      "targets": "> 0.25%, not dead", // 设置目标浏览器范围
      "useBuiltIns": "usage", // 按需引入polyfills
      "corejs": 3 // 使用core-js 3版本
    }]
  ]
}
