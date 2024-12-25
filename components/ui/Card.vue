<template>
    <div class="card">
        <NuxtLink :to="`/card/${card.cardId}`">
            <NuxtImg format="webp" :src="card.imageUrl" :alt="card.cardName" />
            <!-- <img :src="card.imageUrl" :alt="card.cardName"> -->
            <div class="card__info">
                {{ card.cardName }}
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    card: Object,
});
</script>

<style lang="scss" scoped>
.card {
    width: calc(25% - 19px);
    max-height: 300px;
    height: 300px;
    border-top-left-radius: 22px;
    border-bottom-right-radius: 22px;
    overflow: hidden;
    position: relative;
    transition: 0.3s ease;

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