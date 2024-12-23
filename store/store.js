// store/theme.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  const isDarkMode = ref(false);
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
});
