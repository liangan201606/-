<template>
  <div class="CommentList">
    <div class="CommentTop">
      <span>最新评论</span>
      <input type="text" placeholder="写评论...">
    </div>
    <div class="CommentContent">
      <div class="itemList" v-for="(item,i) in CommentList" :key="i">
        <div class="ContentLeft">
          <div class="itemName">
            <span class="spanLeft">
              <img :src="item.user.avatarUrl" alt="">
              <span class="name">{{item.user.nickname}}</span>
              <svg class="icon" aria-hidden="true" @click="CommentLike(item)">
                <use xlink:href="#icon-aixin"></use>
              </svg>
              <span>{{item.likeCount}}</span>
            </span>
            <p>{{item.timeStr}}</p>
          </div>
          <div class="itemContent">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCommentLike} from '../../request/api/item.js'
import { useRoute } from 'vue-router';
export default {
  props:['CommentList'],
  mounted(){
    console.log(this.CommentList)
    this.CommentLike()
  },
  methods:{
    CommentLike:async function(item){
      let id = useRoute().query.id
      // let cid = userId
      let t=1
      let res = await getCommentLike({i,t})
      console.log(res);
      console.log(item);
    }
  }
}
</script>

<style lang="less" scoped>
.CommentList{
  width: 100%;
  .CommentTop{
    padding-top:.2rem;
    padding-left:0.05rem;
    width: 100%;
    height: 1rem;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    input{
      margin-right: 0.3rem;
      // border:none;
    }
  }
  .CommentContent{
    width: 100%;
    padding-top:.4rem;
    display:flex;
    flex-direction: column;
    .ContentLeft{
      width: 100%;
      padding-bottom: 0.2rem;
      padding-top: 0.2rem;
      display:flex;
      flex-direction: column;
      border-bottom:0.02rem solid #ccc;
      .itemName{ 
        display:flex;
        flex-direction: column; 
        padding-right: 0.2rem;
        .spanLeft{
          display: flex;
          justify-content: space-between;
          img{
            width:1rem;
            height:1rem;
            border-radius: 50%;
          }
          .name{
            width:4rem;
            margin-right: 3rem;
            font-weight: 700;
          }
        }
        p{
          padding-left:1rem;
        }
      }
      .itemContent{
        padding-left:1rem;
      }
    }
  }
}

</style>