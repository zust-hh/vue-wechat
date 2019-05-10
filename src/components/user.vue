<template>
  <div>
    <div class="user-header" @mouseenter="this.showBoard" @mouseleave="this.hideBoard">
      <a-icon type="user"/>
      <div class="user-board" :style="`visibility: ${this.show ? 'visible' : 'hidden'}`">
        <div class="user-board-content">
          <span>用户名：{{userName}}</span>
        </div>
        <div class="user-board-bottom">
          <a>安全退出</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-board",
  data() {
    return {
      show: false
    };
  },
  computed: {
    userName() {
      return this.$store.getters["user/getUserName"];
    }
  },
  methods: {
    showBoard() {
      this.show = true;
    },
    hideBoard() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss">
.user-header {
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
}

.user-board {
  width: 180px;
  height: 100px;
  padding: 10px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  line-height: initial;
  background: #fff;
  right: 0;
  top: 64px;
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.2);
  z-index: 1000;
  
  a {
    color: #93999f;
  }

  &-bottom {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
