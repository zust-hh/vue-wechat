<template>
  <a-form :form="form" @submit="handleSubmit2" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <a-form-item prop="account">
      <a-input
        type="text"
        placeholder="账号"
        v-decorator="[
          'user',
          {rules: [{ required: true, message: '请输入账号' }]}
        ]"
      ></a-input>
    </a-form-item>
    <a-form-item prop="checkPass">
      <a-input
        type="password"
        placeholder="密码"
        v-decorator="[
          'pass',
          {rules: [{ required: true, message: '请输入密码' }]}
        ]"
      ></a-input>
    </a-form-item>
    <a-checkbox :checked="checked" @change="this.changeCheck" class="remember">记住密码</a-checkbox>
    <a-form-item style="width:100%;">
      <a-button type="primary" style="width:100%;" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: "admin",
        checkPass: "123456"
      },
      form: this.$form.createForm(this),
      checked: true
    };
  },
  methods: {
    handleSubmit2(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.$router.push('/back');
        }
      });
    },
    changeCheck() {
      this.checked = !this.checked;
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>