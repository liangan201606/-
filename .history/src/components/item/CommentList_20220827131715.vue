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
              <span class="name">
                {{item.user.nickname}}
                <p>{{item.timeStr}}</p>
              </span>
              <span class='Like'>{{item.likedCount}}</span>
              <svg class="icon" aria-hidden="true" @click="CommentLike(item.commentId)">
                <use xlink:href="#icon-aixin"></use>
              </svg>
              <!-- <span>{{item.commentId}}</span> -->
            </span>
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
import { onMounted } from '@vue/runtime-core';
export default {
  props:['CommentList'],
  mounted(){
    console.log(this.CommentList)
    // this.CommentLike()
  },
  methods:{
    CommentLike:async function(cid){
      // 获取歌单id
      let id = useRoute().query.id
      console.log(cid);
      let t=1
      let res = await getCommentLike({id,cid,t})
      console.log(res);
    }
  },
  setup(props) {
    function CommentLike(){
      // 获取歌单id
      let id = useRoute().query.id
      console.log(cid);
      let t=1
      let res = await getCommentLike({id,cid,t})
      console.log(res);
    }
    return {CommentLike}
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
            p{
              color:#999;
            }
          }
        }
      }
      .itemContent{
        padding-left:1rem;
      }
    }
  }
}

</style>