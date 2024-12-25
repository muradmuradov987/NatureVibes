<template>
    <h1>Route ID: {{ route.params.id }}</h1>

    <h1 v-if="cardDetail">Sound Name: {{ cardDetail.name }}</h1>
    <p>{{ cardDetail }}</p>


    <div v-if="cardDetail">
        <h1>{{ cardDetail.cardName }}</h1>
        <div class="card__cover">
            <img :src="cardDetail.imageUrl" alt="Card Image">
        </div>
    </div>
    <div v-else>
        <p>Card not found</p>
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
        if (!myStore.appData.length) {
            await myStore.getSoundsData();
        }

        const id = parseInt(route.params.id);
        cardDetail.value = myStore.appData.flatMap(item => item.card).find(c => c.cardId === id);

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
    width: 70%;
    height: 300px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>