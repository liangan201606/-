<template>
  <div class="musicDetail">
    <img :src="musicList.al.picUrl" alt="" class="bgimg">
    <div class="header">
      <div class="headerLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
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

    <div class="content">
      <img src="../../assets/needle-ab.png" alt="" class="img_needle">
      <img src="../../assets/cd.png" alt="" class="img_cd">
      <img :src="musicList.al.picUrl" alt="" class="img_ar">
    </div>

    <div class="footer">

    </div>
  </div>
</template>
<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
export default {
  mounted(){
    console.log(this.musicList);
    console.log(this.musicList.ar);
  },
  props:['musicList'],
  components:{
    Vue3Marquee
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
      transform: rotate(-10deg);
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
      animation: rotate_ar 10s linear infinite;
    }
  }
}
</style>