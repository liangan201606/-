<template>
  <div class="UserTop">
    <!-- <img :src="user.data.profile.backgroundUrl" alt="" class="backPic"> -->
     <svg class="icon" aria-hidden="true" @click="play">
          <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <img src="../assets/网易云音乐-01.svg" alt="" class="backPic">
    <div class="User">
        <!-- <img :src="user.data.profile.avatarUrl" alt="" class="nickPic"> -->
        <!-- <p class="nickname">{{user.data.profile.nickname}}</p> -->
        <img src="../assets/cd.png" alt="" class="nickPic">
        <P>两岸</P>
        <div class="message_one">
          <span>关注:2</span>
          <span>粉丝:0</span>
          <span>Lv:3</span>
        </div>
        <div class="message_two">
          <span>IP属地:四川</span>
          <span>四川 成都</span>
          <span>村龄:3</span>
        </div>
    </div>

    <div class="UserConten">
      <p class="basc">基本信息</p>
      <p>村龄:3</p>
      <p>性别:女</p>
      <p>地区:四川成都</p>
    </div>

    <div class="loginOut">
      <button>退出登录</button>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['user'])
  },
  mounted(){
    console.log(this.user);
  },
  methods:{
    ...mapMutations(['updataUser'])
  }
}
</script>

<style lang="less" scoped>
.UserTop{
  width: 100%;
  height: 4rem;
  background-color: rgb(218, 196, 196);
  position: relative;
  .backPic{
    width:100%;
    height: 3rem;
  }
  .icon{
    width: 1rem;
    height: 1rem;
    fill:#fff;
    position:absolute;
    top:0.2rem;
    right:6.5rem
  }
  .User{
    width: 85%;
    height: 3rem;
    position: absolute;
    top: 3.5rem;
    left:0.5rem;
    padding-top:0.5rem;
    background-color:rgb(225, 224, 224);
    border-radius:0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .nickname{
      font-weight: 700;
      font-size: .4rem;
    }
    .nickPic{
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      position: absolute;
      bottom:2.5rem
    }
    span{
      margin-right: .8rem;
    }
  }
  .UserConten{
    width: 85%;
    height: 3rem;
    position: absolute;
    top:7rem;
    left:0.5rem;
    padding-left:0.2rem ;
    background-color:rgb(225, 224, 224);
    border-radius:0.20rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: space-around;
    .basc{
      font-weight: 700;
    }
  }
  .loginOut{
    // width: 80%;
    position: absolute;
    top:10.5rem;
    left:1.5rem;
    button{
      width: 4rem;
      height: 1rem;
      border:none;
      border-radius: .25rem;
    }
  }
}
</style>