<template>
  <div class="title-contain" style="borderBottom: 1px solid #fff;">
    <div class="icon-left">
      <slot name="iconLeft">
        <van-icon name="arrow-left" />
      </slot>
    </div>
    <div class="title-header">
      <slot name="header"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Title",
  data: function () {
    return {};
  },
};
</script>
<style lang="scss">
.title-contain {
  top: 0;
  width: 100%;
  position: fixed;
  line-height: 43px;
  height: 43px;
  z-index: 10;
  
  .title-header {
    text-align: center;
  }
  .icon-left {
    position: absolute;
    left: 0;
    color: #fff;
    font-size: 22px;
  }
}
</style>
