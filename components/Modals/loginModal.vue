<template>
  <div class="modal__overlay" @click="myStore.closeModal()" :class="{ dark: myStore.isDarkMode }">
    <div class="modal" @click.stop>
      <div class="modal__logo-container">
        <div class="logo">
          <img src="/images/logo.webp" alt="logo">
        </div>
        <h3>Nature<span>Vibes</span></h3>
      </div>
      <h2 class="modal__title">Login or Sign up</h2>
      <p>You need to log in to access premium sounds and features.</p>
      <div class="modal__footer">
        <button class="primary__btn" @click="$router.push('/login')">Go to Login</button>
        <button class="secondary__btn" @click="myStore.closeModal()">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const myStore = useStore();


</script>

<style lang="scss" scoped>
.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    max-width: 500px;
    width: 100%;
    max-height: 500px;
    background: $white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    z-index: 2;
    animation: modalIn 0.7s ease-in-out;

    .modal__logo-container {
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

    .modal__title {
      text-align: center;
      font-size: 27px;
    }
    .modal__footer {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
}
@keyframes modalIn {
  0% {
    scale: 0;
    transform: translateY(500px);
  }

  100% {
    scale: 1;
    transform: translateY(0px);
  }
}


.dark {
  .modal {
    background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);
    .modal__logo-container {
      h3 {
        color: $white;
      }
    }

    h2 {
      color: $white;
    }

    p {
      color: $white;
    }

    .secondary__btn {
      color: $white;
    }
  }
}
</style>
