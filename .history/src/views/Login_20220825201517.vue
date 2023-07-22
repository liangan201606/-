<template>
  <div class="login">
    <div class="loginTop">

    </div>
    <div class="loginContent">
      <input type="text" placeholder="手机号码登录">
      <input type="text" placeholder="输入密码">
      <button>手机号码登录</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login{
  background-color: #fff;
  .loginContent{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
      width: 70%;
      height: 1rem;
      background-color:red;
    }
  }
}
</style>