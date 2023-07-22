<template>
  <div class="UserTop">
    <img src="" alt="">
    <div class="message">
        <img src="" alt="" class="nickPic">
        <p class="nickname"></p>
        <div>
          <span>关注</span>
        <span>粉丝</span>
        <span>Lv</span></div>

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

<style>

</style>