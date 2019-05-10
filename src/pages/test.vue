<template>
  <div class="hello">
    <h3>Fucc</h3>
    <span>name: {{userName1}} - {{userName}}</span>
    <a-button @click="this.nameChange">123</a-button>
    <a-button @click="this.getName">456</a-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      userName1: "测试"
    };
  },
  computed: {
    userName() {
      return this.$store.getters["user/getUserName"];
    }
  },
  methods: {
    nameChange() {
      this.$store.dispatch("user/changeUserNameWithApi", 123);
    },
    getName() {
      this.userName1 = "1234424";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
