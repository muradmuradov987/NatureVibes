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

  //Auth
  const auth = ref(false)

  return {
    auth,
    isDarkMode,
    toggleDarkMode,
    isLoading,
    appData,
    getSoundsData,
  };
});
