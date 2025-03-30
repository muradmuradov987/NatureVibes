<template>
  <ModalsUpgradePaymentModal v-if="myStore.modalTitle == 'upgrade-payment'" />
  <ModalsLoginModal v-if="myStore.modalTitle == 'loginModal'" />
  <ModalsUpgradeSuccessModal v-if="myStore.modalTitle == 'upgrade-success'" />
  <div class="page__wrapper">
    <div class="container">
      <div class="upgrade__hero">
        <img src="../public/images/upgrade.png" alt="" />
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
    <section class="pricing" :class="{ dark: myStore.isDarkMode }">
      <div class="container">
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
      </div>
    </section>

    <section class="premium-benefits" :class="{ dark: myStore.isDarkMode }">
      <div class="container">
        <h2>Why Upgrade to Premium?</h2>
        <div class="benefits-grid">
          <div class="benefit-item color1">
            <i class="fas fa-infinity"></i>
            <h3>Unlimited Access</h3>
            <p>Enjoy unrestricted access to all premium features.</p>
          </div>
          <div class="benefit-item color2">
            <i class="fas fa-music"></i>
            <h3>Exclusive Sounds</h3>
            <p>Unlock a special library of high-quality relaxing sounds.</p>
          </div>
          <div class="benefit-item color3">
            <i class="fas fa-headphones-alt"></i>
            <h3>Ad-Free Experience</h3>
            <p>Enjoy an uninterrupted, ad-free experience.</p>
          </div>
          <div class="benefit-item color4">
            <i class="fas fa-cloud-download-alt"></i>
            <h3>Offline Mode</h3>
            <p>Download and listen without an internet connection.</p>
          </div>
          <div class="benefit-item color5">
            <i class="fas fa-heart"></i>
            <h3>Custom Playlists</h3>
            <p>Create and save your own favorite sound combinations.</p>
          </div>
          <div class="benefit-item color6">
            <i class="fas fa-user-shield"></i>
            <h3>Secure Data</h3>
            <p>Your information and preferences are safely stored.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const myStore = useStore();

const openUpgradeModal = (plan) => {
  if (!myStore.isLoggedIn) {
    myStore.modalTitle = "loginModal";
  } else {
    myStore.selectedPlan = plan;
    myStore.modalTitle = "upgrade-payment";
  }
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
    z-index: 2;
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
    font-size: 30px;
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

.premium-benefits {
  text-align: center;
  border-radius: 10px;
  padding: 50px 0;

  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .benefit-item {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: 0.3s ease-in-out;
    position: relative;

    h3 {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
    p {
      font-size: 1rem;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  }

  .color1 {
    background: #6a57d5;
  }
  .color2 {
    background: #f7b801;
  }
  .color3 {
    background: #f35a5a;
  }
  .color4 {
    background: #17a2b8;
  }
  .color5 {
    background: #4caf50;
  }
  .color6 {
    background: #ff7e67;
  }
}

.dark {
  .pricing {
    .pricing-title {
      color: $white;
    }
    .pricing-card {
      background: unset;
      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: $white;
      }
      .price {
        span {
          color: $white;
        }
      }

      ul {
        li {
          color: $white;
        }
      }
    }

    .highlight {
      border: 2px solid $primary;
    }
  }
  .premium-benefits {
    h2 {
      color: white;
    }
  }
}

/*---------------Media Queries--------------*/
@media (max-width: 767px) {
  .upgrade__hero {
    height: 300px;
    margin-bottom: 0px;
    .upgrade__hero-overlay {
      padding: 20px;
      h1 {
        font-size: 20px;
        text-align: center;
      }
      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .pricing {
    padding: 30px 0;
    .pricing-title {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .pricing-cards {
      gap: 15px;
    }
    .pricing-card {
      padding: 15px 10px;
      border-radius: 8px;
      max-width: 350px;

      h3 {
        font-size: 20px;
        margin-bottom: 5px;
      }

      .price {
        font-size: 16px;
        span {
          font-size: 14px;
        }
      }
      .discount {
        font-size: 14px;
        border-radius: 4px;
      }
      ul {
        margin: 10px 0;
        li {
          font-size: 12px;
          padding: 5px 0;
        }
      }

      .btn-upgrade {
        padding: 10px;
        font-size: 12px;
        border-radius: 4px;
      }
    }
  }
  .premium-benefits {
    border-radius: 8px;
    padding: 30px 0;
    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .benefits-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .benefit-item {
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
