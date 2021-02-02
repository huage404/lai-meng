module.exports = {
    publicPath: '/yun_ding/',
    productionSourceMap: false,
    /* devServer: {
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
