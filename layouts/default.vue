<template>
    <div class="defaultLayout" :class="{ dark: myStore.isDarkMode }">
        <layoutsHeader />
        <slot />
        <div class="container">
            <h1>Footer</h1>
        </div>
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
