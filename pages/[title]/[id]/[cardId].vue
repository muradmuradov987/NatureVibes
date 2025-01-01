<template>
  <!-- <h1>Route ID: {{ route.params.id }}</h1>
  <h1>Route ID: {{ route.params.cardId }}</h1>

  <p>{{ cardDetail }}</p> -->
  <div class="page__wrapper" :class="{ dark: myStore.isDarkMode }">
    <div class="container">
      <div v-if="cardDetail" class="card__detail">
        <h1 class="card__title">{{ cardDetail.cardName }}</h1>
        <div class="detail__container">
          <div class="detail__left">
            <div class="card__cover">
              <img :src="cardDetail.imageUrl" alt="Card Image" />
            </div>
          </div>
          <div class="detail__right">
            <audio controls autoplay loop>
              <source :src="cardDetail.sound" />
            </audio>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Card Info not found</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const myStore = useStore();
import { useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

const cardDetail = ref(null);

const fetchData = async () => {
  try {
    await myStore.getSoundsData();
    const { id, cardId } = route.params;
    const dataset = myStore.appData.find((item) => item.id === parseInt(id));
    if (dataset) {
      cardDetail.value = dataset.card.find(
        (c) => c.cardId === parseInt(cardId)
      );
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
.card__detail {
  .card__title {
    text-align: center;
    margin-bottom: 40px;
  }
  .detail__container {
    display: flex;
    gap: 30px;
    .detail__left {
      width: 50%;
      .card__cover {
        max-width: 300px;
        width: 300px;
        max-height: 400px;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .detail__right {
      width: 50%;
      
    }
  }
}

.dark {
  .card__detail {
    .card__title {
     color: $white;
    }
  }
}
</style>
