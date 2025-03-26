<template>
  <div class="login__wrapper">
    <img class="login__bg" src="../public/images/login-bg.png" />
    <div class="login__overlay">
      <div class="form__container">
        <!--Login-->
        <AuthLogin v-if="myStore.formTitle == 'login'" />
        <!--SignUp-->
        <AuthSignUp v-if="myStore.formTitle == 'signUp'" />
        <!--Forgot password-->
        <AuthForgotPass v-if="myStore.formTitle == 'forgotPass'" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});

//Store
import { useStore } from "~/store/store";
const myStore = useStore();
</script>

<style lang="scss" scoped>
.login__wrapper {
  height: 100vh;
  overflow: hidden;
  position: relative;
  .login__bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .login__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    .form__container {
      position: relative;
      max-width: 500px;
      width: 100%;
      padding: 20px;
      overflow: hidden;
    }
  }
}
</style>
