<template>
  <myTips>
    <template #header>
      <div>文件下载注意事项</div>
    </template>
    <template #body>
      <div>
        <h1>一.请求头中responseType属性设置为 blob 或者其他'arraybuffer', 'document', 'json', 'text', 'stream'；</h1>
        <h1>
          二.以excel文件为例</h1>
          <p>const blob = new Blob([res],{ type: 'application/vnd.ms-excel' });</p>
          <p>const url = URL.createObjectURL(blob); </p>
          <p>const a =document.createElement('a'); </p>
          <p>a.style.display = 'none';</p>
          <p>a.href = url; </p>
          <p>a.download = '文件名'</p>
          <p>document.body.appendChild(a); </p>
          <p>a.click(); </p>
          <p>document.body.remove(a);</p>
          <p>URL.revokeObjectURL(src);</p>
          <p>上述不行下载文件可用下方法link.setAttribute('download', '文件名' + '.xlsx');</p>
        <p></p>
        <h1>三.图片下载预览；</h1>
          <p>1.const blob = new Blob([res],{ type: 'application/vnd.ms-excel' });</p>
          <p>const url = URL.createObjectURL(blob); </p>
          imgSrc.value = url;
          <p>2.// 创建一个文件的加载器</p>
            <p> let reader = new FileReader()</p>
            <p> // 指定加载的文件和加载的类型</p>
            <p> // base64</p>
            <p> // 将文件读取成 base64 格式</p>
            <p> reader.readAsDataURL(data.file)</p>

            <p> // 文件读取完成后的回调</p>
            <p> reader.onload = () => {</p>
            <p> // 将读取成功后的 base64 赋值给 imageUrl</p>
            <p> this.imageUrl = reader.result</p>
            <p> this.formData.img = reader.result</p>}
            <p>这种方法同样用于上传文件时的预览</p>
      </div>
    </template>
  </myTips>
</template>
<script setup lang="ts"></script>
<style scoped></style>
