<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo">Vue</div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="this.defaultSelectedKeys">
        <a-menu-item key="/">
          <router-link to="/back">
            <a-icon type="user"/>
            <span>nav 1</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="test">
          <router-link to="/back/test">
            <a-icon type="video-camera"/>
            <span>nav 2</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="chat-menu">
          <router-link to="/back/chat-menu">
            <a-icon type="video-camera"/>
            <span>微信菜单编辑</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="list">
          <router-link to="/back/list">
            <a-icon type="video-camera"/>
            <span>列表演示</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/5">
          <router-link to="/back/5">
            <a-icon type="video-camera"/>
            <span>nav 5</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/6">
          <router-link to="/back/6">
            <a-icon type="video-camera"/>
            <span>nav 6</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; display: flex; align-items: center; justify-content: space-between;">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <user-board style="margin-right: 40px;"/>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import UsrComponents from '../components/user'

export default {
  components: {
    'user-board': UsrComponents
  },
  data() {
    return {
      collapsed: false,
      defaultSelectedKeys: this.getCurrentUrl(),
    };
  },
  methods: {
    getCurrentUrl: function () {
      const path = this.$route.path;
      if (path === '/back') return ['/'];
      return [path.split('/')[2]];
    }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger {
  min-height: 768px;
  min-width: 1200px;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>