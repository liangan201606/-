<template>
  <div class="musicDetail">
    <img :src="musicList.al.picUrl" alt="" class="bgimg">
    <div class="header">
      <div class="headerLeft">
        <svg class="icon" aria-hidden="true" @click="updateDetailShow">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="song">
          <Vue3Marquee class="Name">{{musicList.al.name}}</Vue3Marquee>
          <span class="Author" v-for="item in musicList.ar" :key="item">{{item.name}}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyoujiantou"></use>
          </svg>
        </div>
      </div>
      <div class="headerRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>

    <div class="content" v-show="isLyricShow">
      <img src="../../assets/needle-ab.png" alt="" :class="{ img_needle_active: !isBtnShow, img_needle: isBtnShow}">
      <img src="../../assets/cd.png" alt="" class="img_cd" >
      <img :src="musicList.al.picUrl" alt="" class="img_ar" :class="{img_ar_active:!isBtnShow,img_ar_paused:isBtnShow}">
    </div>
    <div class="lyricList">
      {{lyricList.lyric}}
    </div>

    <div class="footer">
      <div class="footerTop">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aixin"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai-wenjianxiazai-07"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-changpianji"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-_xiaoxi"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao-44"></use>
        </svg>
      </div>
      <div class="footerConten">
        <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
      </div>
      <div class="footerBottom">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-24gl-repeat2"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-shangyishoushangyige"></use>
        </svg>
        <svg class="bofang" aria-hidden="true" v-if="isBtnShow" @click="play">
          <use xlink:href="#icon-bofanganniu"></use>
        </svg>
        <svg class="bofang" aria-hidden="true" v-else @click="play">
          <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-xiayigexiayishou"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Todo-List"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations,mapState } from 'vuex'
export default {
  data(){
    return{
      isLyricShow:false
    }
  },
  computed:{
    ...mapState(['lyricList']),
    // 分割歌词
    lyric:functon(){
      
    }
  },
  mounted(){
    console.log(this.musicList);
    console.log(this.musicList.ar);
  },
  props:['musicList','play','isBtnShow'],
  components:{
    Vue3Marquee
  },
  methods:{
    ...mapMutations(['updateDetailShow']),
  }
}
</script>

<style lang="less" scoped>
.musicDetail{
  .header{
    width:100%;
    height:1rem;
    margin-top: .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headerLeft{
      width:35%;
      height:100%;
      margin-left: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        width: 0.8rem;
        height: 0.8rem;
        fill: white;
      }
      .song{
        margin-left: 0.3rem;
        .Name{
          // width:1rem;
          color:white;
        }
        .Author{
          color:#999
        }
        .icon{
          width: 0.3rem;
          height: 0.3rem;
          margin-left: 0.2rem;
        }
      }
    }
    .headerRight{
      .icon{
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.4rem;
      }
    }
  }
  .bgimg{
    width:100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter:blur(80px);
  }
  .content{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .img_needle{
      width: 2.4rem;
      height: 3rem;
      position: absolute;
      left: 46%;
      transform-origin:0 0;
      // 旋转
      transform: rotate(-15deg);
      transition: all 2s;
    }
    .img_needle_active{
      width: 2.4rem;
      height: 3rem;
      position: absolute;
      left: 46%;
      transform-origin:0 0;
      // 旋转
      transform: rotate(0deg);
      transition: all 2s;
    }
    .img_cd{
      width: 5rem;
      height: 5rem;
      position: absolute;
      bottom: 2.3rem;
      z-index: -1;
    }
    .img_ar{
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      position: absolute;
      bottom: 3.14rem;
      // 旋转速度
      animation: rotate_ar 10s linear infinite;
    }
    .img_ar_active{
      // 启动
      animation-play-state: running;
    }
    .img_ar_paused{
       // 暂定
      animation-play-state: paused;
    }
    @keyframes rotate_ar{
      0%{
        transform:rotateZ(0deg)
      }
      100%{
        transform:rotateZ(360deg)
      }
    }
  }
  .footer{
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    .footerTop{
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon {
      width: 0.36rem;
      height: 0.36rem;
      fill: white;
      }
      .icon {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
    .footerBottom{
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon {
        fill:white;
      }
      .bofang {
        width: 1rem;
        height: 1rem;
      }
    }
    .rang{
        width: 100%;
        height: 0.06rem;
    }
  }
}
</style>