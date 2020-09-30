import axios from 'axios'
import { Toast } from 'vant';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BASE_API : '',
    timeout: 5000,
})

// 请求拦截器
instance.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(response => {
    const res = response.data
    if (res.code !== 200) {
        Toast.fail('数据有误');
        return Promise.reject(res.msg)
    } else {
        return res
    }
}, err => {
    Toast.fail('系统异常');
    return Promise.reject(err)
})

export default instance