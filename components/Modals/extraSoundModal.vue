<template>
  <div class="modal__overlay">
    <div class="modal">
      <h2 class="modal__title">Add extra sound</h2>
      <div class="modal__body">
        <div v-for="item in myStore.extraSoundData" :key="item.id">
          <h4 class="sound__title">{{ item.title }}</h4>
          <div class="sounds__container">
            <div v-for="sound in item.extraSound" :key="sound.id">
              <img class="sound__icon" :src="sound.soundIcon" />
            </div>
          </div>
        </div>

      </div>
      <div class="modal__footer">
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const myStore = useStore();

const closeModal = () => {
  myStore.closeModal();
};

const test = (item) => {
  console.log(item);
};
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
  .modal {
    max-width: 500px;
    width: 100%;
    height: 500px;
    background: $white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    .modal__title {
      text-align: center;
      font-size: 27px;
    }
    .modal__body {
      height: 480px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      &::-webkit-scrollbar {
        width: 3px;
        background-color: $white;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: $primary;
      }
      .sound__title {
        margin-bottom: 10px;
      }
      .sounds__container {
        display: flex;
        gap: 5px;
      }
      .sound__icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
    .modal__footer {
      background: red;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
