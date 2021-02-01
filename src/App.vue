<template>
  <div id="app">
    <img :src="require('./assets/images/bg_01.jpg')" alt="">
    <img :src="require('./assets/images/bg_02.jpg')" alt="">
    <entry-form></entry-form>
    <img :src="require('./assets/images/bg_03.jpg')" alt="">
    <img :src="require('./assets/images/bg_04.jpg')" alt="">
    <img :src="require('./assets/images/bg_05.jpg')" alt="">
    <img :src="require('./assets/images/bg_06.jpg')" alt="">
    <img :src="require('./assets/images/bg_07.jpg')" alt="">
    <div class="call">
      <div class="call-box">
        <div>
          <p class="title">红盘推荐【和昌·红谷滩8号】</p>
          <p class="text">红谷央境·地铁上盖·80万方更新综合体</p>
        </div>
        <a href="tel:15797782051">即刻咨询</a>
      </div>
    </div>
  </div>
</template>

<script>

import entryForm from './components/entry-form'

export default {
  name: 'App',
  components: {entryForm}
}
</script>

<style lang="scss">
@import "./style/reset.scss";

$max-width: 1000px;

#app{
  max-width: $max-width;
  margin: 0 auto;
  background-color: #ae1716;

  img{
    width: 100%;
    display: block;
  }
}
.call{
  width: $max-width;
  height: px(150);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  padding: 0 vw(20);

  .call-box{
    background: rgba(255,255,255,6);
    border-radius: px(8);
    height: px(130);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 vw(26);

    div{
      .title{
        font-size: px(30);
        font-weight: bold;
      }
      .text{
        font-size: px(20);
        color: #717171;
      }
    }

    a{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: px(22);
      color: #fff;
      width: px(150);
      height: px(70);
      background: #c1120d;
      border-radius: px(8);
      text-decoration: none;
    }
  }
}
@media screen and (max-width: 750px) {
  .call{
    width: 100%;
    height: vw(150);
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
    padding: 0 vw(20);

    .call-box{
      background: rgba(255,255,255,6);
      border-radius: vw(8);
      height: vw(130);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 vw(26);

      div{
        .title{
          font-size: vw(30);
          font-weight: bold;
        }
        .text{
          font-size: vw(20);
          color: #717171;
        }
      }

      a{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: vw(22);
        color: #fff;
        width: vw(150);
        height: vw(70);
        background: #c1120d;
        border-radius: vw(8);
        text-decoration: none;
      }
    }
  }
}

</style>
