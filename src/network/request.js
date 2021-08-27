import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        // baseURL: 'http://123.207.32.32:8000',
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000,
        method: 'get'
    })

    // 2.axios拦截器
    // 2.1请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })

    // 2.2响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    // 返回一个promise,发送真正的网络请求
    return instance(config)
}