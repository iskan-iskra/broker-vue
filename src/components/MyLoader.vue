<template>
  <div class="my-loader__container">
    <v-progress-circular
      v-if="broker.isLoading"
      indeterminate
      :size="50"
      :width="5"
    ></v-progress-circular>
    <div v-if="broker.isError">
      Ошибка получения данных
      <div>
        <v-btn @click="broker.getListFromServer">Повторить запрос</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBrokerListStore } from "@/stores";

const broker = useBrokerListStore();
</script>

<style scoped lang="scss">
.my-loader {
  &__container {
    position: fixed;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
}
</style>
