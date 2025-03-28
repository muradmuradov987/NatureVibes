<template>
  <ModalsForgotPassModal v-if="myStore.modalTitle == 'forgotPass'" />
  <form class="forget__pass" @submit.prevent="forgotPassword">
    <div class="form__title">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.webp" alt="logo" />
      </NuxtLink>
      <h3>Reset password</h3>
    </div>
    <div class="form__item">
      <div class="form__input">
        <input type="email" placeholder="Email" v-model="forgotEmail" />
      </div>
      <span v-if="forgotPasswordErrors.email && !forgotEmail"
        >Please enter your email address</span
      >
    </div>
    <button class="primary__btn" type="submit">Send email</button>
    <button class="secondary__btn" @click="myStore.formTitle = 'login'">
      Back to login
    </button>
  </form>
</template>

<script setup>
//Store
import { useStore } from "~/store/store";
const myStore = useStore();

//Forgot password
const forgotEmail = ref(null);
const forgotPasswordErrors = reactive({
  email: false,
});

const forgotPassword = () => {
  forgotPasswordErrors.email = forgotEmail.value ? false : true;

  if (!forgotPasswordErrors.email) {
    myStore.modalTitle = "forgotPass";
    forgotEmail.value = null;
  }
};
</script>

<style lang="scss" scoped>
.forget__pass {
  max-width: 500px;
  background: rgba(255, 255, 255, 0.137);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid $white;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.5s ease;
  animation: modalIn 0.5s ease-in-out;
  @keyframes modalIn {
    0% {
      opacity: 0;
      transform: translate(110%);
    }
    100% {
      opacity: 1;
      transform: translate(0%);
    }
  }
  .primary__btn,
  .secondary__btn {
    padding: 15px 20px;
    font-size: 16px;
  }
}
</style>
