<template>
  <div class="CommentList">
    <div class="CommentTop">
      <span>最新评论</span>
    </div>
    <div class="CommentContent">
      <div class="itemList" v-for="(item,i) in CommentList.comments" :key="i">
        <div class="ContentLeft">
          <span class="spanLeft">
            <img :src="" alt="">
          </span>
          <div class="itemName">
            <p>{{item.user.nickname}}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="ContentRight">
          <svg class="iconMv" aria-hidden="true" v-if="item.mv !=0">
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
  prope:['CommentList'],
  mounted(){
    console.log(this.CommentList)
  }
}
</script>

<style>

</style>