import Vue from 'vue';
import App from './App';
import router from './router';
import 'font-awesome/scss/font-awesome.scss';
import './assets/style/style.scss';

window._ = require('lodash');
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

