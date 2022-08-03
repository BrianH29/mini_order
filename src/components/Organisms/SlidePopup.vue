<script setup>
import CartWrapper from '@/components/Organisms/CartWrapper.vue';

const tab = {
  CartWrapper,
};

defineProps({
  pages: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '1050px',
  },
  show: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <transition name="slide-up" mode="out-in">
    <div
      v-if="show"
      ref="contentWrap"
      key="slide"
      class="content-wrap"
      :style="`height:${height}`"
    >
      <div class="open-slide">
        <p class="slide-btn">펄쳐보기</p>
      </div>
      <component :is="tab[pages]"></component>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.open-slide {
  position: absolute;
  top: -2.11vh;
  width: 50%;
  left: 50%;
  transform: translateX(-50%);
  height: 7vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.slide-btn {
  width: 16.25vw;
  height: 3.75vw;
  font-family: Spoqa Han Sans Neo, 'sans-serif';
  font-size: 2.625vw;
  letter-spacing: -0.13125vw;
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/front/Intersection-no-shadow.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  filter: drop-shadow(0 -3.25vw 3.125vw rgba(0, 0, 0, 0.1));
}
.content-wrap {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 103;
  background-color: #fff;
  border-radius: 38px 38px 0 0;
  box-sizing: border-box;
}

.content-title {
  height: 130px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.fade-splash-enter-active,
.fade-splash-leave-active {
  transition: opacity 0.25s;
}

.fade-splash-enter,
.fade-splash-leave-to {
  opacity: 0;
}

.slide-up {
  transition: all 0.25s;
}

.slide-up-enter-active {
  transition: all 0.25s ease;
}

.slide-up-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-up-enter,
.slide-up-leave-active {
  opacity: 0;
  transform: translateY(100%);
}

.fades-enter-active {
  animation: fadeEnter 0.25s;
}

@keyframes fadeEnter {
  from {
    background: #fff;
  }
  to {
    background: #000000;
  }
}

.slides-up-enter-active {
  animation: slideYEnter 0.25s;
}

@keyframes slideYEnter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}

.slide-down-enter-active {
  animation: slideYLeave 0.25s;
}

@keyframes slideYLeave {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
}
</style>
