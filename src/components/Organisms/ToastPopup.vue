<script setup>
import { useToastPopup } from '@/stores/toastPopup';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const store = useToastPopup();
const { toastPopup } = storeToRefs(store);

watch(
  toastPopup,
  () => {
    setTimeout(() => {
      store.$reset();
    }, 2000);
  },
  { deep: true },
);
</script>

<template>
  <div class="toast-wrapper">
    <transition name="fade">
      <div
        v-if="store.toastPopup?.popupContent"
        class="toast-wrapper"
        @click.prevent.stop=""
      >
        <div class="save-popup-wrap">
          <div class="save-popup d-grid">
            <div class="save-popup-text" v-html="store.getToastPopup"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.toast-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-wrap {
  align-items: center;
  text-align: center;
}
.save-popup-wrap {
  width: 52.5vw;
  vertical-align: middle;
  height: fit-content;
  background-color: #4a5cff;
  border-radius: 20px;
  padding: 5vw;
  opacity: 0.95;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  position: fixed;
  z-index: 999999;
  box-sizing: border-box;
}
.save-popup-text {
  text-align: left;
  line-height: 5.5vw;
  @include textStyle(Pretendard, #ffffff, 4.5vw, -2.2px);
}
.fade-enter-active,
.fade-leave-active {
  z-index: 999999;
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  z-index: 999999;
  opacity: 0;
}
</style>
