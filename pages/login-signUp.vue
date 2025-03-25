<template>
  <div class="login__wrapper">
    <img class="login__bg" src="../public/images/login-bg.png" />
    <div class="login__overlay">
      <div class="form__container">
        <!--Login-->
        <form
          class="login__form"
          v-if="formTitle == 'login'"
          @submit.prevent="login"
        >
          <div class="form__title">
            <NuxtLink to="/" class="logo">
              <img src="/images/logo.webp" alt="logo" />
            </NuxtLink>
            <h3>Login</h3>
          </div>
          <div class="form__item">
            <div class="form__input">
              <input
                type="email"
                placeholder="Email"
                v-model="loginFields.email"
              />
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
              <IconsEyeClose
                class="eye"
                v-if="!showPass"
                @click="togglePassword"
              />
            </div>
            <span v-if="loginErrors.password && !loginFields.password"
              >Password is required</span
            >
          </div>
          <div class="forgot">
            <span @click="changeForm('forgotPass')">Forgot Password?</span>
          </div>
          <button class="primary__btn" type="submit">Login</button>
          <p class="register">
            Don't have an account?
            <span @click="changeForm('register')">Register</span>
          </p>
          <div class="or">or</div>
          <div class="login__social">
            <a class="google" href="#"
              ><img src="../public/images/plugins/google.png" />Continue with
              Google</a
            >
            <a class="facebook" href="#"
              ><img src="../public/images/plugins/facebook.png" />Continue with
              Facebook</a
            >
          </div>
        </form>

        <!--Register-->
        <div class="signUp__form" v-if="formTitle == 'register'">
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
              <span v-if="signupErrors.fullName">err</span>
            </div>
          </div>
          <div class="form__item">
            <div class="form__input">
              <input
                type="text"
                placeholder="Email"
                v-model="signUpFields.email"
              />
              <span v-if="signupErrors.email">err</span>
            </div>
          </div>
          <div class="form__item">
            <div class="form__input">
              <input
                ref="passRef"
                type="password"
                placeholder="Password"
                v-model="signUpFields.password"
              />
              <span v-if="signupErrors.Password">err</span>

              <IconsEye class="eye" v-if="showPass" @click="togglePassword" />
              <IconsEyeClose
                class="eye"
                v-if="!showPass"
                @click="togglePassword"
              />
            </div>
          </div>
          <button class="primary__btn">Sign up</button>
          <p class="register">
            Already have an account?
            <span @click="changeForm('login')">Log in</span>
          </p>
          <div class="or">or</div>
          <div class="login__social">
            <a class="google" href="#"
              ><img src="../public/images/plugins/google.png" />Continue with
              Google</a
            >
            <a class="facebook" href="#"
              ><img src="../public/images/plugins/facebook.png" />Continue with
              Facebook</a
            >
          </div>
        </div>

        <!--Forgot password-->
        <div class="forget__pass" v-if="formTitle == 'forgotPass'">
          <div class="form__title">
            <NuxtLink to="/" class="logo">
              <img src="/images/logo.webp" alt="logo" />
            </NuxtLink>
            <h3>Reset password</h3>
          </div>
          <div class="form__item">
            <input type="email" placeholder="Email" v-model="forgotEmail" />
            <span v-if="forgotPasswordErrors.email">err</span>
          </div>
          <button class="primary__btn">Send email</button>
          <button class="secondary__btn" @click="changeForm('login')">
            Back to login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});

//Show forms
const formTitle = ref("login");
const changeForm = (formName) => {
  formTitle.value = formName;
  resetFields();
};
//reset fields
const resetFields = () => {
  loginFields.email = null;
  loginFields.password = null;

  signUpFields.fullName = null;
  signUpFields.email = null;
  signUpFields.password = null;

  forgotEmail.value = null;
  showPass.value = false;
  passRef.value = null;
};

//Login
const loginFields = reactive({
  email: null,
  password: null,
});

const loginErrors = reactive({
  email: false,
  password: false,
});

//SignUp
const signUpFields = reactive({
  fullName: null,
  email: null,
  password: null,
});
const signupErrors = reactive({
  fullName: false,
  email: false,
  password: false,
});

//Forgot password
const forgotEmail = ref(null);
const forgotPasswordErrors = reactive({
  email: false,
});

const login = () => {
  loginErrors.email = loginFields.email ? false : true;
  loginErrors.password = loginFields.password ? false : true;
  if (!loginErrors.email && !loginErrors.password) {
    console.log("Giriş yapılıyor:");
  }
};

const signup = () => {
  signupErrors.email = signupForm.email ? "" : "E-posta gerekli";
  signupErrors.password = signupForm.password ? "" : "Şifre gerekli";
  signupErrors.passwordConfirm = signupForm.passwordConfirm
    ? ""
    : "Şifre tekrarı gerekli";

  if (signupForm.password !== signupForm.passwordConfirm) {
    signupErrors.passwordConfirm = "Şifreler eşleşmiyor";
  }

  if (
    !signupErrors.email &&
    !signupErrors.password &&
    !signupErrors.passwordConfirm
  ) {
    // Kayıt işlemini gerçekleştir
    console.log("Kayıt yapılıyor:", signupForm);
  }
};

const forgotPassword = () => {
  forgotPasswordErrors.email = forgotPasswordForm.email
    ? ""
    : "E-posta gerekli";

  if (!forgotPasswordErrors.email) {
    // Şifre sıfırlama işlemini gerçekleştir
    console.log("Şifre sıfırlama isteği gönderiliyor:", forgotPasswordForm);
  }
};

//Toglle password
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
        .primary__btn,
        .secondary__btn {
          padding: 15px 20px;
          font-size: 16px;
        }
      }
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
    }
  }
}
</style>
