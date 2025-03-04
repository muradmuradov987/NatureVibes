<template>
  <div class="setTimer__container">
    <IconsTimer class="timer" @click="myStore.showModal('setTimerModal')" />
    <!-- <span class="time" v-if="countdown !== null">{{
      formatTime(countdown)
    }}</span> -->
  </div>
</template>

<script setup>
//Store
import { useStore } from "~/store/store";
const myStore = useStore();




const openTimerModal = () => {


  // Swal.fire({
  //   html: `
  //     <div class="setTimer__modal">
  //            <h2> Set The Timer Duration</h2>
  //            <div class="modal__body">
  //               <div>
  //                 <input type="radio" id="time5" name="timer" value="300" />
  //                 <label for="time5">5 Minutes</label>
  //               </div>
  //               <div>
  //                 <input type="radio" id="time10" name="timer" value="600" />
  //                 <label for="time10">10 Minutes</label>
  //               </div>
  //               <div>
  //                 <input type="radio" id="time15" name="timer" value="900" />
  //                 <label for="time15">15 Minutes</label>
  //               </div>
  //               <div>
  //                 <input type="radio" id="time30" name="timer" value="1800" />
  //                 <label for="time30">30 Minutes</label>
  //               </div>
  //               <div>
  //                 <input type="radio" id="time45" name="timer" value="2700" />
  //                 <label for="time45">45 Minutes</label>
  //               </div>
  //               <div>
  //                 <input type="radio" id="time60" name="timer" value="3600" />
  //                 <label for="time60">1 Hour</label>
  //               </div>
  //               <div>
  //                 <input type="radio" id="time120" name="timer" value="7200" />
  //                 <label for="time120">2 Hour</label>
  //               </div>
  //               <div>
  //                 <input type="radio" id="time180" name="timer" value="10800" />
  //                 <label for="time180">3 Hour</label>
  //               </div>
  //               <div id="clear__timer-btn" class="clear__timer-btn">
  //                   Clear Timer
  //               </div>
  //              </div>
  //     </div>
  //   `,
  //   buttonsStyling: false,
  //   showCancelButton: true,
  //   confirmButtonText: "Start",
  //   cancelButtonText: "Close",
  //   preConfirm: () => {
  //     const selectedValue = document.querySelector(
  //       'input[name="timer"]:checked'
  //     );
  //     if (!selectedValue) {
  //       return false;
  //     } else {
  //       setTimer(selectedValue.value);
  //     }
  //   },
  //   didOpen: () => {
  //     const clearTimerButton = document.getElementById("clear__timer-btn");
  //     clearTimerButton.addEventListener("click", clearTimer);
  //   },
  //   background: myStore.isDarkMode
  //     ? "linear-gradient(180deg, #0f2027, #203a43, #2c5364)"
  //     : "#fff",
  //   customClass: {
  //     popup: myStore.isDarkMode ? "swal-dark-mode" : "swal-light-mode",
  //   },
  // });
};
</script>

<style lang="scss" scoped>
.setTimer__container {
  position: relative;
  .timer {
    transition: transform 0.2s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  .time {
    color: $primary;
    position: absolute;
    top: 6px;
    left: 33px;
  }
}
</style>
