<template>
  <div
    class="modal__overlay"
    @click="myStore.closeModal()"
    :class="{ dark: myStore.isDarkMode }"
  >
    <div class="modal" @click.stop>
      <h2 class="modal__title">
        Upgrade to <span>{{ myStore.selectedPlan }}</span>
      </h2>
      <h4 class="selectedPlan">
        Price:
        <span>{{
          myStore.selectedPlan === "monthly" ? "$5.99/month" : "$49.99/year"
        }}</span>
      </h4>

      <form @submit.prevent="handlePayment">
        <div class="form-group">
          <label>Card Number</label>
          <input
            type="text"
            placeholder="**** **** **** ****"
            maxlength="19"
            required
          />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Expiry Date</label>
            <input type="text" placeholder="MM.YY" maxlength="5" required />
          </div>
          <div class="form-group">
            <label>CVV</label>
            <input type="text" placeholder="***" maxlength="3" required />
          </div>
        </div>
        <div class="form-group">
          <label>Name on Card</label>
          <input type="text" required />
        </div>
        <button type="submit" class="btn-pay">Complete Payment</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const myStore = useStore();

const handlePayment = () => {
  myStore.closeModal();
  myStore.modalTitle = "upgrade-success";
  myStore.upgradeToPremium();
};
</script>

<style lang="scss" scoped>
.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .modal {
    max-width: 500px;
    width: 100%;
    max-height: 500px;
    background: $white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  z-index: 5;
    animation: modalIn 0.7s ease-in-out;
    .modal__title {
      text-align: center;
      font-size: 27px;
      span {
        color: $primary;
      }
    }
    .selectedPlan {
      span {
        color: $primary;
      }
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .form-group {
        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }
        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }
      }

      .form-row {
        display: flex;
        justify-content: space-between;

        .form-group {
          width: 48%;
        }
      }

      .btn-pay {
        background: linear-gradient(135deg, #28a745, #218838);
        color: $white;
        padding: 12px 15px;
        font-size: 1rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        width: 100%;
        &:hover {
          background: linear-gradient(135deg, #218838, #1e7e34);
        }
      }
    }
    .modal__footer {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
}

@keyframes modalIn {
  0% {
    opacity: 0;
    scale: 0.5;
  }

  100% {
    opacity: 1;
    scale: 1;
  }
}

.dark {
  .modal {
    background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);
    .modal__title {
      color: $white;
    }
    .selectedPlan {
      color: $white;
    }

    form {
      .form-group {
        label {
          color: $primary;
        }
      }
    }
  }
}
</style>
