<template>
  <form class="login__form" @submit.prevent="login">
    <div class="form__title">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.webp" alt="logo" />
      </NuxtLink>
      <h3>Login</h3>
    </div>
    <div class="form__item">
      <div class="form__input">
        <input type="email" placeholder="Email" v-model="loginFields.email" />
      </div>
      <span v-if="loginErrors.email && !loginFields.email"
        >Email is required</span
      >
    </div>
    <div class="form__item">
      <div class="form__input">
        <input
          ref="passRef"
          type="password"
          placeholder="Password"
          v-model="loginFields.password"
        />
        <IconsEye class="eye" v-if="showPass" @click="togglePassword" />
        <IconsEyeClose class="eye" v-if="!showPass" @click="togglePassword" />
      </div>
      <span v-if="loginErrors.password && !loginFields.password"
        >Password is required</span
      >
    </div>
    <div class="forgot">
      <span @click="myStore.formTitle = 'forgotPass'">Forgot Password?</span>
    </div>
    <button class="primary__btn" type="submit">Login</button>
    <p class="register">
      Don't have an account?
      <span @click="myStore.formTitle = 'signUp'">Register</span>
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

//Router
import { useRoute } from "vue-router";
const router = useRouter();

//Login
const loginFields = reactive({
  email: "test@natureVibes.com",
  password: 123456,
});

const loginErrors = reactive({
  email: false,
  password: false,
});

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

const login = () => {
  loginErrors.email = loginFields.email ? false : true;
  loginErrors.password = loginFields.password ? false : true;
  if (!loginErrors.email && !loginErrors.password) {
    loginFields.email = null;
    loginFields.password = null;
    router.push("/");
    myStore.isLoggedIn = true;
    myStore.isLoading = true;
    setTimeout(() => {
      myStore.isLoading = false;
    }, 1500);
  }
};
</script>

<style lang="scss" scoped>
.login__form {
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
  .forgot {
    text-align: end;
    span {
      cursor: pointer;
      color: $white;
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
