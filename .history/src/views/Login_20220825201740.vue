<template>
  <div class="login">
    <div class="loginTop">

    </div>
    <div class="loginContent">
      <input type="text" placeholder="手机号码登录" class="Phone">
      <input type="passworld" placeholder="输入密码" class="Password">
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
      border-radius: 0.5rem;
      background-color:red;
    }
    .Phone{
      width: 50%;
      height: ;
    }

  }
}
</style>