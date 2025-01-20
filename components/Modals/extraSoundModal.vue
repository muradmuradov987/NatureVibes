<template>
  <div class="modal__overlay" @click="myStore.closeModal()">
    <div class="modal" @click.stop>
      <h2 class="modal__title">Add extra sound</h2>
      <div class="modal__body">
        <div v-for="item in myStore.extraSoundData" :key="item.id">
          <h4 class="sound__title">{{ item.title }}</h4>
          <div class="sounds__container">
            <div
              class="sound__icon"
              v-for="sound in item.extraSound"
              :key="sound.id"
            >
              <img
                :src="sound.soundIcon"
                :class="{
                  selected: selectedSounds.includes(
                    `${item.id}-${sound.soundId}`
                  ),
                  disabled:
                    !selectedSounds.includes(`${item.id}-${sound.soundId}`) &&
                    selectedSounds.length >= 5,
                }"
                @click="toggleSelection(item.id, sound.soundId)"
              />
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

const toggleSelection = (itemId, soundId) => {
  const uniqueId = `${itemId}-${soundId}`;

  if (selectedSounds.value.includes(uniqueId)) {
    selectedSounds.value = selectedSounds.value.filter((id) => id !== uniqueId);
  } else {
    if (selectedSounds.value.length < 5) {
      selectedSounds.value.push(uniqueId);
    } else {
      alert("You can only select up to 5 sounds.");
    }
  }
};

const addSounds = () => {
  selectedSounds.value.forEach((selection) => {
    const [id, soundIndex] = selection.split("-");
    const category = myStore.extraSoundData.find(
      (item) => item.id.toString() === id
    );
    if (category) {
      const sound = category.extraSound.find(
        (item) => item.soundId === parseInt(soundIndex)
      );
      if (sound) {
        if (myStore.tempExtraSound.length == 5) {
          console.log("OLMAZ PUSH ELEMEK ");
        } else {
          myStore.tempExtraSound.push(sound);
          selectedSounds.value = [];
          myStore.closeModal();
        }
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.disabled {
  border-radius: unset !important;
}
.modal__overlay {
  position: absolute;
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
