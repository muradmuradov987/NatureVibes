<template>
    <div class="modal-backdrop">
        <div class="modal-content">
            <h2 v-if="!myStore.isLoggedIn">Login or Sign up</h2>
            <h2 v-else>Upgrade to Premium</h2>
            <p v-if="!myStore.isLoggedIn">
                You need to log in to access premium sounds and features.
            </p>
            <p v-else>
                Unlock all premium sounds and enjoy exclusive features by upgrading your account.
            </p>

            <ul v-if="myStore.isLoggedIn">
                <li>🔓 Access all premium sounds</li>
                <li>✨ Enjoy ad-free listening</li>
                <li>💾 Save your favorite sound combinations</li>
                <li>🌟 Priority support</li>
            </ul>

            <div class="modal-actions">
                <button v-if="!myStore.isLoggedIn" @click="redirectToLogin" class="btn">Login</button>
                <button v-else @click="redirectToPricing" class="btn">See Pricing</button>
                <button @click="closeModal" class="btn-secondary">Close</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'nuxt/app';
const router = useRouter();

import { useStore } from '~/store/store';
const myStore = useStore();



const redirectToLogin = () => {
    closeModal();
    router.push('/login');
};

const redirectToPricing = () => {
    closeModal();
    router.push('/pricing');
};


</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 400px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-actions {
    margin-top: 1.5rem;
}

.btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin: 0.5rem;
}

.btn-secondary {
    background: #f8f9fa;
    color: #212529;
    border: 1px solid #ced4da;
}
</style>