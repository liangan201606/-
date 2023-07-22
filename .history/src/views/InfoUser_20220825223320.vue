<template>
  <div class="UserTop">
    <img src="" alt="">
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['user'])
  },
  
  methods:{
    ...mapMutations(['updataUser'])
  }
}
</script>

<style>

</style>