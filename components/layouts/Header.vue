<template>
    <header>
        <div class="container">
            <nav>
                <NuxtLink to="/">
                    <div class="logo__container">
                        <div class="logo">
                            <img src="~/assets/images/logo.webp" alt="logo">
                        </div>
                        <h3>Nature<span>Vibes</span></h3>
                    </div>
                </NuxtLink>


                <div class="nav__links">
                    <NuxtLink>Home</NuxtLink>
                    <NuxtLink>Features</NuxtLink>
                    <NuxtLink>Subscription</NuxtLink>
                    <NuxtLink>Pricing</NuxtLink>
                </div>
                <div class="nav__right">
                    <NuxtLink>Login</NuxtLink>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>

</script>



<style lang="scss" scoped>
header {
    background: $bg-header;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

    nav {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo__container {
            width: 180px;
            height: 60px;
            display: flex;
            align-items: center;
            gap: 10px;

            .logo {
                min-width: 60px;
                height: 100%;
                border-radius: 50%;
                overflow: hidden;
                transition: 0.3s ease-in-out;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            h3 {
                span {
                    color: $head;
                }
            }

            &:hover {
                .logo {
                    box-shadow: 0px 0px 20px 5px rgb(124, 126, 120);
                }
            }
        }

        .nav__links {
            display: flex;
            gap: 20px;

            a {
                font-weight: 500;
            }
        }

        .nav__right {
            a {
                font-weight: 500;
            }
        }
    }
}
</style>