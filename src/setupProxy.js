const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        proxy.createProxyMiddleware({
            target : 'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc',
            changeOrigin: true,
            pathRewrite:{
                '^/api' : ''
            }
        
        })
    )
}