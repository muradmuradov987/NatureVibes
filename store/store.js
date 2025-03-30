import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  //Loading
  const isLoading = ref(true);
  setTimeout(async () => {
    isLoading.value = false;
  }, 1500);

  //Dark Mode
  const isDarkMode = ref(false);
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  //All Data
  const appData = ref([]);
  const getSoundsData = async () => {
    if (appData.value.length > 0) return;
    try {
      const fetchedData = await $fetch("/api/data");
      appData.value = fetchedData || [];
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  //Extra Sounds
  const extraSoundData = ref([]);
  const getExtraSoundsData = async () => {
    if (extraSoundData.value.length > 0) return;
    try {
      const fetchedData = await $fetch("/api/extraSoundData");
      extraSoundData.value = fetchedData || [];
      //Check premium extra sounds
      if (isPremium.value) {
        extraSoundData.value.forEach((item) => {
          item.extraSound.forEach((sound) => {
            sound.isLocked = false;
          });
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };
  //Temp Extra Sounds
  const tempExtraSound = ref([]);

  /////////////////////Audio Control/////////////////
  const countdown = ref(null);
  let timerInterval = null;
  const isPlaying = ref(false);
  const duration = ref(null);
  const audio = ref(null);

  const setAudioRef = (audioElement) => {
    audio.value = audioElement;
  };

  const playAudio = () => {
    if (audio.value) {
      audio.value
        .play()
        .then(() => {
          isPlaying.value = true;
        })
        .catch((err) => {
          console.log("Autoplay failed:", err);
          isPlaying.value = false;
        });
    }
  };

  const pauseAudio = () => {
    if (audio.value) {
      audio.value.pause();
      tempExtraSound.value.forEach((item) => {
        const extraAudio = document.getElementById(item.soundId);
        if (extraAudio) {
          extraAudio.pause();
        }
      });
      isPlaying.value = false;
    }
  };

  //Play pause sound
  const toggleAudio = () => {
    if (isPlaying.value) {
      audio.value?.pause();
      tempExtraSound.value.forEach((item) => {
        const extraAudio = document.getElementById(item.soundId);
        if (extraAudio) {
          extraAudio.pause();
        }
      });
    } else {
      audio.value?.play();
      tempExtraSound.value.forEach((item) => {
        const extraAudio = document.getElementById(item.soundId);
        if (extraAudio) {
          extraAudio.play();
        }
      });
    }
    isPlaying.value = !isPlaying.value;
  };

  const setTimer = () => {
    clearTimer();
    countdown.value = duration.value;
    duration.value = null;
    timerInterval = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--;
      } else {
        clearTimer();
        pauseAudio();
      }
    }, 1000);
    closeModal();
  };

  const clearTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    countdown.value = null;
  };

  ////////////////////AUTH/////////////////////////
  //isLoggedIn
  const isLoggedIn = ref(false);

  //Show forms
  const formTitle = ref("login");

  /////////////////////////////////////////////////

  //isPremium

  const selectedPlan = ref("");

  const isPremium = ref(false);

  const upgradeToPremium = () => {
    isPremium.value = true;
    if (isPremium.value) {
      appData.value.forEach((category) => {
        category.card.forEach((card) => {
          card.isLocked = false;
        });
      });
    }
  };

  //Modal actions
  const modalTitle = ref("");
  const showModal = (modal) => {
    modalTitle.value = modal;
  };
  const closeModal = () => {
    modalTitle.value = "";
  };

  return {
    isLoading, //Loading
    isDarkMode, //Dark mode
    toggleDarkMode,
    appData, //All sounds data
    getSoundsData, // All data (Func)
    extraSoundData, //Extra sounds data
    getExtraSoundsData, // Extra sound data (Func)
    tempExtraSound,
    isPremium, //premium
    selectedPlan, //selected Plan
    upgradeToPremium, // Open the premium features
    modalTitle, //modal title
    showModal, //show modal
    closeModal, //close modal

    //Audio Control
    setAudioRef, // audio ref
    playAudio, // play sound
    pauseAudio, // puase sound
    toggleAudio, // play puase sound
    duration, // selected duration
    countdown, // selected time
    isPlaying, // sound play status
    setTimer, // set timer (func)
    clearTimer, //clear time (func)

    //Auth
    isLoggedIn, //auth status
    formTitle, //show auth comp
  };
});
