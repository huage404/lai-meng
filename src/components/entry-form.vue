<template>
  <div class="entry-form">
    <h1 class="title">报名立减<span>8888</span>元</h1>
    <div class="from">
      <div>
        <label for="username">姓名</label>
        <input type="text" id="username" v-model="from.name" />
      </div>
      <div>
        <label for="userphone">电话</label>
        <input type="text" id="userphone" v-model="from.mobile" />
      </div>
      <!--
        隐私协议
       <label>
         <input type="radio">
         <span>阅读协议</span>
      </label>-->
      <div>
        <button
          @click="submit"
          class="submit-btn button button-highlight button-box button-giant button-longshadow-right button-longshadow-expand"
        >
          立即获取优惠报价
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "entry-form",
  data() {
    return {
      from: {
        name: "", // 客户名
        mobile: "", // 电话

        communityName: "", // 团队

        areaNote: "https://htm.sofang.com/", // 域名

        cityId: "", // 城市 id
        sourceDetail: "", // url
      },
    };
  },
  methods: {
    submit() {
      axios({
        method: "post",
        url: "/api/topic/html/forminfo",
        headers: {
          "Content-Type": "application/json",
        },
        data: this.from,
      }).then((res) => {
        console.log(res);
        alert("保存成功");
      });
    },
    getSourceDetail() {
      let currentUrl = window.location.href;
      let currentUrlArr = currentUrl.split("/");
      let cityId = currentUrlArr[5].split("_");
      if (parseInt(cityId[1])) {
        this.from.cityId = cityId[1];
      }
      this.from.sourceDetail = currentUrl;
    },
  },
  mounted() {
    this.getSourceDetail();
  },
};
</script>

<style lang="scss" scoped>
@import "../style/reset.scss";
@import "../style/buttonStyle.css";

.entry-form {
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  .title {
    font-size: vw(24);
    color: #f6dabd;
    text-align: center;
    span {
      font-size: vw(68);
      padding: 0 px(10);
    }
  }

  .from {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: px(40);
    div {
      width: 100%;
      box-sizing: border-box;
      padding: 0 vw(20);
      margin-bottom: px(30);
      label {
        display: block;
        font-size: px(28);
        margin-bottom: px(20);
        color: #f6dabd;
      }
      input {
        width: 100%;
        height: vw(24);
        border-radius: px(8);
        outline: none;
        border: 1px solid #f6dabd;
      }
      .submit-btn {
        width: 100%;
        height: vw(24);
        line-height: vw(24);
        margin-top: vw(20);
        border-radius: vw(2);
        animation: zoom 0.6s ease-in-out infinite;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .entry-form {
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    .title {
      font-size: vw(48);
      color: #f6dabd;
      text-align: center;
      span {
        font-size: vw(88);
        padding: 0 px(10);
      }
    }

    .from {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: px(40);
      div {
        width: px(680);
        margin-bottom: px(30);
        label {
          display: block;
          font-size: px(28);
          margin-bottom: px(20);
          color: #f6dabd;
        }
        input {
          width: 100%;
          height: px(68);
          border-radius: px(8);
          outline: none;
          border: 1px solid #f6dabd;
        }
        .submit-btn {
          width: 100%;
          height: px(88);
          line-height: px(88);
          margin-top: px(20);
          font-size: px(36);
          border-radius: px(8);
          animation: zoom 0.6s ease-in-out infinite;
        }
      }
    }
  }
}

@keyframes zoom {
  100% {
    transform: scale(0.95);
  }
}
</style>
