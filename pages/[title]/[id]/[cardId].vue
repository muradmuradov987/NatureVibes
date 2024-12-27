<template>
    <h1>Route ID: {{ route.params.id }}</h1>
    <h1>Route ID: {{ route.params.cardId }}</h1>

    <p>{{ cardDetail }}</p>
    <div class="container">
        <div v-if="cardDetail">
            <h1>{{ cardDetail.cardName }}</h1>
            <div class="card__cover">
                <img :src="cardDetail.imageUrl" alt="Card Image">
            </div>
        </div>
        <div v-else>
            <p>Card not found</p>
        </div>
    </div>
</template>


<script setup>
import { useStore } from '~/store/store';
const myStore = useStore();
import { useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

const cardDetail = ref(null);


const fetchData = async () => {
    try {
        await myStore.getSoundsData();
        const { id, cardId } = route.params;
        const dataset = myStore.appData.find(item => item.id === parseInt(id));
        if (dataset) {
            cardDetail.value = dataset.card.find(c => c.cardId === parseInt(cardId));
        }
        if (!cardDetail.value) {
            router.push("/404");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};



onMounted(async () => {
    await fetchData();
});


</script>


<style scoped lang="scss">
.card__cover {
    width: 30%;
    height: 400px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>