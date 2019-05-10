import Vue from 'vue';
import Router from 'vue-router';
import Back from './layout/back.vue';
import Login from './pages/login';
import Main from './pages/HelloWorld.vue';
import Test from './pages/test.vue';
import ChatMenu from './pages/vue-menu/index.vue';
import List from './pages/list';
import ListItem from './pages/list/item.vue';
import NotFound from './pages/404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/back',
      component: Back,
      children: [
        {
          path: 'test',
          component: Test
        },
        {
          path: 'chat-menu',
          name: 'ChatMenu',
          component: ChatMenu
        },
        {
          path: 'list',
          name: 'List',
          component: List
        },
        { path: 'list/:id', name: 'ListItem', component: ListItem },
        {
          path: '',
          // redirect: 'Main'
          name: 'Main',
          component: Main
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
