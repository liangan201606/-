<template>
  <div class="CommentList">
    <div class="CommentTop">
      <span>最新评论</span>
      <input type="text" placeholder="写评论..." v-model="content">
      <button @click="WriteComment">发布</button>
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
              <div @click="CommentLike(item.commentId)">
                <span class='Like'>{{Like(item.likedCount)}}</span>
                <svg class="icon" aria-hidden="true" v-if="!isliked">
                  <use xlink:href="#icon-aixin"></use>
                </svg>
                <svg class="icon" aria-hidden="true" v-else>
                  <use xlink:href="#icon-a-aixin1"></use>
                </svg>
              </div>
            </span>
          </div>
          <div class="itemContent">
            <span>{{item.content}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCommentLike,sendComment,deleteComment} from '../../request/api/item.js'
export default {
  props:['CommentList','id'],
  data(){
     return {
      isliked:false,
      content:"",
      liked:0,
     } 
  },
  mounted(){
    console.log(this.CommentList)
    console.log(this.id)
  },
  methods:{
    CommentLike:async function(cid){
      // 获取歌单id
      let id = this.id
      if(this.liked === 1){
        this.liked =  0
      }else if(this.liked === 0){
        this.liked =  1
      }
      t= this.liked
      let res = await getCommentLike({id,cid,t})
      if(t===1){
        this.isliked = true
      }else{
        this.isliked = false
      }
      return t
    },
    Like:function(likedCount){
      if(this.liked === 1){
        this.liked =  0
        likedCount +=1
      }else if(this.liked === 0){
        this.liked =  1
        likedCount = likedCount-1
      }
      return likedCount
    },

    WriteComment:async function(){
      const t = 1
      // 获取歌单id
      let id = this.id
      let test = this.content
      let result = await sendComment({t,id,test})
      if(result.data.code === 200){
        this.CommentList.unshift(result.data.comment)
        this.content = ''
      }
      console.log(result)
    },
    DeleteComment:async function(cid){
      const t = 1
      // 获取歌单id
      let id = this.id
      let result = await deleteComment({t,id,cid})
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