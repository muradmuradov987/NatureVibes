<template>
    <div class="defaultLayout" :class="{ dark: myStore.isDarkMode }">
        <uiLoading />
        <layoutsHeader />
        <slot />
        <layoutsFooter/>
    </div>
</template>


<script setup>
import { useStore } from '~/store/store';
const myStore = useStore();


</script>

<style scoped lang="scss">
.defaultLayout {
    background: $bg-gradient;
}

.dark {
    background: $bg-gradient-dark;
}
</style>
