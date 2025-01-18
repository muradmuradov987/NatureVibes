<template>
  <div>
    <IconsAdd class="addBtn" @click=" myStore.showModal('extraSoundModal')" />
  </div>
</template>

<script setup>
//Store
import { useStore } from "~/store/store";
const myStore = useStore();

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
