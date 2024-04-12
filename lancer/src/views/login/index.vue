<template>
  <div class="container">
    <div class="outer-class">
      <div class="login-class">
        <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="50px" class="demo-ruleForm" :hide-required-asterisk="true">
          <div class="btn-class">
            <div>机密管理系统登录界面</div>
          </div>
          <el-form-item label="账号:" prop="userName">
            <el-input v-model="loginForm.userName" />
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input v-model="loginForm.password" type="password" />
          </el-form-item>
            <div class="btn-class">
              <el-button type="primary" @click="submitForm(loginFormRef)">登录</el-button>
              <el-button @click="resetForm(loginFormRef)">重置</el-button>
            </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { FormInstance } from 'element-plus';
import { useUserStore } from '@/stores/modules/user';

const useStore = useUserStore();

const loginForm = reactive({
  userName: '',
  password: '',
})

const loginFormRef = ref()

const rules = reactive({
  userName:[{ required: true, message: '请输入账号', trigger: 'blur' },],
  password:[{ required: true, message: '请输入密码', trigger: 'blur' },]
})

const submitForm = async(formEl:FormInstance) => {
  if (!formEl) return
    await formEl.validate(async (valid, fields) => {
    if (valid) {
      useStore.login(loginForm)
    }
  })
}

const resetForm = async(formEl:FormInstance) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>
<style lang="less" scoped >
.container {
  .outer-class {
    width: 100%;
    height: 100%;
    position: relative;
    background: url(@/assets/picture/bgdpic.jpg) no-repeat 0 0/100% 100%;

    .login-class {
      width: 500px;
      height: 300px;
      background-color: rgb(240, 239, 240);
      border-radius: 20px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      .el-form {
        width: 80%;
        .el-form-item {
          margin-top: 30px;
        }
        .btn-class{
          display: flex;
          justify-content: space-around;
          font-size: 20px;
        }
      }

    }
  }
}
</style>