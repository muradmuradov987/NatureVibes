import { useStore } from "~/store/store";

export default defineNuxtRouteMiddleware((to, from) => {
  const myStore = useStore();
  myStore.tempExtraSound = [];
  myStore.clearTimer()

});
