<template>
  <div>
    <h2>当前所在 - {{idx}}</h2>
    <div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Note" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
            placeholder="Select a option and change input text above"
            @change="handleSelectChange"
          >
            <a-select-option value="male">male</a-select-option>
            <a-select-option value="female">female</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">提交</a-button>
          <a-button>
            <router-link to="/list">返回</router-link>
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, Button, Select, Input, message } from "ant-design-vue";
Vue.use(Form)
  .use(Button)
  .use(Select)
  .use(Input)
  .use(message);

export default {
  data() {
    return {
      idx: this.getIdx(),
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    getIdx() {
      return this.$route.params.id;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          message.success(`Received values of form: ${JSON.stringify(values)}`);
        }
      });
    },
    handleSelectChange(value) {
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    }
  }
};
</script>

<style>
.ant-btn + .ant-btn {
  margin-left: 20px;
}
</style>
