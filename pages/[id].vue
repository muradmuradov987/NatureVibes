<template>
    <h1>Route ID: {{ route.params.id }}</h1>

    <h1 v-if="dataDetail">Sound Name: {{ dataDetail.name }}</h1>
    <p>{{ dataDetail }}</p>
    <!-- <p v-else-if="loading">Loading...</p>
    <p v-else>Data Not Found. Please check the URL.</p> -->
</template>


<script setup>
import { useStore } from '~/store/store';
const myStore = useStore();
import { useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

const dataDetail = ref(null);

const fetchDassta = async () => {
    if (!myStore.appData.length) {
        await myStore.getSoundsData();
    }
    const id = parseInt(route.params.id);
    dataDetail.value = myStore.appData.find((s) => s.id === id) || null;
    if (!dataDetail.value) {
        router.push("/404");
    }
};


const fetchData = async () => {
    try {
        if (!myStore.appData.length) {
            await myStore.getSoundsData();
        }
        const id = parseInt(route.params.id);
        dataDetail.value = myStore.appData.find((s) => s.id === id) || null;
        if (!dataDetail.value) {
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
