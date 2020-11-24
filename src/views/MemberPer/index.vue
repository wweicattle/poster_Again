<template>
  <div class="member-contains">
    <van-tabs
      v-model="activeName"
      color="#5192fc"
      swipeable
      @click="tabClickBtn"
      sticky
      animated
      class="tabs-content"
      @scroll="scrollTabBtn"
      ref="tabsRef"
    >
      <van-tab title="全部" name="a" ref="allPerRef"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        voluptatem excepturi dolorum aspernatur nesciunt porro sunt officiis
        consectetur nam vel? Quibusdam quaerat, id ipsam sapiente, ea sit
        corporis commodi dolor laboriosam nam, sint veniam doloremque doloribus
        facere et ab cumque repellendus illum soluta temporibus impedit! Aliquid
        debitis ea doloribus, repudiandae ad qui earum? Accusamus ad a
        reiciendis, repudiandae corporis maiores quia assumenda! Error animi
        adipisci amet fugit explicabo accusamus aliquid hic possimus,
        perspiciatis nemo voluptas placeat incidunt eligendi a ad iste
        laudantium ab illum. Ipsam architecto necessitatibus suscipit,
        consequatur quae tempore neque temporibus expedita odit. Dignissimos at
        explicabo non laudantium incidunt deleniti fugiat impedit quae eaque
        neque itaque eligendi necessitatibus excepturi, provident illum.
        Expedita veritatis excepturi fugiat quam, sint corrupti eos ab? Libero,
        esse. Enim doloremque, dicta, id numquam odio natus voluptatibus,
        aliquam quo quis tenetur nostrum dignissimos! Dignissimos totam minus
        tempora nostrum repellendus maxime velit officia veritatis quasi! Illum
        reiciendis repellat fugiat, officia iure quisquam impedit totam
        reprehenderit laudantium incidunt velit odit rem quod? Rem, itaque.
        Ipsum aut soluta sequi, doloribus repudiandae consequuntur officia.
        Reprehenderit, accusantium veritatis, ipsam, maiores assumenda dolores
        nemo earum vel neque sint voluptatibus. Excepturi omnis corrupti natus
        quo enim delectus, velit voluptas doloremque dolorem est doloribus
        exercitationem modi, aspernatur fuga eaque illum! Eveniet exercitationem
        similique eligendi! Iusto perferendis nostrum eligendi ex temporibus
        atque quis rem, odit similique tenetur perspiciatis ipsam porro, cumque
        pariatur, voluptatibus expedita non laudantium! Eaque, alias modi.
        Eligendi ab repellat nemo quos, eaque consequatur animi modi nostrum
        laborum. Id ea aperiam vitae molestias, expedita est sequi numquam error
        praesentium repellat, consequatur ullam doloremque suscipit in
        repudiandae soluta voluptas neque obcaecati placeat sint nihil
        recusandae laborum commodi. Dolores debitis laboriosam nisi quibusdam
        nemo minima earum adipisci ab temporibus, modi amet aliquam suscipit
        nesciunt recusandae dicta quo ea accusamus eveniet saepe iste cum illo.
        Vitae nesciunt neque ipsum magnam minima reiciendis accusantium eius
        tempore fugiat praesentium repudiandae, suscipit, blanditiis doloremque
        doloribus aliquid recusandae laborum pariatur exercitationem, non
        perferendis quis. Officia molestias voluptatem eligendi architecto
        sapiente. Dignissimos atque culpa nemo magni ullam aperiam nobis sequi,
        ab facere quibusdam magnam at ipsa quae eaque accusamus amet. Aliquid,
        labore qui? Quo, ratione delectus. Debitis, voluptatum veniam? Iusto,
        ipsum cumque nam molestiae ex, eius maxime deleniti repellendus eos quod
        eaque voluptatum nostrum optio rerum praesentium cum delectus unde
        corporis! Perferendis ex exercitationem nesciunt dolorem asperiores
        error sint ut enim. Cum cumque odit voluptatem iste tenetur, placeat
        inventore, accusantium accusamus sit quae quia expedita modi atque
        recusandae sint harum quis dignissimos? Dolorum, quisquam. Quos vel
        nulla culpa doloremque cumque ratione in necessitatibus veniam
        voluptatum quisquam laudantium sapiente assumenda quas quae at
        reiciendis expedita, possimus provident fugit officiis natus? Accusamus
        quod veniam, harum modi repudiandae eos ipsam voluptate vero non
        repellat laboriosam quos enim adipisci mollitia dolore iusto tempore,
        sint vel accusantium temporibus dicta deleniti est! Suscipit, velit
        nisi! Sed optio commodi dolorum iusto beatae eum, laudantium recusandae
        sequi! Quas a laudantium magnam vero. Nam incidunt nemo repellat
        repellendus dicta quos quaerat ex quis fugiat quas, harum laboriosam
        alias sint in illo quasi! Culpa numquam nihil non voluptatem excepturi
        harum distinctio, quibusdam nobis incidunt nulla iure similique illum,
        hic aut esse quasi quod modi vitae praesentium iusto veniam? Explicabo
        amet mollitia deleniti nam laboriosam aliquid? Fugiat consequatur quae,
        quo porro vitae iste id laudantium, dolores nam impedit nobis obcaecati
        saepe mollitia? Dicta fuga esse totam cumque, consequatur enim vitae?
        Dolorem est temporibus earum facere, totam natus ullam autem, vel sit
        reprehenderit exercitationem, quas porro accusantium neque consequatur
        maxime maiores. Sequi sit, voluptatem optio unde quidem minima magnam
        omnis dolorum dolorem. Quae, error. Illo sint, rerum, velit dolorum odio
        doloribus expedita possimus omnis optio ullam assumenda inventore
        necessitatibus minus aliquam. Quia beatae corporis consequatur vitae
        laborum sit. Qui eius vero doloribus eveniet sed itaque illum incidunt,
        numquam laboriosam provident, vitae iste ipsa asperiores labore. Error
        quibusdam, reprehenderit fuga labore eligendi quod quo eveniet debitis
        quae reiciendis, eum dolorem ab corrupti delectus? Facere incidunt eum
        ducimus rem fuga excepturi sunt nam, totam laudantium accusamus
        aspernatur quia commodi magnam veritatis, magni aperiam consequatur,
        voluptate ullam iusto ad dolor obcaecati corporis perspiciatis illum!
        Reprehenderit, voluptates ducimus enim dignissimos consequatur eum
        placeat, laudantium hic inventore quibusdam, quas totam? Exercitationem
        eum aut officiis aliquid aspernatur possimus ratione dolorem quam
        excepturi natus sint amet error enim maiores perspiciatis aperiam,
        illum, harum nulla. Rerum porro optio nihil provident vero asperiores
        error ratione vitae deleniti itaque quibusdam reiciendis aliquid amet
        eos, culpa odio! Ipsam corrupti eum atque aperiam deserunt delectus quia
        ab dicta excepturi sed beatae, harum voluptates inventore molestias
        consequuntur numquam quos fugiat incidunt molestiae soluta. Odit dolores
        velit ut autem, excepturi quia officia nemo ex eveniet repellat. Porro,
        assumenda! Accusantium recusandae, nam aliquid molestiae atque eius
        aperiam ad labore voluptatum iure eligendi nesciunt nisi ipsum, officia
        porro dignissimos. Saepe corrupti exercitationem esse nisi odit nemo
        excepturi nulla eius repudiandae est, iste error possimus, reiciendis
        modi beatae neque. Repellat, illum explicabo alias culpa deserunt at
        ratione ad minus, corrupti, vitae aliquid non nostrum modi voluptatibus?
        Culpa provident voluptate ducimus nemo, ut vel, labore enim repellat
        illo unde rerum fuga ea sint iste earum possimus vitae, esse laborum
        officia error qui doloremque ipsum? Voluptate eos ducimus natus! Non
        voluptates perferendis odio distinctio natus porro ducimus nemo fugiat
        consequuntur cum aspernatur laudantium dolores, necessitatibus nulla
        expedita amet voluptas iusto repellendus temporibus suscipit, reiciendis
        ut sint quae quas? Consectetur repudiandae non ad accusantium velit unde
        officiis maiores nam veritatis, excepturi incidunt eaque cupiditate
        consequatur cumque? Excepturi hic quis reprehenderit earum quo sapiente
        ullam nam quibusdam. Veritatis error ea voluptatem hic iste nostrum
        possimus porro ullam maxime sed qui, nesciunt perspiciatis, expedita
        accusamus reiciendis cumque repellendus! Labore quibusdam aliquid
        dignissimos facilis maiores numquam fuga laborum odio officia
        voluptatibus, ducimus blanditiis hic temporibus ullam quae quia eum
        magni rem veritatis ipsum sunt! Voluptates sit a debitis est, similique
        delectus quasi obcaecati unde laboriosam molestias culpa rem
        consectetur, earum, eveniet rerum possimus pariatur asperiores? Sit
        corrupti harum voluptate quae. Voluptas velit ratione aspernatur,
        mollitia sapiente, animi fugiat reiciendis iusto ab excepturi quos a
        qui?</van-tab
      >
      <van-tab title="公众号" name="b">公众号</van-tab>
      <van-tab title="企业号" name="c">企业员</van-tab>
      <van-tab>
        <template #title name="d">
          <img
            src="~assets/img/memberPer/icon_search_black.png"
            class="search"
            alt=""
        /></template>
      </van-tab>
      <van-tab>
        <template #title name="e">
          <img src="~assets/img/memberPer/icon_filter.png" alt=""
        /></template>
      </van-tab>
    </van-tabs>
    <van-popup
      v-model="showPop"
      position="right"
      :style="{ height: '100%', width: '70%' }"
    >
      <div class="tab-content">
        <div class="tab-name">品牌</div>
        <ul>
          <li class="active-item">
            包邮
            <div class="active-icon"></div>
            <span class="active-real-icon">
              <van-icon name="cross" />
            </span>
          </li>
          <li>天猫</li>
          <li>淘金币讨钱</li>
          <li>消费者保障</li>
          <li>货到付款</li>
          <li>公益宝贝</li>
          <li>通用排序</li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-name">品牌</div>
        <ul>
          <li>包邮</li>
          <li>天猫</li>
          <li>淘金币讨钱</li>
          <li>消费者保障</li>
          <li>货到付款</li>
          <li>公益宝贝</li>
          <li>通用排序</li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-name">品牌</div>
        <ul>
          <li>包邮</li>
          <li>天猫</li>
          <li>淘金币讨钱</li>
          <li>消费者保障</li>
          <li>货到付款</li>
          <li>公益宝贝</li>
          <li>通用排序</li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-name">品牌</div>
        <ul>
          <li>包邮</li>
          <li>天猫</li>
          <li>淘金币讨钱</li>
          <li>消费者保障</li>
          <li>货到付款</li>
          <li>公益宝贝</li>
          <li>通用排序</li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-name">品牌</div>
        <ul>
          <li>包邮</li>
          <li>天猫</li>
          <li>淘金币讨钱</li>
          <li>消费者保障</li>
          <li>货到付款</li>
          <li>公益宝贝</li>
          <li>通用排序</li>
        </ul>
      </div>
      <div class="reload-confirm">
        <div class="btn-contain">
          <span class="reload">重置</span> <span class="confirm">确定</span>
        </div>
      </div>
    </van-popup>
    <div class="load-more" @click="clickLoadMoreBtn">点击加载更多....</div>
    <div class="all-selct">
      <div class="all-item">
        <van-checkbox v-model="selectAll">全选(已选2个)</van-checkbox>
      </div>
      <div class="reload-confirm">
        <div class="btn-contain">
          <span class="reload">发海报</span> <span class="confirm">发卡券</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      activeName: "a",
      state: "a",
      showPop: false,
      selectAll:false
    };
  },
  created() {
    document.title = "会员列表";
  },
  mounted() {},
  methods: {
    scrollTabBtn(index) {
      console.log(this.$refs.tabsRef.$el.clientHeight);
      console.log(index);
    },
    clickLoadMoreBtn() {
      console.log(this.$refs.allPerRef.$el);

      let div = document.createElement("div");
      div.innerText = "wuweinsufuddsfuisfshfuisbdfsfsufuusfsfbusfb";
      this.$refs.allPerRef.$el.appendChild(div);
    },
    tabClickBtn(val) {
      if (typeof val == "string") {
        this.state = val;
      }
      if (this.activeName == 3 || this.activeName == 4) {
        this.$nextTick(() => {
          this.activeName = this.state;
        });
        this.showPop = true;
      }
    },
  },
};
</script>

