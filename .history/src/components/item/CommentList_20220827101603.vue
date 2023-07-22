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
            <span>{{item.user.nickname}}</span>
            <span>{{item.content}}</span>
            <p>{{item.timeStr}}</p>
          </div>
        </div>
        <div class="ContentRight">
          <svg class="icon" aria-hidden="true">
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
  width: 100%;

  .CommentTop{
     width: 40%;
     height: 1em;
     font-weight: 700;
  }
  .CommentContent{
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    .ContentLeft{
      .spanLeft{
        width: ;
      }
      .itemName
    }
    .ContentRight{

    }
  }
}
</style>