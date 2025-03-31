import { useStore } from "~/store/store";

export default defineNuxtRouteMiddleware((to, from) => {
  const myStore = useStore();
  if (!myStore.isLoggedIn) {
    return navigateTo("/");
  }
});
