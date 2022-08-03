<script setup>
import NavControl from '@/components/Molecules/NavControl.vue';
import TableNumber from '@/components/Atom/TableNumber.vue';
import TextStyle from '@/components/Atom/TextStyle.vue';
import { useRouter } from 'vue-router';

//TODO - title 내려주기 확인 필요.
defineProps({
  controlType: {
    type: String,
  },
  content: {
    type: String,
  },
  tableNumber: {
    type: String,
  },
});

const router = useRouter();
const clickEvent = sort => {
  switch (sort) {
    case 'history':
      router.go(-1);
      break;
  }
};
</script>

<template>
  <div class="nav-wrapper">
    <NavControl :controlType="controlType" @clickEvent="clickEvent" />
    <TextStyle
      :content="content"
      :class="controlType === 'main' ? 'nav-wrapper-main' : 'nav-wrapper-sub'"
    />
    <TableNumber :title="tableNumber" />
  </div>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  #{&}-main {
    display: flex;
    justify-content: center;
    align-items: center;
    @include textStyle(Pretendard, #fff, 4.875vw);
  }

  #{&}-sub {
    display: flex;
    justify-content: center;
    align-items: center;
    @include textStyle(Pretendard, #2f2a26, 4.25vw, -0.10625vw);
  }

  :nth-child(2) {
    grid-column: span 2;
  }
}
</style>
