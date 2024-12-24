import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  //Dark Mode
  const isDarkMode = ref(false);
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  const isLoading = ref(true);
  const appData = ref([]);
  const getSoundsData = async () => {
    isLoading.value = true;
    try {
      const data = await new Promise((resolve) => {
        setTimeout(async () => {
          const fetchedData = await $fetch("/api/data");
          resolve(fetchedData);
        }, 1000);
      });
      appData.value = data || [];
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isDarkMode,
    toggleDarkMode,
    isLoading,
    appData,
    getSoundsData,
  };
});
