<template>
  <div class="CommentList">
    <div class="CommentTop">
      <span>最新评论</span>
    </div>
    <div class="CommentContent">
      <div class="itemList" v-for="(item,i) in CommentList" :key="i">
        <div class="ContentLeft">
          <span class="spanLeft">
            <img :src="item.user.avatarUrl" alt="">
          </span>
          <div class="itemName">
            <p>{{item.user.nickname}}</p>
            <span>{{item.content}}</span>
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
    </div>
  </div>
</template>

<script>
export default {
  props:['CommentList'],
  mounted(){
    console.log(this.CommentList)
  }
}
</script>

<style lang="less" scoped>
.CommentList{
  width:100%;
  height: 10rem;
  padding:0.4rem 0.2rem ;
  margin-top: 0.2rem;
  background-color:#fff ;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .CommentTop{
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