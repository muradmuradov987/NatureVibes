<template>
  <div class="page__wrapper">
    <div class="container">
      <div class="account__container" :class="{ dark: myStore.isDarkMode }">
        <aside :class="{ showSidebar: showMobilSideBar }">
          <div class="asideBtn" @click="showMobilSideBar = false">
            <img src="../public/images/plugins/arrowRight.svg" alt="" />
          </div>
          <div class="tab__buttons">
            <button :class="{ active: activeTab === 0 }" @click="activeTab = 0">
              Profile Setting
            </button>
            <button :class="{ active: activeTab === 1 }" @click="activeTab = 1">
              Membership Details
            </button>
            <button :class="{ active: activeTab === 2 }" @click="activeTab = 2">
              Payment History
            </button>
            <button :class="{ active: activeTab === 3 }" @click="activeTab = 3">
              Support & Help
            </button>
          </div>
          <button class="logOut" @click="logOut()">Log out</button>
        </aside>
        <div class="content__container">
          <div class="asideBtn" @click="showMobilSideBar = true">
            <img src="../public/images/plugins/arrowRight.svg" alt="" />
          </div>
          <div class="content" v-if="activeTab === 0">
            <h1>Profile Setting</h1>
          </div>
          <div class="content" v-if="activeTab === 1">
            <h1>Membership Details</h1>
          </div>
          <div class="content" v-if="activeTab === 2">
            <h1>Payment History</h1>
          </div>
          <div class="content" v-if="activeTab === 3">
            <h1>Support & Help</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
//Store
import { useStore } from "~/store/store";
const myStore = useStore();

//Router
const router = useRouter();

const activeTab = ref(0);

const showMobilSideBar = ref(false);

const logOut = () => {
  myStore.isLoggedIn = false;
  myStore.isPremium = false;
  router.go(0);
};
</script>

<style lang="scss" scoped>
.account__container {
  display: flex;
  gap: 20px;
  min-height: calc(100vh - 310px);
  aside {
    max-width: 250px;
    width: 100%;
    overflow: hidden;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    .asideBtn {
      display: none;
    }
    button {
      width: 100%;
      border: none;
      padding: 10px 20px;
      border-radius: 7px;
      font-size: 16px;
      cursor: pointer;
    }
    .tab__buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .active {
        background: $primary;
        color: $white;
      }
    }
    .logOut {
      background: rgb(211, 56, 56);
      color: $white;
      transition: 0.3s ease;
      &:hover {
        background: rgb(156, 20, 20);
      }
    }
  }
  .content__container {
    background: $white;
    width: 100%;
    min-height: calc(100vh - 310px);
    border-radius: 16px;
    padding: 20px;
    .asideBtn {
      display: none;
    }
    .content {
      height: 100%;
      h1 {
        font-size: 30px;
        text-align: center;
      }
    }
  }
}
.dark {
  aside {
    background: unset;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    .asideBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border: 1px solid red;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      right: 15px;
      img {
        width: 15px;
        transform: rotate(-180deg);
      }
    }
  }
  .content__container {
    background: unset;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    h1 {
      color: $white;
    }
  }
}

/*---------------Media Queries--------------*/
@media (max-width: 767px) {
  .account__container {
    all: unset;
    position: relative;
    aside {
      max-width: 200px;
      padding: 20px 10px;
      position: absolute;
      height: 100%;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      background: $bg-gradient-dark;
      transform: translate(-110%);
      transition: 0.5s ease;
      z-index: 1;
      button {
        font-size: 14px;
      }
      .asideBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border: 1px solid $text;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        right: 15px;
        img {
          width: 15px;
          transform: rotate(-180deg);
        }
      }
    }
    .showSidebar {
      transform: unset;
    }
    .content__container {
      position: relative;
      .asideBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border: 1px solid $text;
        border-radius: 50%;
        position: absolute;
        top: 15px;
        left: 15px;
        img {
          width: 15px;
        }
      }
      .content {
        h1 {
          font-size: 20px;
        }
      }
    }
  }

  .dark {
    aside {
      .asideBtn {
        border: 1px solid $white;
      }
    }
    .content__container {
      .asideBtn {
        border: 1px solid $white;
      }
    }
  }
}
</style>
