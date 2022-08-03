<script setup>
import BillContentWrapper from '@/components/Organisms/BillContentWrapper.vue';
import BillResult from '@/components/Molecules/bill/BillResult.vue';
import DutchPay from '@/components/Molecules/bill/DutchPay.vue';
</script>

<template>
  <div>
    <BillContentWrapper />
    <DutchPay />
    <BillResult />
  </div>
</template>

<style lang="scss" scoped></style>
