<template>
  <div class="modal__overlay" @click="myStore.closeModal()">
    <div class="modal" @click.stop>
      <div class="validation__info">
        <h2 class="modal__title">Extra sounds</h2>
        <span class="info__msg" v-if="max__select">You can select and add a maximum of 5 votes!</span>
        <span class="info__msg" v-if="mustSelect">Please select at least one sound!</span>
        <span class="info__msg" v-if="sameSelect">The added element cannot be added again.</span>
        <span class="info__msg" v-if="premiumInfo">You need to unlock premium features.</span>
      </div>
      <div class="modal__body">
        <div v-for="item in myStore.extraSoundData">
          <h4 class="sound__title">{{ item.title }}</h4>
          <div class="sounds__container">
            <div class="sound__icon" :class="{ selected: selectedSounds.some((s) => s.soundId === sound.soundId) }"
              v-for="sound in item.extraSound" :key="sound.soundId" @click="toggleSelection(sound)">
              <img :src="sound.soundIcon" />
              <iconsLock class="lock" v-if="sound.isLocked && sound.premiumSound" />
              <iconsUnLock class="lock" v-if="!sound.isLocked && sound.premiumSound" />
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
const premiumInfo = ref(false);

const resetInfoMessage = () => {
  max__select.value = false
  mustSelect.value = false
  sameSelect.value = false
  premiumInfo.value = false
}


const toggleSelection = (sound) => {
  if (sound.isLocked) {
    premiumInfo.value = true;
    setTimeout(() => {
      premiumInfo.value = false;
    }, 3000);
    return;
  } else {
    const index = selectedSounds.value.findIndex((s) => s.soundId === sound.soundId);
    if (index !== -1) {
      selectedSounds.value.splice(index, 1);
    } else {
      if (selectedSounds.value.length >= 5) {
        resetInfoMessage()
        max__select.value = true;
        setTimeout(() => {
          max__select.value = false;
        }, 3000);
        return;
      }
      selectedSounds.value.push(sound);
    }

  }

};

const addSounds = () => {
  if (selectedSounds.value.length === 0) {
    resetInfoMessage()
    mustSelect.value = true;
    setTimeout(() => {
      mustSelect.value = false;
    }, 3000);
    return;
  }

  if (myStore.tempExtraSound.length >= 5) {
    resetInfoMessage()
    max__select.value = true;
    setTimeout(() => {
      max__select.value = false;
    }, 3000);
    return;
  }

  selectedSounds.value.forEach((sound) => {
    if (!myStore.tempExtraSound.some((item) => item.soundId === sound.soundId)) {
      if (myStore.tempExtraSound.length < 5) {
        myStore.tempExtraSound.push(sound);
      } else {
        resetInfoMessage()
        max__select.value = true;
        setTimeout(() => {
          max__select.value = false;
        }, 3000);
      }
    } else {
      resetInfoMessage()
      sameSelect.value = true;
      setTimeout(() => {
        sameSelect.value = false;
      }, 3000);
    }
  });

  selectedSounds.value = [];
};



</script>

<style lang="scss" scoped>
.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .modal {
    max-width: 500px;
    width: 100%;
    height: 500px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    animation: modalIn 0.7s ease-in-out;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    .validation__info {
      height: 75px;

      .modal__title {
        text-align: center;
        font-size: 27px;
        color: $white;
      }

      .info__msg {
        color: red;
        font-style: italic;
        font-size: 14px;
        text-align: center;
        display: block;
      }
    }

    .modal__body {
      height: 480px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;

      &::-webkit-scrollbar {
        width: 3px;
        background-color: $white;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: $primary;
      }

      .sound__title {
        color: $white;

      }

      .sounds__container {
        display: flex;
        gap: 5px;
      }

      .sound__icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 2px solid transparent;
        position: relative;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .lock {
          position: absolute;
          top: 7px;
          right: 5px;
          width: 10px;
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


/*---------------Media Queries--------------*/
@media (max-width: 767px) {
  .modal__overlay {
    .modal {
      padding: 15px;

      .modal__title {
        font-size: 22px;
      }

      .info__msg {
        font-size: 12px;
      }

      .modal__body {
        .sound__title {
          color: $white;
        }

        .sounds__container {
          display: flex;
        }

        .sound__icon {
          width: 40px;
          height: 40px;

          img {
            width: 40px;
            height: 40px;
          }

          .lock {
            width: 8px;
          }
        }
      }
    }
  }
}
</style>
