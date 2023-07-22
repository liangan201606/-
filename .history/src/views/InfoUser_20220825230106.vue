<template>
  <div class="UserTop">
    <img :src="user.data.profile.backgroundUrl" alt="">
    <div class="User">
        <img :src="user.data.profile.avatarUrl" alt="" class="nickPic">
        <p class="nickname">{{user.data.profile.nickname}}</p>
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
  heigth
  .User{

  }
}
</style>