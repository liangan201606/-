<template>
  <div class="CommentList">
    <div class="CommentTop">
      <span>最新评论</span>
    </div>
    <div class="CommentContent">
      <div class="itemList" v-for="(item,i) in commentList.comments" :key="i">
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
  prope:['commentList'],
  mounted(){
    console.log(this.commentList)
  }
}
</script>

<style>

</style>