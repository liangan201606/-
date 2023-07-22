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
              <div @click="CommentLike(item.commentId,i)">
                <span class='Like'>{{item.likedCount}}</span>
                <svg class="icon" aria-hidden="true" ref="myicon">
                  <use xlink:href="#icon-aixin"></use>
                </svg>
                <svg class="icon" aria-hidden="true" ref="myicon2">
                  <use xlink:href="#icon-a-aixin1"></use>
                </svg>
              </div>
              <svg class="icon" aria-hidden="true" @click="DeleteComment(item.commentId)">
                  <use xlink:href="#icon-chahao"></use>
              </svg>
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
    // console.log(this.CommentList)
    // console.log(this.id)
    this.change()
  },
  methods:{
    CommentLike:async function(cid,i){
      // 获取歌单id
      let id = this.id
      if(this.liked === 1){
        this.liked =  0
      }else if(this.liked === 0){
        this.liked =  1
      }
      let t= this.liked
      let res = await getCommentLike({id,cid,t})
      if(t===1){
        this.$refs.myicon[i].classList.add('show')
        this.isliked = true
      }else{
        this.isliked = false
        this.$refs.myicon[i].classList.remove('show')
      }
    },
    change:function(){
      // let a = document.querySelectorAll('myicon')
      // for(let m=0;m<a.length;m++){
      //   console.log(a);
      //   console.log('1')
      // }
      // this.$refs.myicon[2].classList.add('pink')
      // console.log(this.$refs.myicon[2])
      // console.log()
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
      // console.log(result)
    },
    DeleteComment:async function(cid){
      const t = 0
      let id = this.id
      let result = await deleteComment({t,id,cid})
      // console.log(result)
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
      border:none;
    }
    button{
      margin-right: 0.5rem;
      border:none;
      background-color:#fff;
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
          .show{
            display:none
          }
          // .myicon{
          //    width:0.5rem;
          //    height: 0.5rem;
          // }
        }
      }
      .itemContent{
        padding-left:1rem;
      }
    }
  }
}

</style>