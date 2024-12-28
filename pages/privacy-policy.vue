<template>
    <div class="privacy-policy page__wrapper " :class="{ dark: myStore.isDarkMode }">
        <div class="container">
            <h1>Privacy Policy</h1>
            <p>Last updated: January 1, 2025</p>

            <div class="section">
                <h2>Introduction</h2>
                <p>
                    At NatureVibes we are committed to protecting your privacy and ensuring your personal data is
                    handled securely. This Privacy Policy explains how we collect, use, and safeguard your information.
                </p>
            </div>

            <div class="section">
                <h2>What Data We Collect</h2>
                <ul>
                    <li>Personal information (e.g., name, email address) when you create an account.</li>
                    <li>Usage data (e.g., app interactions, preferences).</li>
                    <li>Technical data (e.g., IP address, browser type).</li>
                </ul>
            </div>

            <div class="section">
                <h2>How We Use Your Data</h2>
                <p>Your data is used to:</p>
                <ul>
                    <li>Provide and improve our services.</li>
                    <li>Send account updates and promotional offers (with your consent).</li>
                    <li>Ensure the security and functionality of our platform.</li>
                </ul>
            </div>

            <div class="section">
                <h2>Third-Party Data Sharing</h2>
                <p>
                    We do not sell your data to third parties. However, we may share data with trusted partners to
                    provide certain services (e.g., payment processing, analytics).
                </p>
            </div>

            <div class="section">
                <h2>Cookies</h2>
                <p>
                    Our website uses cookies to enhance user experience and analyze site traffic. You can disable
                    cookies in your browser settings, but some features may not function correctly.
                </p>
            </div>

            <div class="section">
                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access your data.</li>
                    <li>Request corrections to inaccurate information.</li>
                    <li>Delete your data, subject to legal obligations.</li>
                </ul>
            </div>

            <div class="section">
                <h2>Policy Updates</h2>
                <p>
                    This Privacy Policy may be updated from time to time. We encourage you to review it periodically to
                    stay informed about how we are protecting your data.
                </p>
            </div>

            <div class="section">
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                    <li>Email: support@naturevibes.com</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>

import { useStore } from '~/store/store';
const myStore = useStore();

</script>

<style scoped lang="scss">
.privacy-policy {
    padding: 20px 0;

    .section {
        margin-bottom: 30px;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 10px;
        text-align: center;
    }

    ul {
        padding-left: 20px;

        li {
            margin-bottom: 10px;
        }
    }

    p {
        line-height: 1.6;
    }
}

.dark {

    h1,
    h2,
    p,
    li {
        color: $white;
    }
}
</style>