<template>
  <div class="poster-contains">
    <!-- 这是标题 -->
    <section>
      <Title>
        <div slot="header" class="title-header">生成海报</div>
      </Title>
    </section>
    <div class="line-content"></div>
    <!-- <van-divider  hairline dashed :style="{  margin: '0 ' }"/> -->
    <!-- 这是海报设计内容 -->
    <div class="poster-content">
      <!-- poster上部 -->
      <div class="poster-content-detail">
        <div class="poster-contenr-footer">
          <!-- <video width="100%" height="400px" controls>
            <source src="../assets/qq.mp4" type="video/mp4" />
          </video> -->
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
      <!-- poster下部 -->
      <div class="poster-content-bottom">
        <div class="print-btn-contains">
          <div class="poster-oprate">操作设置</div>
          <div class="print—cicle-btn">
            <div class="btn-name">发布海报</div>
          </div>
        </div>

        <div class="change-btnPoster">
          <ul>
            <li>模板</li>
            <li>自定义</li>
          </ul>
        </div>
      </div>
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
  font-size: 17px;
}
.line-content {
  border-top: 1PX solid #000;

  // box-shadow: 0 0 0 0.5px #000;
}
.poster-content {
  background: #3c5b8d;
  height: 622px;
  position: relative;
  padding-top: 35px;
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
        bottom: 20px;

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
            object-fit: fill;
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
  .poster-content-bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 106px;
    background: #fff;
    padding-top: 7px;
    .print-btn-contains {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .print—cicle-btn {
      width: 62px;
      height: 62px;
      background: #1989fa;
      border-radius: 50%;
      color: #fff;
      position: relative;
      font-weight: 600;
      border: 2px solid #c8dbfa;
      margin-right: 15px;
      .btn-name {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 35px;
        height: 45px;
        line-height: 22px;
        text-align: center;
      }
    }
    .change-btnPoster {
      border-top: 1PX solid #000;
      position: absolute;
      bottom: 0;
      height: 31px;
      width: 100%;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          font-size: 15px;
          font-weight: 550;
          // width: 50%;
          &:nth-child(1) {
            color: #5192fc;
          }
        }
      }
    }
  }
}
</style>
