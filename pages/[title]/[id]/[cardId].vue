<template>
  <ModalsExtraSoundModal v-if="myStore.modalTitle == 'extraSoundModal'" />
  <ModalsSetTimerModal v-if="myStore.modalTitle == 'setTimerModal'" />
  <div class="page__wrapper" :class="{ dark: myStore.isDarkMode }">
    <div class="container">
      <div v-if="cardDetail" class="card__detail">
        <h1 class="card__title">{{ cardDetail.cardName }}</h1>
        <div class="detail__container">
          <div class="detail__left">
            <div class="card__cover">
              <img :src="cardDetail.imageUrl" alt="Card Image" />
            </div>
          </div>
          <div class="detail__right">
            <!--Extra Sounds-->
            <div class="extra__sounds-container">
              <div v-for="(item, index) in myStore.tempExtraSound" :key="item.soundId">
                <img :src="item.soundIcon" style="width: 20px" />
                <audio :id=item.soundId :src="item.sound" controls autoplay loop></audio>
                <span @click="removeSound(item.soundId)">X</span>
              </div>
            </div>

            <!--Countdown-->
            <div v-if="myStore.countdown !== null" class="setTimer__container">
              <h3>
                {{ formatTime(myStore.countdown) }}
              </h3>
              <button class="clear__timer-btn" @click="myStore.clearTimer()">
                Clear Timer
              </button>
            </div>

            <!--Sound Control-->
            <div class="sound__control">
              <!--Add extra sounds-->
              <UiAddExtraSoundBtn />

              <!--Audio Player-->
              <div class="audio-player">
                <div class="playBtn" @click="myStore.toggleAudio">
                  <IconsPause v-if="myStore.isPlaying" />
                  <IconsPlay v-else />
                </div>
                <audio ref="audioElement" :src="cardDetail.sound" autoplay loop></audio>
              </div>
              <!--Set Timer-->
              <uiSetTimerBtn />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Card Info not found</p>
      </div>
    </div>
  </div>
</template>

<script setup>
//Store
import { useStore } from "~/store/store";
const myStore = useStore();

//Router
import { useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

const cardDetail = ref(null);
const audioElement = ref(null);


const fetchData = async () => {
  try {
    await myStore.getSoundsData();
    const { id, cardId } = route.params;
    const dataset = myStore.appData.find((item) => item.id === parseInt(id));
    if (dataset) {
      cardDetail.value = dataset.card.find(
        (c) => c.cardId === parseInt(cardId)
      );
    }
    if (!cardDetail.value) {
      router.push("/404");
    }
    await myStore.getExtraSoundsData();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};


const removeSound = (id) => {
  myStore.tempExtraSound = myStore.tempExtraSound.filter(item => item.soundId !== id)
};

onMounted(async () => {
  await fetchData();

  //Check audio status
  myStore.setAudioRef(audioElement.value);
  myStore.playAudio();
});
</script>

<style scoped lang="scss">
.card__detail {
  .card__title {
    text-align: center;
    margin-bottom: 40px;
  }

  .detail__container {
    display: flex;
    gap: 30px;

    .detail__left {
      width: 50%;

      .card__cover {
        max-width: 300px;
        width: 300px;
        max-height: 400px;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .detail__right {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      padding: 20px;


      .extra__sounds-container {}


      .setTimer__container {
        display: flex;
        align-items: center;
        gap: 10px;

        h3 {
          color: $primary;
        }

        .clear__timer-btn {
          border: 1px solid $primary;
          padding: 5px 10px;
          font-weight: 500;
          background: none;
          border-radius: 8px;
          color: $primary;
          cursor: pointer;
        }
      }

      .sound__control {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .playBtn {
          background-color: $primary;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: transform 0.2s ease;

          &:hover {
            transform: scale(1.1);
          }
        }

        .timer {
          cursor: pointer;
          transition: transform 0.2s ease;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}

/*---------------Media Queries--------------*/
@media (max-width: 767px) {
  .card__detail {
    .card__title {
      margin-bottom: 30px;
    }

    .detail__container {
      flex-direction: column;
      gap: 20px;

      .detail__left {
        width: 100%;

        .card__cover {
          max-width: unset;
          width: 100%;
          max-height: unset;
          height: 250px;
        }
      }

      .detail__right {
        width: 100%;
        height: 200px;

        .extra__sounds-container {}
      }
    }
  }
}

.dark {
  .card__detail {
    .card__title {
      color: $white;
    }
  }
}
</style>
