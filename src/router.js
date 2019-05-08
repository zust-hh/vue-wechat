import Vue from 'vue';
import Router from 'vue-router';
import Main from './pages/HelloWorld.vue';
import Test from './pages/test.vue';
import ChatMenu from './pages/vue-menu/index.vue';
import List from './pages/list';
import ListItem from './pages/list/item.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/chat-menu',
      name: 'ChatMenu',
      component: ChatMenu
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    { path: '/list/:id', name: 'ListItem', component: ListItem },
    {
      path: '/',
      // redirect: 'Main'
      name: 'Main',
      component: Main
    }
  ]
});
