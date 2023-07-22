<template>
  <div class="UserTop">
    <!-- <img :src="user.data.profile.backgroundUrl" alt="" class="backPic"> -->
    <img src="./" alt="" class="backPic"></img>
    <div class="User">
        <!-- <img :src="user.data.profile.avatarUrl" alt="" class="nickPic"> -->
        <!-- <p class="nickname">{{user.data.profile.nickname}}</p> -->
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
  height: 6rem;
  background-color: rgb(252, 250, 250);
  position: relative;
  .backPic{
    width:100%;
    height: 4rem;
  }
  .User{
    width: 80%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0.01rem;
    background-color:#fff;
    border-radius:0.25rem ;
    .nickPic{
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }
    .nickname{
      font-weight: 700;
      font-size: .4rem;
  }
  }
}
</style>