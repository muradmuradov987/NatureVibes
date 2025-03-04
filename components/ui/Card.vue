<template>
    <div class="card">
        <NuxtLink v-if="!card.isLocked" :to="link">
            <NuxtImg format="webp" loading="lazy" :src="card.imageUrl" :alt="card.cardName" />
            <div class="card__info">
                {{ card.cardName }}
            </div>
            <iconsUnLock class="lock" v-if="card.premiumCard" />
        </NuxtLink>

        <div v-else @click="handleLockedCard">
            <NuxtImg format="webp" loading="lazy" :src="card.imageUrl" :alt="card.cardName" />
            <div class="card__info">
                {{ card.cardName }}
            </div>
            <iconsLock class="lock" />
        </div>
    </div>

</template>

<script setup>

import { useStore } from '~/store/store';
const myStore = useStore();

defineProps({
    card: Object,
    link: String,
});



const handleLockedCard = () => {
    if (!myStore.isLoggedIn) {
        myStore.showModal('loginModal')
    } else if (myStore.isLoggedIn) {
        myStore.showModal('upgradeModal')
    }
};


</script>

<style lang="scss" scoped>
.card {
    width: calc(25% - 19px);
    max-height: 300px;
    height: 300px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    overflow: hidden;
    position: relative;
    transition: 0.3s ease;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s ease;
    }

    .card__info {
        width: 100%;
        margin: 0 auto;
        height: 70px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        color: $white;
        font-size: 20px;
        font-weight: 500;
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0.514);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(1px);
        -webkit-backdrop-filter: blur(1px);
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
    }

    .lock {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 25px;
    }


}


/*---------------Media Queries--------------*/
@media (max-width: 767px) {
    .card {
        width: calc(50% - 13px) !important;
        height: 280px !important;

        .card__info {
            height: 45px !important;
            font-size: 16px !important;
        }
    }

}

@media (min-width: 768px) and (max-width: 1200px) {
    .card {
        width: calc(33.33% - 17px) !important;
    }
}
</style>