<style  lang="scss">
.member-contains {
  font-size: 16px;
  height: 100%;
  .tab-search {
    // height: 48.5px;
    // line-height: 48.5px;
    position: absolute;
    right: 10px;
    top: 0px;
    img {
      width: 20px;
      margin-right: 20px;
    }
  }
  .search {
    padding-left: 60px;
  }
  .van-popup {
    .tab-content {
      padding: 10px;
      .tab-name {
        font-size: 14px;
      }
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
        margin: 10px 0;
        border-bottom: 1px solid #ccc;
        li {
          position: relative;
          font-size: 13px;
          border-radius: 2px;
          height: 36px;
          background: #f7f7f7;
          width: 30%;
          line-height: 36px;
          margin-bottom: 10px;
          overflow: hidden;
          &.active-item {
            background: #fdeae1;
            color: #f97327;
            .active-icon {
              position: absolute;
              right: 0;
              bottom: -26px;
              width: 0;
              height: 0;
              border-top: 24px solid transparent;
              border-bottom: 23px solid transparent;
              border-right: 30px solid #f97327;
            }
            .active-real-icon {
              line-height: 0;
              color: #fff;
              font-size: 8px;
              position: absolute;
              right: 0;
              bottom: 0;
              z-index: 1000;
            }
          }
        }
      }
    }
    .reload-confirm {
      position: sticky;
      position: -webkit-sticky;
      width: 100%;
      right: 0;
      bottom: 0;
      height: 60px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .btn-contain {
        // border: 1px solid red;
        margin-right: 10px;
        border-radius: 20px;
        width: 170px;
        height: 38px;
        color: #fff;
        display: flex;
        line-height: 38px;
        text-align: center;
        overflow: hidden;
        .confirm {
          width: 50%;
          background: #fb9f30;
        }
        .reload {
          width: 50%;
          background: #f97327;
        }
      }
    }
  }
  .all-selct {
    background: #fff;
    width: 100%;
    // border: 1px solid red;
    position: fixed;
    bottom: 46px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    .all-item {
      display: flex;
      align-items: center;
      // line-height: 50px;
    }
    .reload-confirm {
      height: 50px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      align-items: center;
      font-size: 12px;
      .btn-contain {
        border: 1px solid #33496c;
        border-radius: 20px;
        width: 170px;
        height: 32px;
        color: #33496c;
        display: flex;
        line-height: 32px;
        text-align: center;
        overflow: hidden;
        .confirm {
          width: 50%;
          // color: #33496c;
        }
        .reload {
          // color: #33496c;
          width: 50%;
          border-right: 1px solid #33496c;
          // background: #33496C;
        }
      }
    }
  }
}
.load-more {
  padding: 20px;
  text-align: center;
  margin-bottom: 96px;
}
</style>
