<template>
  <div class="itemMusicTop">
    <img :src="playList.coverImgUrl" alt="" class="bgimg">
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.back()">
          <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
          <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-31liebiao1"></use>
      </svg>
    </div>
  </div>

  <div class="itemTopContent">
      <div class="itemTopContentLeft">
        <img :src="playList.coverImgUrl" alt="">
        <div class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-a-24gl-play1"></use>
            </svg>
            <span>{{changeCount(playList.playCount)}}</span>
        </div>
      </div>
      <div class="itemTopContentRight">
        <div class="itemName">
          {{playList.name}}
        </div>
        <div class="itemNickname">
          <img :src="playList.creator.backgroundUrl" alt="" />
          <span>{{playList.creator.nickname}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyoujiantou"></use>
          </svg>
        </div>
        <div class="itemtdescription">
          <span>{{playList.description}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyoujiantou"></use>
          </svg>
        </div>
      </div>
  </div>

  <div class="itemTopFooter">
    <div class="footerItem" @click="updataCommentShow">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-_xiaoxi"></use>
      </svg>
      <span>{{playList.commentCount}}</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>{{playList.shareCount}}</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-xiazai-wenjianxiazai-07"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-30show_duoxuan"></use>
      </svg>
      <span>多选</span>
    </div>
    <van-popup v-model:show="commentshow" position="bottom" :style="{ height: '60%',width:'100%' }" round close-on-click-overlay>
      <CommentList></CommentList>
    </van-popup>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import CommentList from './CommentList.vue'
export default {
  name:'ItemMusicTop',
  computed:{
    ...mapState(['commentshow'])
  },
  methods:{
    ...mapMutations(['updataCommentShow'])
    
  },
  components:{
    CommentList
  },
  setup(props){
    // console.log(props);
    // 页面刷新，歌单数据丢失
    // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的数据
    if((props.playList.creator="")){
      props.playList.creator=sessionStorage.getItem('itemDetail')
    }
     // 对播放量的处理
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    return{changeCount}
  },
  props:['playList']
}
</script>

<style lang="less" scoped>
.itemMusicTop{
  width: 100%; 
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .itemLeft,.itemRight{
    width:25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 .2rem;
    span{
      font-size: .4rem;
      color:white
    }
    .icon{
      // 填充颜色
      fill:white
    }
  }
  .bgimg{
    width:100%;
    height: 11rem;
    position: fixed;
    z-index: -1;
    filter:blur(30px);
  }

}
.itemTopContent{
  width: 100%;
  height: 3rem;
  padding: 0.2rem;
  display: flex;
  margin-top: 0.4rem;
  justify-content: space-between;
  .itemTopContentLeft{
    width:36%;
    height:2rem;
    position: relative;
    img{
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.2rem;
      position: absolute;
      z-index: -1;
    }
    .playCount {
      position: absolute;
      right: 0.1rem;
      margin-top: 0.1rem;
      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: -0.02rem;
        vertical-align: middle;
      }
      span{
        font-size: .26rem;
        color: #fff;
      }
    }
  }
  .itemTopContentRight{
    width: 60%;
    height: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .itemName{
      color: white;
      font-weight: 900;
    }
    .itemNickname{
      // margin-top: .2rem;
      width: 100%;
      height: 0.6rem;
      line-height: 0.3rem;
      margin-top:0.4rem;
      img{
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        vertical-align: middle;
        fill:white
      }
      span{
        color:#ccc;
        margin-left:0.1rem ;
      }
      .icon{
        width: .26rem;
        height: .26rem;
        fill:#ccc;
        margin-top: -0.08rem;
        vertical-align: middle;
      }
    }
    .itemtdescription{
      width: 100%;
      height: .6rem;
      margin-top:0.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.24rem;
        color: #ccc;
      }
      .icon{
        width: 0.26rem;
        height: 0.26rem;
        fill:#ccc;
      }
    }
  }
}
.itemTopFooter{
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: space-around;
  margin-top: .2rem;
  .footerItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    span{
      margin-top: .1rem;
    }
    .icon{
      // fill:#fff;
      // stroke: #fff;
    }
  }
}
</style>