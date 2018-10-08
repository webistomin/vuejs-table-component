import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Login from '../components/Auth/Login';
import Registration from '../components/Auth/Registration';
import DataTable from '../components/DataTable';
import AuthGuard from './auth-guard';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
    },
    {
      path: '/list',
      name: 'list',
      component: DataTable,
      beforeEnter: AuthGuard,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
  mode: 'history',
});
