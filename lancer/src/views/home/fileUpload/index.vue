<template>
  <div class="outer-class">
    <el-upload
  class="avatar-uploader"
  :limit="2"
  :file-list="fileList"
  :show-file-list="true"
  :before-upload="beforeUpload"
  :http-request="handUpload"
  :on-preview="onPreview"
  :on-remove="onRemove"
  :on-success="onSuccess"
  :on-error="onError"
  :on-progress="onProgress"
  :on-change="onChange"
  :on-exceed="onExceed"
  >
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
</el-upload>
  </div>
  <myTips>
  <template #header>
    <div>
      上传文件注意事项
    </div>
  </template>
  <template #body>
    <div>
      <p>一.请求头中Content-Type属性设置为 multipart/form-form-data；</p>
      <p>二.1.提交方式：通过form表单提交。<a href="https://blog.csdn.net/xgangzai/article/details/106233214" target="_blank">详见csdn</a></p>
      <p style="text-indent:24px">2.获取文件file后， 
      let form = new FormData();
      form.append('file', file);
      这里form可以添加其他数据，作为我们上传的数据。
      </p>
    </div>
  </template>
  </myTips>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const fileList:any = ref([])
const imageUrl = ref('')
//覆盖默认上传行为
const handUpload = (file:any) => {
  console.log(file);
  
}
//上传之前
const beforeUpload = (file:any) => {
  console.log(file);
  
}
//点击文件列表中已上传的文件时的钩子
const onPreview = (file:any) => {
  console.log(file);
  
}
//删除文件的钩子
const onRemove = (file:any) => {
  console.log(file);
}
//文件上传成功时的钩子
const onSuccess = (file:any) => {
  console.log(file);
}
//文件上传失败时的钩子
const onError = (file:any) => {
  console.log(file);
}
//文件上传时的钩子
const onProgress = (file:any) => {
  console.log(file);
}
//文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
const onChange = (file:any) => {
  console.log(file);
}
//文件超出限制的钩子
const onExceed = (file:any) => {
  console.log(file);
}
</script>
<style scoped lang="less">
.outer-class{
 width: 100%;
 .avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>