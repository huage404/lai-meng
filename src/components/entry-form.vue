<template>
  <div class="entry-form">
    <h1 class="title">报名立减<span>8888</span>元</h1>
    <div class="from">
      <div>
        <label for="username">姓名</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="userphone">电话</label>
        <input type="text" id="userphone" v-model="userphone">
      </div>
      <!--
        隐私协议
       <label>
         <input type="radio">
         <span>阅读协议</span>
      </label>-->
      <div>
        <button @click="alert" class="submit-btn button button-highlight button-box button-giant button-longshadow-right button-longshadow-expand">立即获取优惠报价</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "entry-form",
  data(){
    return {
      username: '',
      userphone: ''
    }
  },
  methods:{
    alert(){
      //https://htm.sofang.com/data/topic/diy/phone?id=24
      axios.get(`/api/data/topic/diy/phone?id=24&formVal=${this.userphone}`).then(()=>{
        alert('保存成功')
      })

      /*axios.post(`/teamBuyTe`,{
        data: {
          phone: 15461321512,
          _token: 'hEui8t0kAL5EEw9VYNK93dzKGmeFDXxN40wB5Wte',
          communityId: 304135,
          tipType: 1,
          id: 7328,
          text: '线上团购立减15888元',
        }
      }).then(()=>{
        alert('保存成功')
      })*/

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/reset.scss";
@import "../style/buttonStyle.css";


.entry-form{
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  .title{
    font-size: vw(24);
    color: #f6dabd;
    text-align: center;
    span{
      font-size: vw(68);
      padding: 0 px(10);
    }
  }

  .from{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: px(40);
    div{
      width: 100%;
      box-sizing: border-box;
      padding: 0 vw(20);
      margin-bottom: px(30);
      label{
        display: block;
        font-size: px(28);
        margin-bottom: px(20);
        color: #f6dabd;
      }
      input{
        width: 100%;
        height: vw(24);
        border-radius: px(8);
        outline: none;
        border: 1px solid #f6dabd;
      }
      .submit-btn{
        width: 100%;
        height: vw(24);
        line-height: vw(24);
        margin-top: vw(20);
        border-radius: vw(2);
        animation: zoom .6s ease-in-out infinite;
      }
    }

  }
}

@media screen and (max-width: 750px){
  .entry-form{
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    .title{
      font-size: vw(48);
      color: #f6dabd;
      text-align: center;
      span{
        font-size: vw(88);
        padding: 0 px(10);
      }
    }

    .from{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: px(40);
      div{
        width: px(680);
        margin-bottom: px(30);
        label{
          display: block;
          font-size: px(28);
          margin-bottom: px(20);
          color: #f6dabd;
        }
        input{
          width: 100%;
          height: px(68);
          border-radius: px(8);
          outline: none;
          border: 1px solid #f6dabd;
        }
        .submit-btn{
          width: 100%;
          height: px(88);
          line-height: px(88);
          margin-top: px(20);
          font-size: px(36);
          border-radius: px(8);
          animation: zoom .6s ease-in-out infinite;
        }
      }

    }
  }
}


@keyframes zoom {
  100%{
    transform: scale(.95);
  }
}
</style>
