<template>
  <div class="recommend">
    <div class="ListTop">
      <div class="ListLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofanganniu"></use>
        </svg>
        <span>播放全部</span>
      </div>
      <div class="ListRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-30show_duoxuan1"></use>
        </svg>
      </div>
    </div>

    <!-- <div class="ListContent">
      <div class="itemList" v-for="(item,i) in songs" :key="i">
        <div class="ContentLeft" @click="playMusic(i)">
          <span class="spanLeft">{{i+1}}</span>
          <div class="itemName">
            <p>{{item.name}}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="ContentRight">
          <svg class="iconMv" aria-hidden="true">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-31liebiao1"></use>
          </svg>
        </div> 
      </div>
    </div> -->
  </div>
</template>

<script>
import {getRecommed} from '../request/api/item.js'
// import {getLoginUser} from '../request/api/home.js'
import {getLoginStatus}  from '../request/api/home.js'
export default {
  data(){
    return{
      recommendList:[]
    }
  },
  mounted() {
    this.RecommendList()
  },
  methods:{
    RecommendList:async function(){
      if()
      let res = await getRecommed()
      console.log('--------');
      console.log(res);
    }
  }
}
</script>

<style lang="less" scoped>
.recommend{
  width:100%;
  height: 10rem;
  // padding: 0 0.2rem;
  // padding-top: .4rem;
  padding:0.4rem 0.2rem ;
  margin-top: 0.2rem;
  background-color:#fff ;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .ListTop{
    width: 100%;
    height: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ListLeft{
      width: 3rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        stroke: #333333;
        stroke-width: 20;
      }
      span{
        font-weight: 700;
        span{
          font-weight: 400;
          font-size: 0.24rem;
          color:#999
        }
      }
    }
    .ListRight{
      display: flex;
      align-items: center;
      background-color: red;
      padding: 0.2rem;
      border-radius: 0.4rem;
      color: #fff;
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #fff;
        margin-right: 0.1rem;
        stroke: #fff;
        stroke-width: 50;
      }

    }
  }
  .ListContent{
    width: 100%;
    padding-top: 0.6rem;
    .itemList{
      width: 100%;
      display: flex;
      height: 1.4rem;
      justify-content: space-between;
      align-items: center;
      .ContentLeft{
        // width: 85%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemName{
          span{
            font-weight: 400;
            font-size: 0.24rem;
            color:#999
          }
          p{
            font-weight: 700;
            margin-bottom: .08rem;
          }
        }
        .spanLeft{
          margin-right: 0.3rem;
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
      }
      .ContentRight{
        // width: 20%;
        // height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        // position: relative;
        .iconMv{
          width: 0.5rem;
          height: 0.5rem;
          fill: #999;
          margin-right: 0.3rem;
          stroke: #999;
          // stroke-width: 50;
        }
        .icon{
          fill: #999;
        }
      }
    }
    
  }
}
</style>