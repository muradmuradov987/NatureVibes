<template>
  <ModalsExtraSoundModal v-if="myStore.modalTitle == 'extraSoundModal'" />
  <ModalsSetTimerModal v-if="myStore.modalTitle == 'setTimerModal'" />
  <div class="page__wrapper" :class="{ dark: myStore.isDarkMode }">
    <div class="container">
      <div v-if="cardDetail" class="card__detail">
        <h1 class="card__title">{{ cardDetail.cardName }}</h1>
        <div class="detail__info">
          <img class="card__cover" :src="cardDetail.imageUrl" alt="Card Image" />
          <div class="detail__overlay">
            <!--Extra Sounds-->
            <div class="extra__sounds-container">
              <div class="extra__sound" v-for="(item, index) in myStore.tempExtraSound" :key="item.soundId">
                <img class="extra__sound-img" :src="item.soundIcon" />
                <audio :id=item.soundId :src="item.sound" autoplay loop></audio>
                <div class="extra__sound-volume">
                  <span>{{ item.name }}</span>
                  <input type="range" min="0" max="1" step="0.01" v-model="item.volume"
                    @input="updateExtraVolume(index, item.volume)" />
                </div>
                <IconsClose class="deleteSound" @click="removeSound(item.soundId, index, item.volume)" />
              </div>
            </div>

            <!--Sound Control-->
            <div class="sound__control-container">
              <!--Countdown-->
              <div v-if="myStore.countdown !== null" class="setTimer__container">
                <h3>
                  {{ formatTime(myStore.countdown) }}
                </h3>
                <button class="clear__timer-btn" @click="myStore.clearTimer()">
                  Clear Timer
                </button>
              </div>

              <!--Play Pause-->
              <div class="sound__control">
                <!--Add extra sounds btn-->
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

              <!--Volume Control-->
              <div class="volume__control">
                <input type="range" min="0" max="100" step="5" v-model="mainVolume" @input="updateMainVolume" />
                <span>{{ mainVolume }}</span>
              </div>
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


// Main sound volume
const audioElement = ref(null);
const mainVolume = ref(100);

const updateMainVolume = () => {
  if (audioElement.value) {
    audioElement.value.volume = mainVolume.value / 100;
  }
};


// Extra sounds volume
const updateExtraVolume = (index, volume) => {
  let extraAudiosVolume = document.querySelectorAll(".extra__sounds-container audio")
  if (extraAudiosVolume[index]) {
    extraAudiosVolume[index].volume = volume;
  }
};



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


const removeSound = (id, index) => {
  myStore.tempExtraSound[index].volume = 1
  myStore.tempExtraSound = myStore.tempExtraSound.filter(item => item.soundId !== id)
};

onMounted(async () => {
  await fetchData();

  //Check audio status
  myStore.setAudioRef(audioElement.value);
  myStore.playAudio();

  audioElement.value = document.querySelector("audio");
  if (audioElement.value) {
    audioElement.value.volume = mainVolume.value / 100;
  }

});


</script>

<style scoped lang="scss">
.card__detail {
  .card__title {
    text-align: center;
    margin-bottom: 40px;
  }

  .detail__info {
    width: 100%;
    height: 600px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;

    .card__cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .detail__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: rgba(0, 0, 0, 0.3);

      .extra__sounds-container {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .extra__sound {
          width: 300px;
          padding: 5px 10px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .extra__sound-img {
            min-width: 50px;
            max-width: 50px;
            height: 50px;
            border-radius: 5px;
          }

          .extra__sound-volume {
            width: 65%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            span {
              color: $white;
              font-style: italic;
            }

            input {
              width: 100%;
              appearance: none;
              height: 6px;
              background: $white;
              outline: none;
              border-radius: 5px;
              cursor: pointer;

              &::-webkit-slider-thumb {
                appearance: none;
                width: 15px;
                height: 15px;
                background: $primary;
                border-radius: 50%;
                cursor: pointer;
              }
            }

          }

          .deleteSound {
            cursor: pointer;
          }

        }
      }

      .sound__control-container {
        height: 100px;
        border-radius: 16px;

        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        position: relative;

        .setTimer__container {
          display: flex;
          align-items: center;
          gap: 10px;
          position: absolute;
          top: 50%;
          left: 30px;
          transform: translate(0%, -50%);

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
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

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

        .volume__control {
          position: absolute;
          top: 50%;
          right: 30px;
          transform: translate(0%, -50%);
          width: 220px;
          display: flex;
          align-items: center;
          gap: 10px;

          input {
            width: 80%;
            appearance: none;
            height: 6px;
            background: $white;
            outline: none;
            border-radius: 5px;
            cursor: pointer;

            &::-webkit-slider-thumb {
              appearance: none;
              width: 20px;
              height: 20px;
              background: $primary;
              border-radius: 50%;
              cursor: pointer;
            }
          }

          span {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 5px;
            background: $primary;
            color: $white;
          }
        }

      }
    }


  }

}

.dark {
  .card__title {
    color: $white;
  }
}

/*---------------Media Queries--------------*/
@media (max-width: 767px) {
  .card__detail {
    .card__title {
      margin-bottom: 30px;
    }

    .detail__info {
      height: 500px;
      border-radius: 10px;

      .detail__overlay {
        padding: 15px;

        .extra__sounds-container {
          .extra__sound {
            .extra__sound-img {
              min-width: 40px;
              max-width: 40px;
              height: 40px;
            }
          }
        }

        .sound__control-container {
          height: auto;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
          padding: 10px;

          .setTimer__container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            position: unset;
            top: unset;
            left: unset;
            transform: unset;

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
            gap: 25px;
            position: unset;
            top: unset;
            left: unset;
            transform: unset;
          }

          .volume__control {
            position: unset;
            top: unset;
            right: unset;
            transform: unset;
            width: 100%;
            justify-content: space-between;
          }

        }
      }


    }

  }
}
</style>
