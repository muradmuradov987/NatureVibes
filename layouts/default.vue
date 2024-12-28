<template>
    <div class="defaultLayout" :class="{ dark: myStore.isDarkMode }">
        <uiLoading />
        <layoutsHeader />
        <slot class="test"/>
        <layoutsFooter/>
        <uiModalsCardModal v-if="myStore.modal.show"/>
    </div>
</template>


<script setup>
import { useStore } from '~/store/store';
const myStore = useStore();


</script>

<style scoped lang="scss">
.defaultLayout {
    background: $bg-gradient;
    min-height: 100vh;
}

.dark {
    background: $bg-gradient-dark;
}
</style>
