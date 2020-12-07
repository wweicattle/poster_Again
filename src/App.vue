<template>
  <div id="apps">
    <keep-alive include="Home,birthVisit,SaleVisit,MemberRetention,CardVouchar,tab">
      <router-view />
    </keep-alive>

    <div class="home—footer-contain" v-show="isshowFooter">
      <ul>
        <li @click="homebtn">
          <img src="~assets/img/home/home.png" v-if="!activecolorI" />
          <img src="~assets/img/home/home3.png" v-else /><span
            :style="activecolorI ? colorFont : ''"
            >首页</span
          >
        </li>
        <li @click="posterBtn">
          <img src="~assets/img/home/jiahao1.png" v-if="!activecolorII" />
          <img src="~assets/img/home/jiahao2.png" v-else /><span
            :style="activecolorII ? colorFont : ''"
            >海报</span
          >
        </li>
        <li @click="memberBtn">
          <img src="~assets/img/home/huiyuan1.png" v-if="!activecolorIII" />
          <img src="~assets/img/home/huiyuan2.png" v-else /><span
            :style="activecolorIII ? colorFont : ''"
            >会员</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Home from "views/home/index.vue";
export default {
  name: "App",
  data: function () {
    return {
      activecolorI: false,
      activecolorIII: false,
      activecolorII: false,
      colorFont: {
        color: "#33496c",
      },
      isshowFooter: true,
    };
  },
  components: {
    Home,
  },
  methods: {
    homebtn() {
      this.$router.push("/");
      this.activecolorI = true;
      this.activecolorII = false;
      this.activecolorIII = false;
      window.localStorage.setItem("footerState", 1);
    },
    posterBtn() {
      this.$router.push("/editposter");
      this.activecolorI = false;
      this.activecolorII = true;
      this.activecolorIII = false;
      window.localStorage.setItem("footerState", 2);
    },
    memberBtn() {
      this.$router.push("/memberPer");
      this.activecolorI = false;
      this.activecolorII = false;
      this.activecolorIII = true;
      window.localStorage.setItem("footerState", 3);
    },
  },
  mounted() {
    switch (Number(window.localStorage.getItem("footerState"))) {
      case 1:
        this.activecolorI = true;
        break;
      case 2:
        this.activecolorII = true;
        break;
      case 3:
        this.activecolorIII = true;
        break;
      default:
        console.log(Number(window.localStorage.getItem("footerState")));
        this.activecolorI = true;
        break;
    }
  },
  watch: {
    $route(newVal) {
      let arr = [
        "/saveposter/memberpull",
        "/saveposter/fanspull",
        "/birthBack",
        "/salevisit",
        "/memberretention",
        "/cardvouchar",
        "/serachUser"
      ];
      if (arr.indexOf(newVal.path) != -1) {
        this.isshowFooter = false;
      } else {
        this.isshowFooter = true;
      }
    },
  },
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);
html,
body {
  height: 100%;
  background: #f7f7f7;
}
#apps {
  .home—footer-contain {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 46px;
    background: #fff;
    ul {
      height: 44px;
      display: flex;
      justify-content: space-around;
      height: 100%;
      li {
        display: flex;
        flex-direction: column;
        font-size: 10px;
        align-items: center;
        justify-content: center;
        height: 100%;
        img {
          width: 20px;
          height: 20px;
          margin-bottom: 5px;
        }
        .active {
          color: #33496c;
        }
      }
      // .active{
      //   img{
      //     background: rgba(81, 146, 252, 1);

      //   }
      // }
    }
  }
  // background: #33496c;
  // height: 800px;
}
</style>
