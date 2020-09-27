<template>
  <div id="members-contain">
    <ve-line
      :data="chartData"
      :height="canvasheight"
      :settings="chartSettings"
      :legend-visible="false"
    ></ve-line>
  </div>
</template>
<script>
import TitleHeader from "components/common/Title";
import { requestHomeInfo } from "network/home";
export default {
  name: "Home",
  data: function () {
    this.chartSettings = {
      //   stack: { 用户: ["访问用户", "下单用户"] },
      area: true,
    };
    return {
      canvasheight: "300px",
      isshowMemberVisable: false,
      chartData: {
        columns: ["日期", "拉新人数"],
        rows: [
          { 日期: "7/2", 拉新人数: 1 },
          { 日期: "7/3", 拉新人数: 1 },
          { 日期: "7/4", 拉新人数: 1 },
          { 日期: "7/5", 拉新人数: 3 },
          { 日期: "7/6", 拉新人数: 2 },
          { 日期: "7/7", 拉新人数: 1 },
        ],
      },
    };
  },
  components: {
    TitleHeader,
  },
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style lang="scss" scoped>
#members-contain {
  height: 667px;
}
</style>
