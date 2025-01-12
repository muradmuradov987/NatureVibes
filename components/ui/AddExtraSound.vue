<template>
  <div>
    <IconsAdd class="addBtn" @click="openExtraSounds" />
  </div>
</template>

<script setup>
import Swal from "sweetalert2";

//Store
import { useStore } from "~/store/store";
const myStore = useStore();

const openExtraSounds = () => {
  Swal.fire({
    html: ``,
    buttonsStyling: false,
    showCancelButton: true,
    confirmButtonText: "Add",
    cancelButtonText: "Close",
    preConfirm: () => {},
    background: myStore.isDarkMode
      ? "linear-gradient(180deg, #0f2027, #203a43, #2c5364)"
      : "#fff",
    customClass: {
      popup: myStore.isDarkMode ? "swal-dark-mode" : "swal-light-mode",
    },
  });
};
</script>

<style lang="scss" scoped>
.addBtn {
  transition: transform 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
