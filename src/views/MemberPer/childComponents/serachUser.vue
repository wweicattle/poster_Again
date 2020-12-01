<template>
  <div>
    <van-search
      v-model="value"
      show-action
      label="地址"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
      onSearch(){
          console.log(222);
      }
  },
};
</script>

<style scoped lang="less">
</style>
