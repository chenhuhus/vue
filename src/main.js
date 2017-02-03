// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from './components/Article'

require('./assets/style/frontend.scss')
require('./assets/style/normalize.css')

Vue.use(VueRouter);

const Home = { template: '<div>this is HOME</div>' }
const routes = [
	{
		path: '/',
      	component: Home
	},
	{
		path: '/article',
      	component: Article
	}
]

const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
