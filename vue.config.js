module.exports = {
<<<<<<< HEAD
    publicPath: '/yun_ding/',
    productionSourceMap: false,
    /* devServer: {
=======
    publicPath: '/tang1/',
    devServer: {
>>>>>>> 466e24782422b2ad1ef7b90b8a2632b22ade58a6
        proxy: {
            '/api': {
                target: 'https://htm.sofang.com/', //接口域名
                changeOrigin: true,             //是否跨域
                ws: true,                       //是否代理 websockets
                secure: true,                   //是否https接口
                pathRewrite: {                  //路径重置
                    '^/api': ''
                }
            }
        }
    } */
}
