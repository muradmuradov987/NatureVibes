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
import Swal from 'sweetalert2';

import { useStore } from '~/store/store';
const myStore = useStore();

const router = useRouter();

defineProps({
    card: Object,
    link: String,
});



const handleLockedCard = () => {
    if (!myStore.isLoggedIn) {
        Swal.fire({
            html: `
                <div class="login__modal">
                    <div class="modal__logo-container">
                        <div class="logo">
                            <img src="/images/logo.webp" alt="logo">
                        </div>
                        <h3>Nature<span>Vibes</span></h3>
                    </div>

                    <h2>Login or Sign up</h2>
                    <p>You need to log in to access premium sounds and features.</p>
                </div>
            `,
            buttonsStyling: false,
            showCancelButton: true,
            confirmButtonText: 'Go to Login',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                router.push('/login');
            },
            background: myStore.isDarkMode ? 'linear-gradient(180deg, #0f2027, #203a43, #2c5364)' : '#fff',
            customClass: {
                popup: myStore.isDarkMode ? 'swal-dark-mode' : 'swal-light-mode',
            },
        });
    } else if (myStore.isLoggedIn) {
        Swal.fire({
            html: `
                <div class="upgrade__modal">
                    <img src="/images/crown.svg" alt="crown">                           
                    <h2>Unlock Premium Features!</h2>
                    <p>Upgrade to enjoy exclusive sounds and unlimited access.
                     Starting at just <span>$4.99</span>/month, you can take your relaxation journey to the next level.</p>
                     <div class="benefits">
                        <h4>Benefits include:</h4>
                        <p>Over 20 Exclusive Sounds</p>
                        <p>Unlimited Access</p>
                        <p>Early Access to Updates</p>
                     </div>
                     <p class="reminder">Don't miss out on the ultimate relaxation experience!</p>
                </div>
            `,
            buttonsStyling: false,
            showCancelButton: true,
            confirmButtonText: 'Upgrade now',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                router.push('/upgrade');
            },
            background: myStore.isDarkMode ? 'linear-gradient(180deg, #0f2027, #203a43, #2c5364)' : '#fff',
            customClass: {
                popup: myStore.isDarkMode ? 'swal-dark-mode' : 'swal-light-mode',
            },
        });
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