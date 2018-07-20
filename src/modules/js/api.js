/**
 * Created by User on 2018/3/27.
 */
let url = {
    login: '/',
}

//开发环境和真实环境的切换
let host = 'http://192.168.1.174:8080' //http://192.168.1.174:8080  http://chxweb.chuxinhudong.com

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url