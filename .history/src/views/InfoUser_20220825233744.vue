<template>
  <div class="UserTop">
    <!-- <img :src="user.data.profile.backgroundUrl" alt="" class="backPic"> -->
    <img src="../assets/网易云音乐-01.svg" alt="" class="backPic">
    <!-- <img src="../assets/cd.png" alt="" class="nickPic"> -->
    <div class="User">
        <!-- <img :src="user.data.profile.avatarUrl" alt="" class="nickPic"> -->
        <!-- <p class="nickname">{{user.data.profile.nickname}}</p> -->
        <img src="../assets/cd.png" alt="" class="nickPic">
        <P>两岸</P>
        <div class="message">
          <span>关注</span>
          <span>粉丝</span>
          <span>Lv</span>
        </div>
        <div>
          <span>IP属地</span>
          <span>city</span>
          <span>存龄</span>
        </div>
    </div>

    <div class="UserConten">
      <p>基本信息</p>
      <p>村龄</p>
      <p>性别</p>
      <p>地区</p>
    </div>

    <div class="UserList">
      
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
  .User{
    width: 85%;
    height: 4rem;
    position: absolute;
    top: 3.5rem;
    left:0.5rem;
    padding-top:0.5rem;
    background-color:rgb(197, 197, 197);
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
      // top:-5rem;
      bottom:3.5rem
    }
  }
  .UserConten{
    width: 85%;
    height: 4rem;
    position: absolute;
    top:8rem;
    background-color:rgb(197, 197, 197);
    border-radius:0.25rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: space-around;
  }
}
</style>