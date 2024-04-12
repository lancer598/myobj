<template>
<div class="outer-class">
<div class="header-cls">
  <slot name="header"></slot>
</div>
<div class="body-cls">
  <slot name="body"></slot>
</div>
<div class="footer-cls">
  <slot name="footer"></slot>
</div>
</div>
</template>
<style lang="less" scoped>
@import url('./index.less');
</style>