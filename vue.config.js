module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://140.143.128.100:3000',
                changeOrigin: true,
                pathRewrite: {//地址重写
                    '^/api': ''
                }
            }
        }
    }
}