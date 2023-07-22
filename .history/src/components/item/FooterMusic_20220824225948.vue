<template>
  <div class="footerMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="songList[songListIndex].al.picUrl" alt="">
      <div>
        <p>{{songList[songListIndex].al.name}}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon" aria-hidden="true" v-if="isBtnShow" @click="play">
          <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" v-else @click="play">
          <use xlink:href="#icon-zanting-copy"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Todo-List"></use>
      </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${songList[songListIndex].id}.mp3 `"></audio>
    <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%',width:'100%' }">
      <MusicDetial :musicList="songList[songListIndex]" :isBtnShow="isBtnShow" :play="play"></MusicDetial>
    </van-popup>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import MusicDetial from './MusicDetial.vue';
export default {
  data(){
    return {
      interVal:0
    }
  },
  computed:{
    ...mapState(['songList','songListIndex','isBtnShow','detailShow'])
  },
  mounted() {
    // console.log(this.$refs);
    // // 触发获取歌词函数
    this.$store.dispatch("getLyric",this.songList[this.songListIndex].id)
    this.updateTime()
  },
  updated(){
    // 触发获取歌词函数
    this.$store.dispatch("getLyric",this.songList[this.songListIndex].id)
  },
  methods: {
    play:function(){
      // 判断音乐是否播放
      if(this.$refs.audio.paused){
        // 播放
        this.$refs.audio.play()
        this.updateIsBtnShow(false)
        // 播放调用函数进行传值
        this.updateTime()
      }else{
        // 暂停
        this.$refs.audio.pause()
        this.updateIsBtnShow(true)
        // 清除定时器
        // clearInterval(this.interVal)
        clearInterval
      }
    },
    updateTime:function(){
      // 定时器更新歌曲播放的当前时间
      this.interVal = setInterval(() => {this.updataCurrentTime(this.$refs.audio.currentTime)},1000)
    },
    ...mapMutations(['updateIsBtnShow','updateDetailShow','updataCurrentTime'])
  },
  watch:{
    songListIndex:function(){
      // 监听下表如果下标发生改变就让其自动播放音乐
      this.$refs.audio.autoplay = true
      if(this.$refs.audio.paused){
        // 改变图标
        this.updateIsBtnShow(false)
      }
    },
    songList:function(){
      if(this.isBtnShow){
         this.$refs.audio.autoplay = true
         this.updateIsBtnShow(false)
      }
    }
  },
  components:{
    MusicDetial
  }
}
</script>

<style lang="less" scoped>
.footerMusic{
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom:0;
  border-top:1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft{
    width:60%;
    height:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
      width:1rem;
      height:1rem;
      border-radius: 50%;
    }
  }
  .footerRight{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>