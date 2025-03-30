<template>
  <header :class="{ dark: myStore.isDarkMode }">
    <div class="container">
      <nav>
        <NuxtLink to="/">
          <div class="logo__container">
            <!--Logo-->
            <div class="logo">
              <img src="/images/logo.webp" alt="logo" />
            </div>
            <h3>Nature<span>Vibes</span></h3>
          </div>
        </NuxtLink>

        <div class="nav__right">
          <!--Upgrade-->
          <NuxtLink to="/upgrade" class="upgradeBtn">
            <IconsCrown /> <span>Upgrade</span>
          </NuxtLink>
          <!--Language-->
          <div class="lang__container">
            <iconsLanguage @click="showLangMenu()" />
            <div class="lang__menu" v-if="langMenu">
              <div class="lang__item active__lang">En</div>
              <div class="lang__item">Ru</div>
              <div class="lang__item">Tr</div>
            </div>
          </div>
          <!--Dark mode-->
          <div class="theme__container" @click="myStore.toggleDarkMode">
            <IconsSun />
            <IconsMoon />
          </div>
          <NuxtLink to="/account" v-if="myStore.isLoggedIn" class="account">N V</NuxtLink>
          <!--Login btn-->
          <NuxtLink v-else to="/login" class="loginBtn"> Login </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useStore } from "~/store/store";
const myStore = useStore();

const langMenu = ref(false);

const showLangMenu = () => {
  langMenu.value = !langMenu.value;
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease-in-out;
  background: $white;

  nav {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo__container {
      width: 180px;
      height: 60px;
      display: flex;
      align-items: center;
      gap: 10px;

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
        span {
          color: $primary;
        }
      }

      &:hover {
        .logo {
          box-shadow: 0px 0px 10px 2px rgb(124, 126, 120);
        }
      }
    }

    .nav__right {
      display: flex;
      align-items: center;
      gap: 10px;

      .upgradeBtn {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 500;
        font-size: 18px;

        svg {
          width: 30px;
        }
      }

      .lang__container {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 5;
        svg {
          width: 30px;
          fill: $primary;
          cursor: pointer;
          transition: 0.5s ease;
        }

        .lang__menu {
          width: 50px;
          position: absolute;
          top: 120%;
          left: -10px;
          background: $white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);

          .lang__item {
            text-align: center;
            padding: 5px;
            cursor: pointer;
            transition: 0.3s ease;
            font-weight: 500;

            &:hover {
              background: $primary;
              color: $white;
            }
          }

          .active__lang {
            border-left: 2px solid $primary-dark;
          }
        }
      }

      .theme__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 7px;
        border-radius: 50px;
        position: relative;
        height: 30px;
        width: 60px;
        cursor: pointer;
        box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2) inset;

        &::before {
          content: "";
          position: absolute;
          left: 7px;
          background: $bg-gradient;
          box-shadow: 0px 0px 10px 3px rgba(108, 57, 189, 0.5) inset;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          z-index: 1;
        }

        &:hover {
          svg {
            transform: rotate(360deg);
          }
        }

        svg {
          width: 20px;
          transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
        }
      }

      .loginBtn {
        width: 70px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        background: $primary;
        color: $white;
        transition: 0.3s ease;

        &:hover {
          background: $btn-hover;
          border-top-left-radius: 0px;
          border-bottom-right-radius: 0px;
          border-top-right-radius: 8px;
          border-bottom-left-radius: 8px;
        }
      }
      .account {
        border: 2px solid $primary;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        font-weight: 700;
        color: $primary;
      }
    }
  }
}

.dark {
  background: transparent !important;

  .upgradeBtn {
    span {
      color: $primary;
    }
  }

  .logo__container {
    h3 {
      color: $white;
    }

    &:hover {
      .logo {
        box-shadow: 0px 0px 10px 2px rgb(209, 212, 202);
      }
    }
  }

  .theme__container {
    box-shadow: 0px 0px 10px 3px rgba(173, 170, 170, 0.5) inset !important;

    &::before {
      left: unset !important;
      right: 7px !important;
    }
  }
}

/*---------------Media Queries--------------*/
@media (max-width: 767px) {
  header {
    nav {
      height: 60px;

      .logo__container {
        width: auto;
        height: 60px;
        align-items: center;
        gap: 5px;

        .logo {
          min-width: 40px;
          height: 40px;
        }

        h3 {
          font-size: 14px;
        }
      }

      .nav__right {
        gap: 5px;

        .upgradeBtn {
          svg {
            width: 25px;
          }

          span {
            display: none;
          }
        }

        .lang__container {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 10;
          svg {
            width: 25px;
          }

          .lang__menu {
            width: 40px;
            left: -8px;
            .lang__item {
              font-size: 14px;
            }
          }
        }

        .theme__container {
          padding: 4px;
          height: 25px;
          width: 45px;

          &::before {
            left: 4px;
            width: 18px;
            height: 18px;
          }

          svg {
            width: 16px;
          }
        }

        .loginBtn {
          width: 55px;
          height: 25px;
          font-size: 14px;
        }
      }
    }
  }

  .dark {
    .theme__container {
      &::before {
        right: 4px !important;
      }
    }
  }
}
</style>
