import axios from "axios";


export const instance = axios.create({
    baseURL: 'http://192.168.1.62:8000/',
    timeout: '',
    params: {}
})


export const post = (url, data) => instance.post(url, data).then(res => res).catch(err => err)
export const get = (url) => instance.get(url).then(res => res).catch(err => err)
export const update = (url, data) => instance.put(url, data).then(res => res).catch(err => err)
export const delte = (url) => instance.delete(url).then(res => res).catch(err => err)