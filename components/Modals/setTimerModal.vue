<template>
  <div class="modal__overlay" @click="myStore.closeModal()" :class="{ dark: myStore.isDarkMode }">
    <div class="modal" @click.stop>
      <h2> Set The Timer Duration</h2>
      <div class="modal__body">
        <div>
          <input type="radio" id="time5" name="timer" value="300" v-model="myStore.duration" />
          <label for="time5">5 Minutes</label>
        </div>
        <div>
          <input type="radio" id="time10" name="timer" value="600" v-model="myStore.duration" />
          <label for="time10">10 Minutes</label>
        </div>
        <div>
          <input type="radio" id="time15" name="timer" value="900" v-model="myStore.duration" />
          <label for="time15">15 Minutes</label>
        </div>
        <div>
          <input type="radio" id="time30" name="timer" value="1800" v-model="myStore.duration" />
          <label for="time30">30 Minutes</label>
        </div>
        <div>
          <input type="radio" id="time45" name="timer" value="2700" v-model="myStore.duration" />
          <label for="time45">45 Minutes</label>
        </div>
        <div>
          <input type="radio" id="time60" name="timer" value="3600" v-model="myStore.duration" />
          <label for="time60">1 Hour</label>
        </div>
        <div>
          <input type="radio" id="time120" name="timer" value="7200" v-model="myStore.duration" />
          <label for="time120">2 Hour</label>
        </div>
        <div>
          <input type="radio" id="time180" name="timer" value="10800" v-model="myStore.duration" />
          <label for="time180">3 Hour</label>
        </div>
      </div>
      <div class="modal__footer">
        <button class="primary__btn" @click="myStore.setTimer()">Start</button>
        <button class="secondary__btn" @click="myStore.closeModal()">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
//Store
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
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
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
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(223, 216, 216, 0.3);

    h2 {
      text-align: center;
      color: $white;

    }

    .modal__body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      width: 150px;
      margin: 0 auto;

      input {
        display: none;

        &:checked {
          +label {
            &::after {
              transform: translateY(-50%) scale(0.5);
            }
          }
        }
      }

      label {
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: $white;

        &::before {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid $primary;
          border-radius: 50%;
          top: 50%;
          left: -25px;
          transform: translateY(-50%);
          transition: border-color 400ms ease;
        }

        &::after {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid $primary;
          background: $primary;
          border-radius: 50%;
          top: 50%;
          left: -25px;
          transform: translateY(-50%) scale(0);
          transition: 400ms ease;
        }
      }
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




/*---------------Media Queries--------------*/
@media (max-width: 767px) {
  .modal__overlay {
    .modal {
      padding: 15px;
      h2 {
        font-size: 22px;
      }
    }
  }
}
</style>
