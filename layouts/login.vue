<template>
  <div class="login__wrapper">
    <img class="login__bg" src="../public/images/login-bg.png" />
    <div class="login__overlay">
      <div class="form__container">
        <!--Login-->
        <div class="login__form" v-if="formTitle == 'login'">
          <div class="title">
            <NuxtLink to="/" class="logo">
              <img src="/images/logo.webp" alt="logo" />
            </NuxtLink>

            <h3>Login</h3>
          </div>
          <div class="form__item">
            <input type="text" placeholder="Email" v-model="fieldItems.email" />
          </div>
          <div class="form__item">
            <input
              ref="passRef"
              type="password"
              placeholder="Password"
              v-model="fieldItems.password"
            />
            <IconsEye class="eye" v-if="showPass" @click="togglePassword" />
            <IconsEyeClose
              class="eye"
              v-if="!showPass"
              @click="togglePassword"
            />
          </div>
          <p class="forgot" @click="formTitle = 'forgotPass'">
            Forgot Password?
          </p>
          <button class="primary__btn">Login</button>
          <p class="register">
            Don't have an account?
            <span @click="formTitle = 'register'">Register</span>
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

        <!--Register-->
        <div class="signUp__form" v-if="formTitle == 'register'">
          <div class="title">
            <NuxtLink to="/" class="logo">
              <img src="/images/logo.webp" alt="logo" />
            </NuxtLink>
            <h3>Create Account</h3>
          </div>
          <div class="form__item">
            <input
              type="text"
              placeholder="Full Name"
              v-model="fieldItems.fullName"
            />
          </div>
          <div class="form__item">
            <input type="text" placeholder="Email" v-model="fieldItems.email" />
          </div>
          <div class="form__item">
            <input
              ref="passRef"
              type="password"
              placeholder="Password"
              v-model="fieldItems.password"
            />
            <IconsEye class="eye" v-if="showPass" @click="togglePassword" />
            <IconsEyeClose
              class="eye"
              v-if="!showPass"
              @click="togglePassword"
            />
          </div>
          <button class="primary__btn">Sign up</button>
          <p class="register">
            Already have an account?
            <span @click="formTitle = 'login'">Log in</span>
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
          <div class="title">
            <NuxtLink to="/" class="logo">
              <img src="/images/logo.webp" alt="logo" />
            </NuxtLink>
            <h3>Forgot your password?</h3>
          </div>
          <div class="form__item">
            <input
              type="text"
              placeholder="Email"
              v-model="fieldItems.forgotEmail"
            />
          </div>
          <button class="primary__btn">Send email</button>
          <button class="secondary__btn" @click="formTitle = 'login'">
            Back to login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const formTitle = ref("login");

//LOGIN
const showPass = ref(false);
const passRef = ref(null);

const fieldItems = ref({
  email: null,
  password: null,
  fullName: null,
  forgotEmail: null,
});

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
        .title {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
          .logo {
            min-width: 60px;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            transition: 0.3s ease-in-out;
            img {
              width: 100%;
              height: 100%;
            }
          }
          h3 {
            font-size: 27px;
            color: $white;
          }

          &:hover {
            .logo {
              box-shadow: 0px 0px 10px 2px rgb(124, 126, 120);
            }
          }
        }
        .form__item {
          height: 50px;
          border-radius: 8px;
          border: 1px solid $white;
          overflow: hidden;
          position: relative;
          input {
            width: 100%;
            height: 100%;
            color: $white;
            padding: 20px;
            padding-right: 45px;
            border: none;
            background: none;
            font-size: 18px;
            &::placeholder {
              color: rgb(187, 184, 184);
            }
          }
          .eye {
            width: 25px;
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translate(0%, -50%);
            cursor: pointer;
          }
        }
        .forgot {
          color: $white;
          text-align: end;
          cursor: pointer;
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
        // transform: translate(-110%);
        .title {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
          .logo {
            min-width: 60px;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            transition: 0.3s ease-in-out;
            img {
              width: 100%;
              height: 100%;
            }
          }
          h3 {
            font-size: 27px;
            color: $white;
          }

          &:hover {
            .logo {
              box-shadow: 0px 0px 10px 2px rgb(124, 126, 120);
            }
          }
        }
        .form__item {
          height: 50px;
          border-radius: 8px;
          border: 1px solid $white;
          overflow: hidden;
          position: relative;
          input {
            width: 100%;
            height: 100%;
            color: $white;
            padding: 20px;
            padding-right: 45px;
            border: none;
            background: none;
            font-size: 18px;
            &::placeholder {
              color: rgb(187, 184, 184);
            }
          }
          .eye {
            width: 25px;
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translate(0%, -50%);
            cursor: pointer;
          }
        }
        .forgot {
          color: $white;
          text-align: end;
          cursor: pointer;
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
        .title {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
          .logo {
            min-width: 60px;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            transition: 0.3s ease-in-out;
            img {
              width: 100%;
              height: 100%;
            }
          }
          h3 {
            font-size: 27px;
            color: $white;
          }

          &:hover {
            .logo {
              box-shadow: 0px 0px 10px 2px rgb(124, 126, 120);
            }
          }
        }
        .form__item {
          height: 50px;
          border-radius: 8px;
          border: 1px solid $white;
          overflow: hidden;
          position: relative;
          input {
            width: 100%;
            height: 100%;
            color: $white;
            padding: 20px;
            padding-right: 45px;
            border: none;
            background: none;
            font-size: 18px;
            &::placeholder {
              color: rgb(187, 184, 184);
            }
          }
          .eye {
            width: 25px;
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translate(0%, -50%);
            cursor: pointer;
          }
        }
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
