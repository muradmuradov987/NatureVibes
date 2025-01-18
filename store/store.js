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
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  //isLoggedIn
  const isLoggedIn = ref(false);

  //isPremium
  const isPremium = ref(false);

  const unlockCards = () => {
    if (isPremium.value) {
      appData.value.forEach((category) => {
        category.card.forEach((card) => {
          card.isLocked = false;
        });
      });
    }
  };

  const modalTitle = ref("");
  const showModal = (modal) => {
    modalTitle.value = modal;
    
  };
  const closeModal = () => {
    modalTitle.value = "";
  };

  return {
    isLoading,
    isDarkMode,
    toggleDarkMode,
    appData,
    getSoundsData,
    extraSoundData,
    getExtraSoundsData,
    isLoggedIn,
    isPremium,
    unlockCards,
    modalTitle,
    showModal,
    closeModal,
  };
});
