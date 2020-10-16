<template>
  <div id="apps">
    <keep-alive include='Home,birthVisit,SaleVisit,MemberRetention,CardVouchar'>
    <router-view />
    </keep-alive>

    <div class="home—footer-contain" v-show="isshowFooter">
      <ul>
        <li class="home-icon" @click="homebtn">
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
        <li
          @click="
            (activecolorI = false),
              (activecolorII = false),
              (activecolorIII = true)
          "
        >
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
      activecolorI: true,
      activecolorIII: false,
      activecolorII: false,
      colorFont: {
        color: "#33496c",
      },
      footerState: null,
      isshowFooter: true,
    };
  },
  components: {
    Home,
  },
  methods: {
    homebtn() {
      this.$router.push("/"), (this.activecolorI = true);
      this.activecolorII = false;
      this.activecolorIII = false;
    },
    posterBtn() {
      this.$router.push("/editposter"), (this.activecolorI = false);
      this.activecolorII = true;
      this.activecolorIII = false;
    },
  },
  mounted() {
    if (window.localStorage.getItem("footerState") == 1) {
      this.activecolorII = true;
      this.activecolorIII = false;
      this.activecolorI = false;
    } 
  },
  watch: {
    $route(newVal) {
      console.log(1111);
      let arr = [
        "/saveposter/memberpull",
        "/saveposter/fanspull",
        "/birthBack",
        "/salevisit",
        '/memberretention',
        '/cardvouchar'
      ];
      console.log(arr.indexOf(newVal.path));
      if (arr.indexOf(newVal.path) != -1) {
        this.isshowFooter = false;
      } else {
        this.isshowFooter = true;
      }
      console.log(newVal);
      if (newVal.path == "/home") {
        this.activecolorII = false;
        this.activecolorIII = false;
        this.activecolorI = true;
        // window.localStorage.setItem("footerState", 0);
      } else if (newVal.path == "/editposter") {
        // window.localStorage.setItem("footerState", 1);
        this.activecolorII = true;
        this.activecolorIII = false;
        this.activecolorI = false;
      }
      // arr.map((val) => {
      //   // val == newVal.path?
      //   if (val == newVal.path) {
      //     console.log(111)
      //     return this.isshowFooter = false;
      //   } else {
      //     console.log(222)
      //     this.isshowFooter = true;
      //   }
      // });
      // if (
      //   newVal.path ==
      //   ("/saveposter/memberpull" || "/saveposter/fanspull" || "/birthBack")
      // ) {
      //   this.isshowFooter = false;
      // }
      // console.log(newVal);
    },
  },
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);
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
