<template>
  <div class="modal__overlay" @click="myStore.closeModal()" :class="{ dark: myStore.isDarkMode }">
    <div class="modal" @click.stop>
      <img class="crown" src="/images/plugins/crown.svg" alt="crown">
      <h2>Unlock Premium Features!</h2>
      <p class="info">Upgrade to enjoy exclusive sounds and unlimited access.
        Starting at just <span>$4.99</span>/month, you can take your relaxation journey to the next level.</p>
      <div class="benefits">
        <h4>Benefits include:</h4>
        <p>Over 20 Exclusive Sounds</p>
        <p>Unlimited Access</p>
        <p>Early Access to Updates</p>
      </div>
      <p class="reminder">Don't miss out on the ultimate relaxation experience!</p>
      <div class="modal__footer">
        <button class="primary__btn" @click="$router.push('/upgrade')">Upgrade now</button>
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
    gap: 20px;
    z-index: 2;
    animation: modalIn 0.7s ease-in-out;

    .crown {
      width: 50px;
      margin: 0 auto;
    }

    h2 {
      text-align: center;
    }

    .info {
      text-align: center;

      span {
        color: $primary;
        font-weight: 500;
      }
    }

    .benefits {
      text-align: start;

      h4 {
        margin-bottom: 10px;
        color: $primary;
      }

      p {
        padding-left: 30px;
        position: relative;
        margin-bottom: 5px;

        &::after {
          content: url("/public/images/plugins/plus.svg");
          position: absolute;
          width: 25px;
          height: 25px;
          left: 0;
          top: -2px;
        }
      }
    }

    .reminder {
      text-align: center;
      font-weight: 500;
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
  }

  100% {
    scale: 1;
  }
}


.dark {
  .modal {
    background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);

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
