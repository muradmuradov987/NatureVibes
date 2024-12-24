<template>
    <div class="main" :class="{ dark: myStore.isDarkMode }">
        <section>
            <div class="container">
                <h1 class="title">Home Content</h1>
                <div v-if="!myStore.isLoading">
                    <ul>
                        <li v-for="item in myStore.appData" :key="item.id">
                            <NuxtLink :to="`/${item.id}`">{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="section__wrapper">
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/logo.webp" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/logo.webp" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/logo.webp" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/logo.webp" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/logo.webp" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/logo.webp" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
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
        padding: 100px 0;

        .title {
            text-align: center;
            transition: 0.3s ease;
            margin-bottom: 50px;
        }

        .section__wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;

            .card {
                width: calc(25% - 20px);
                max-height: 400px;
                height: 400px;
                border-top-left-radius: 18px;
                border-bottom-right-radius: 18px;
                overflow: hidden;
                position: relative;

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
                    background: rgba(255, 255, 255, 0.10);
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
        }


    }
}

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


/*---------------Media Queries--------------*/
@media (max-width: 767px) {
    .main {
        .section__wrapper {
            .card {
                width: calc(50% - 18px) !important;
                max-height: 250px !important;
                height: 250px !important;
                .card__info {
                    height: 50px !important;
                    font-size: 18px !important;
                }
            }
        }
    }
}

@media (min-width: 768px) and (max-width: 1200px) {
    .main {
        .section__wrapper {
            .card {
                width: calc(33.33% - 18px) !important;
            }
        }
    }

}


// @media (max-width: 1024px) {
//     .card {
//         width: calc(33.33% - 16px);
//         /* 3 kart için genişlik */
//     }
// }

// @media (max-width: 768px) {
//     .card {
//         width: calc(50% - 16px);
//         /* 2 kart için genişlik */
//     }
// }

// @media (max-width: 480px) {
//     .card {
//         width: 100%;
//         /* 1 kart için genişlik */
//     }
// }</style>