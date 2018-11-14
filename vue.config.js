module.exports = {
    css: {
      loaderOptions: {
        css: {
          // 这里的选项会传递给 css-loader
        },
        postcss: {
          plugins: [
            require('postcss-pxtorem')({
                rootValue : 37.5, // 换算的基数
                propList   : ['*'],
            }),
        ]
        }
      }
    }
  }