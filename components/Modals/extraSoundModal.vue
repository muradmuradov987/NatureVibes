<template>
  <div class="modal__overlay" @click="myStore.closeModal()">
    <div class="modal" @click.stop>
      <div>
        <h2 class="modal__title">Add extra sound</h2>
        <span class="info__msg" v-if="max__select">You can choose a maximum of 5 sounds!</span>
        <span class="info__msg" v-if="mustSelect">Please select at least one sound!</span>
        <span class="info__msg" v-if="sameSelect">The added element cannot be added again.</span>
      </div>
      <div class="modal__body">
        <div v-for="item in myStore.extraSoundData">
          <h4 class="sound__title">{{ item.title }}</h4>
          <div class="sounds__container">
            <div class="sound__icon" :class="{ selected: selectedSounds.some((s) => s.soundId === sound.soundId) }"
              v-for="sound in item.extraSound" :key="sound.soundId" @click="toggleSelection(sound)">
              <img :src="sound.soundIcon" />
            </div>
          </div>
        </div>
      </div>
      <div class="modal__footer">
        <button class="primary__btn" @click="addSounds()">Add</button>
        <button class="secondary__btn" @click="myStore.closeModal()">
          Close
        </button>
      </div>
    </div>
  </div>
</template>



<script setup>
import { useStore } from "~/store/store";
const myStore = useStore();

const selectedSounds = ref([]);
const max__select = ref(false);
const mustSelect = ref(false);
const sameSelect = ref(false);


const toggleSelection = (sound) => {
  const index = selectedSounds.value.findIndex((s) => s.soundId === sound.soundId);
  if (index !== -1) {
    selectedSounds.value.splice(index, 1);
  } else {
    if (selectedSounds.value.length >= 5) {
      max__select.value = true
      setInterval(() => {
        max__select.value = false
      }, 3000)
      return;
    }
    selectedSounds.value.push(sound);
  }
};


const addSounds = () => {
  if (selectedSounds.value.length === 0) {
    mustSelect.value = true
    setInterval(() => {
      mustSelect.value = false
    }, 3000)
    return;
  }

  selectedSounds.value.forEach((sound) => {
    if (!myStore.tempExtraSound.some((item) => item.soundId === sound.soundId)) {
      myStore.tempExtraSound.push(sound);
    } else {
      sameSelect.value = true
      setInterval(() => {
        sameSelect.value = false
      }, 3000)
    }
  });

  // Seçili sesleri sıfırla
  selectedSounds.value = [];

};


</script>

<style lang="scss" scoped>
.disabled {
  border-radius: unset !important;
}

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
    height: 500px;
    background: $white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    z-index: 2;

    .modal__title {
      text-align: center;
      font-size: 27px;
    }

    .info__msg {
      color: red;
      font-size: 14px;
      text-align: center;
      display: block;
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
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 2px solid transparent;

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }

      .selected {
        border: 2px solid $primary;
      }
    }

    .modal__footer {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
}
</style>
