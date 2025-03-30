<template>
    <ModalsLoginModal v-if="myStore.modalTitle == 'loginModal'" />
    <ModalsUpgradeModal v-if="myStore.modalTitle == 'upgradeModal'" />
    <div class="main" :class="{ dark: myStore.isDarkMode }" v-if="!myStore.isLoading">
        <section v-for="item in myStore.appData" :key="item.id">
            <div class="container">
                <h1 class="title">{{ item.title }}</h1>
                <div class="section__wrapper">
                    <uiCard v-for="card in item.card" :key="card.cardId" :card="card"
                        :link="`/${item.title}/${item.id}/${card.cardId}`" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useStore } from '~/store/store';
const myStore = useStore();




onMounted(async () => {
    await myStore.getSoundsData();
});
</script>

<style lang="scss" scoped>
.main {
    min-height: 100vh;

    section {
        .title {
            text-align: center;
            transition: 0.3s ease;
            margin-bottom: 50px;
        }

        .section__wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
        }
    }
}

//Dark mode
.dark {
    .main {
        section {
            .title {
                color: $text-dark;
            }

            .card {
                border: 1px solid $white;

            }
        }
    }
}
</style>