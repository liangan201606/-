<template>
  <div class="UserTop">
    <img src="" alt="">
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  computed:{
    ..map
  }
  methods:{
    ...mapMutations(['updataUser'])
  }
}
</script>

<style>

</style>