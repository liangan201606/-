<template>
  <div class="CommentList">
    <div class="CommentTop">
      <span>最新评论</span>
    </div>
    <div class="CommentContent">
      <div class="itemList" v-for="(item,i) in CommentList" :key="i">
        <div class="ContentLeft">
          <div class="itemName">
            <span class="spanLeft">
              <img :src="item.user.avatarUrl" alt="">
               <span class="name">{{item.user.nickname}}</span>
            </span>
            <p>{{item.timeStr}}</p>
          </div>
          <div class="itemContent">{{item.content}}</div>
        </div>
        <div class="ContentRight">
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-31liebiao1"></use>
          </svg> -->
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
  width: 100%;
  .CommentTop{
    padding-top:.2rem;
     width: 40%;
     height: 1em;
     font-weight: 700;
  }
  .CommentContent{
    width: 100%;
    padding-top:.4rem;
    display:flex;
    flex-direction: column;
    .ContentLeft{
      width: 100%;
      display:flex;
      flex-direction: column;
      .itemName{  
        .spanLeft{
          // width: 50%;
          display:flex;
          justify-content:space-around;
          img{
            width:1rem;
            height:1rem;
            border-radius: 50%;
          }
          .name{
            font-weight: 700;
          }
        }
        .itemContent{

        }
      }
    }
  }
}

</style>