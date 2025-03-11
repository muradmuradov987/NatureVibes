<template>
  <IconsTimer class="timer" @click="myStore.showModal('setTimerModal')" />
</template>

<script setup>
//Store
import { useStore } from "~/store/store";
const myStore = useStore();

</script>

<style lang="scss" scoped></style>
