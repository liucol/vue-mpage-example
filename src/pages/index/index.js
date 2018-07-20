/**
 * Created by User on 2018/3/27.
 */
// import 'css/common.css'
// import './index.css'

import Vue from 'vue'
import axios from 'axios'
// import Bar from "components/Bar.vue"


import Router from 'vue-router'
Vue.use(Router)

let routes = [{
    path: '', //首页
    components: require("../../components/Index.vue")
}]

//创建router实例
let router = new Router({
    routes
})



let app = new Vue({
    el: "#wrapper",
    router,
    data: {},
    created() {},
    methods: {}
})