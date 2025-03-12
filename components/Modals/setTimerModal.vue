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
    gap: 20px;
    z-index: 2;

    h2 {
      text-align: center;
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

      .clear__timer-btn {
        padding: 3px 8px;
        border-radius: 5px;
        border: 1px solid $primary;
        font-size: 14px;
        cursor: pointer;
        font-weight: 500;
      }
    }

    .modal__footer {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
}

.dark {
  .modal {
    background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);

    h2 {
      color: $white;
    }
    label{
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
