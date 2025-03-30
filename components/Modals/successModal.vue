<template>
  <div
    class="modal__overlay"
    @click="myStore.closeModal()"
    :class="{ dark: myStore.isDarkMode }"
  >
    <div class="modal" @click.stop>
      <div class="success-animation">
        <div class="circle">
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
      </div>
      <div>
        <h2 class="modal__title">Registration successful</h2>
        <p>Check your email to confirm your account</p>
      </div>
      <div class="modal__footer">
        <button class="primary__btn" @click="myStore.closeModal()">OK</button>
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
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

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
    animation: modalIn 0.7s ease-in-out;

    .success-animation {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: pulse 1.5s ease-in-out infinite; /* Nabız efekti */
        .checkmark {
          width: 45px;
          height: 45px;

          &__circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 2;
            stroke-miterlimit: 10;
            stroke: #4caf50;
            fill: none;
            animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
          }

          &__check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            stroke-width: 3;
            stroke: #4caf50;
            fill: none;
            animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
          }
        }
      }
    }

    @keyframes stroke {
      100% {
        stroke-dashoffset: 0;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    .modal__title {
      text-align: center;
      font-size: 27px;
      color: $primary;
      margin-bottom: 10px;
    }

    p {
      text-align: center;
    }
  }
}

@keyframes modalIn {
  0% {
    opacity: 0;
    scale: 0.5;
  }

  100% {
    opacity: 1;
    scale: 1;
  }
}

.dark {
  .modal {
    background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);

    p {
      color: $white;
    }
  }
}
</style>
