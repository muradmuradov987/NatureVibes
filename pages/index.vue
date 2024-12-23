<template>
    <div class="main" :class="{ dark: myStore.isDarkMode }">
        <section>
            <div class="container">
                <h1 class="title">Home Content</h1>
                <div class="section__wrapper">
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/11.jpg" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/11.jpg" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/11.jpg" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/11.jpg" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/11.jpg" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <h1 class="title">Home Content</h1>
                <div class="section__wrapper">
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/11.jpg" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/11.jpg" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/11.jpg" alt="">
                            <div class="card__info">
                                Refreshing Rain
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="card">
                        <NuxtLink to="/">
                            <img src="~/assets/images/11.jpg" alt="">
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
                max-width: 270px;
                width: 270px;
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
</style>