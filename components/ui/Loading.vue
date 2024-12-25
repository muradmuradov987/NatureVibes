<template>
  <div v-if="myStore.isLoading" class="loading-overlay">
    <div class="logo">
      <img src="~/assets/images/logo.webp" alt="">
    </div>
    <span class="loader"></span>
  </div>
</template>

<script setup>
import { useStore } from '~/store/store';
const myStore = useStore();
</script>

<style scoped lang="scss">
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(18, 94, 2, 0.8);
  background: linear-gradient(135deg, #333333, #8230bd, #0b6481);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .loader {
    width: 148px;
    height: 148px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid $primary;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    &:after {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      width: 148px;
      height: 148px;
      border-radius: 50%;
      border-left: 4px solid rgb(7, 168, 7);
      border-bottom: 4px solid transparent;
      animation: rotation 0.5s linear infinite reverse;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>