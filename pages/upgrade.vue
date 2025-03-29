<template>
  <ModalsUpgradePaymentModal v-if="myStore.modalTitle == 'upgrade-payment'" />
  <div class="page__wrapper">
    <div class="container">
      <div class="upgrade__hero">
        <NuxtImg
          format="webp"
          loading="lazy"
          src="../public/images/upgrade.png"
        />
        <div class="upgrade__hero-overlay">
          <h1>Upgrade to Premium and Keep Your Soul Calm</h1>
          <p>
            Relax with unlimited nature sounds, an ad-free experience, and
            exclusive sound mixes
          </p>
          <button
            class="primary__btn"
            v-if="!myStore.isLoggedIn"
            @click="$router.push('/login')"
          >
            Login
          </button>
        </div>
      </div>
    </div>
    <section class="pricing">
      <h2 class="pricing-title">Choose Your Plan</h2>
      <div class="pricing-cards">
        <div class="pricing-card">
          <h3>Monthly Plan</h3>
          <p class="price">$5.99 <span>/ Month</span></p>
          <ul>
            <li>✔️ Unlimited access to all sounds</li>
            <li>✔️ High-quality audio</li>
            <li>✔️ Custom playlists</li>
            <li>✔️ No ads</li>
            <li>✔️ Offline mode</li>
          </ul>
          <button class="btn-upgrade" @click="openUpgradeModal('monthly')">
            Upgrade Now
          </button>
        </div>
        <div class="pricing-card highlight">
          <h3>Yearly Plan</h3>
          <p class="price">$49.99 <span>/ Year</span></p>
          <p class="discount">Save 30%!</p>
          <ul>
            <li>✔️ Everything in Monthly Plan</li>
            <li>✔️ Exclusive premium sounds</li>
            <li>✔️ Priority customer support</li>
            <li>✔️ Early access to new features</li>
          </ul>
          <button class="btn-upgrade" @click="openUpgradeModal('yearly')">
            Upgrade Now
          </button>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Premium Üyelik Avantajları</h2>
        <ul>
          <li>✅ Sınırsız ses erişimi (yağmur, dalga, orman, vs.)</li>
          <li>✅ Reklamsız deneyim</li>
          <li>✅ Özel ses kombinasyonları</li>
          <li>✅ Uyku zamanlayıcısı</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const myStore = useStore();

const selectedPlan = ref("");

const openUpgradeModal = (plan) => {
  selectedPlan.value = plan;
  myStore.modalTitle = "upgrade-payment";
};
</script>

<style lang="scss" scoped>
.upgrade__hero {
  border-radius: 10px;
  overflow: hidden;
  height: 400px;
  position: relative;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .upgrade__hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-size: 30px;
      color: $white;
    }

    p {
      font-size: 1.2rem;
      opacity: 0.8;
      color: $white;
    }
    button {
      padding: 10px 30px;
    }
  }
}

.pricing {
  text-align: center;
  padding: 50px 0;
  .pricing-title {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .pricing-cards {
    display: flex;
    gap: 40px;
    justify-content: center;
  }
  .pricing-card {
    background: $white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    transition: 0.3s ease-in-out;
    width: 350px;
    text-align: center;
    position: relative;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .price {
      font-size: 1.8rem;
      font-weight: bold;
      margin: 10px 0;
      color: $primary;
      span {
        font-size: 1rem;
      }
    }
    .discount {
      background: #ff9800;
      color: $white;
      font-weight: 700;
      padding: 5px 10px;
      border-radius: 6px;
      display: inline-block;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 15px 0;
      text-align: start;
      li {
        font-size: 0.95rem;
        padding: 5px 0;
      }
    }

    .btn-upgrade {
      background: $primary;
      color: $white;
      border: none;
      padding: 10px 15px;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: 0.3s;
    }
  }

  .highlight {
    border: 2px solid $primary;
  }
}

.features {
  margin-top: 40px;
  text-align: left;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1rem;
      padding: 8px 0;
      background: #f5f5f5;
      border-radius: 5px;
      margin-bottom: 5px;
      padding-left: 10px;
    }
  }
}
</style>
