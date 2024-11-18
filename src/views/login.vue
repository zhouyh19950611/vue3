<script setup>
import { getCode, login } from "@/api/login";
import { encrypt, decrypt } from "@/utils/jsencrypt";
import { setCookie } from "@/utils/cookie";
import { useRouter } from "vue-router";
const { proxy } = getCurrentInstance();
const router = useRouter();
const form = reactive({
  username: "",
  password: "",
  code: "",
  uuid: "",
});
let codeImg = ref();
const getCodeData = async () => {
  const data = await getCode();
  codeImg.value = "data:image/gif;base64," + data.img;
  form.uuid = data.uuid;
};
const submit = async () => {
  let subForm = proxy.$deepClone(form);
  subForm.password = encrypt(subForm.password);
  const res = await login(subForm);
  if (res.code === 200) {
    setCookie(res.data.access_token, res.data.expires_in);
    router.push({
      path: "/",
    });
  } else {
    getCodeData();
  }
};
onMounted(() => {
  getCodeData();
});
</script>
<template>
  <div class="login">
    <el-form class="form" :model="form" label-width="100px">
      <h3 class="form-title">运维管理</h3>
      <el-form-item label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item label="验证码" class="form-code flex">
        <el-input v-model="form.code" />
        <img :src="codeImg" @click="getCodeData" class="login-code-img" />
      </el-form-item>
      <el-button class="form-btn" type="primary" @click="submit">登录</el-button>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/loginbg.png") no-repeat;
  background-size: 100% 100%;
  .el-form {
    width: 400px;
    padding: 30px 20px;
    height: auto;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    right: 100px;
    transform: translate(0, -50%);
    .form-title {
      font-size: 24px;
      color: #333;
      text-align: center;
      height: 48px;
      line-height: 48px;
    }
    .form-btn {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
