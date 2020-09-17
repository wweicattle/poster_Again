<template>
  <div class="poster-contains">
    <!-- 这是标题 -->
    <section>
      <Title>
        <div slot="header" class="title-header">生成海报</div>
      </Title>
    </section>
    <div class="line-content"></div>
    <!-- 这是海报设计内容 -->
    <div class="poster-content">
      <div class="poster-content-detail">
        <div class="poster-contenr-footer">
          <div class="poster-person">
            <div class="per-code">
              <img src="~assets/code.png" alt />
              <div class="per-componeny">
                <div>长按识别二维码</div>
                <div class="com-name">LILANZ利郎</div>
              </div>
            </div>

            <div class="per-actor">
              <div class="actor">
                <img src="~assets/avator.png" alt />
              </div>
              <div class="actorName">
                <!-- <img src="" alt /> -->
                李晓晓
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="poster-content-bottom"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam?</div>
    </div>
  </div>
</template>
<script>
import Title from "common/Title";
export default {
  name: "Poster",
  data: function () {
    return {};
  },
  components: {
    Title,
  },
};
</script>
<style lang="scss">
.title-header {
  background: #3c5b8d;
  color: #fff;
  font-size: 19px;
}
.line-content {
  height: 1px;
  background: #999;
}
.poster-content {
  background: #3c5b8d;
  height: 622px;
  position: relative;
  padding-top: 35px ;
  .poster-content-detail {
    left: 0;
    right: 0;
    width: 295px;
    height: 447px;
    margin: auto;
    background: #fff;
    .poster-contenr-footer {
      height: 100%;
      position: relative;
      .poster-person {
        padding: 0 26px;
        box-sizing: border-box;
        width: 295px;
        position: absolute;
        bottom: 30px;

        display: flex;
        justify-content: space-between;
        .per-code {
          display: flex;
          align-items: center;
          img {
            width: 54px;
            height: 54px;
          }
          .per-componeny {
            line-height: 1.5;
            margin-left: 10px;
            font-size: 12px;
            width: 84px;
            .com-name {
              font-weight: 1000;
            }
          }
        }
        .per-actor {
          text-align: center;
          width: 47px;
          img {
            width: 100%;
            height: 47px;
            border-radius: 50%;
          }
          .actorName {
            padding-top: 5px;
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }
  }
  .poster-content-bottom{
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 103px;
    background: #fff;
  }
}
</style>
