<template>
  <ModalsSuccessModal v-if="myStore.modalTitle == 'success'" />
  <form class="signUp__form" @submit.prevent="signup">
    <div class="form__title">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.webp" alt="logo" />
      </NuxtLink>
      <h3>Create Account</h3>
    </div>
    <div class="form__item">
      <div class="form__input">
        <input
          type="text"
          placeholder="Full Name"
          v-model="signUpFields.fullName"
        />
      </div>
      <span v-if="signUpErrors.fullName && !signUpFields.fullName"
        >Full name is required</span
      >
    </div>
    <div class="form__item">
      <div class="form__input">
        <input type="email" placeholder="Email" v-model="signUpFields.email" />
      </div>
      <span v-if="signUpErrors.email && !signUpFields.email"
        >Email is required</span
      >
    </div>
    <div class="form__item">
      <div class="form__input">
        <input
          ref="passRef"
          type="password"
          placeholder="Password"
          v-model="signUpFields.password"
        />

        <IconsEye class="eye" v-if="showPass" @click="togglePassword" />
        <IconsEyeClose class="eye" v-if="!showPass" @click="togglePassword" />
      </div>
      <span v-if="signUpErrors.password && !signUpFields.password"
        >Password is required</span
      >
      <span
        v-else-if="
          signUpErrors.passwordLength && signUpFields.password.length < 6
        "
        >Minimum 6 characters required</span
      >
    </div>
    <button class="primary__btn" type="submit">Sign up</button>
    <p class="register">
      Already have an account?
      <span @click="myStore.formTitle = 'login'">Log in</span>
    </p>
    <div class="or">or</div>
    <div class="login__social">
      <a class="google" href="#"
        ><img src="../../public/images/plugins/google.png" />Continue with
        Google</a
      >
      <a class="facebook" href="#"
        ><img src="../../public/images/plugins/facebook.png" />Continue with
        Facebook</a
      >
    </div>
  </form>
</template>

<script setup>
//Store
import { useStore } from "~/store/store";
const myStore = useStore();
const client = useSupabaseClient();

//SignUp
const signUpFields = reactive({
  fullName: null,
  email: null,
  password: null,
});
const signUpErrors = reactive({
  fullName: false,
  email: false,
  password: false,
  passwordLength: false,
});

const signup = async () => {
  signUpErrors.fullName = !signUpFields.fullName;
  signUpErrors.email = !signUpFields.email;
  signUpErrors.password = !signUpFields.password;

  if (signUpFields.password?.length < 6) {
    signUpErrors.passwordLength = true;
  } else {
    signUpErrors.passwordLength = false;
  }
  if (
    signUpErrors.fullName ||
    signUpErrors.email ||
    signUpErrors.password ||
    signUpErrors.passwordLength
  ) {
    return;
  }

  signUpFields.fullName = null;
  signUpFields.email = null;
  signUpFields.password = null;

  myStore.modalTitle = "success";
};

//Toggle password
const showPass = ref(false);
const passRef = ref(null);
const togglePassword = () => {
  showPass.value = !showPass.value;
  if (showPass.value) {
    passRef.value.type = "text";
  } else {
    passRef.value.type = "password";
  }
};
</script>

<style lang="scss" scoped>
.signUp__form {
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
  .primary__btn {
    padding: 15px 20px;
    font-size: 16px;
  }
  .register {
    text-align: center;
    color: $white;
    span {
      color: $primary;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .or {
    text-align: center;
    position: relative;
    color: $white;
    &::before {
      content: "";
      width: 45%;
      height: 1px;
      background: $primary;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0%, -50%);
    }
    &::after {
      content: "";
      width: 45%;
      height: 1px;
      background: $primary;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0%, -50%);
    }
  }
  .login__social {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    a {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      img {
        width: 30px;
      }
    }
    .google {
      background: $white;
    }
    .facebook {
      background: #1178f2;
      color: $white;
    }
  }
}
</style>
