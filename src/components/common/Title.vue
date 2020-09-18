<template>
  <div class="title-contain">
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
  position: relative;
  line-height: 44px;
  border: none;
  height: 44px;
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
