<script setup lang="ts">
import { RouterView } from "vue-router";
import { MyHeader } from "@/components";
import { onMounted } from "vue";
import { useBrokerListStore } from "./stores";
const broker = useBrokerListStore();

onMounted(async () => {
  await broker.getListFromServer();
});
</script>

<template>
  <MyHeader />
  <v-container class="app__container">
    <RouterView />
  </v-container>
</template>

<style scoped lang="scss">
.app {
  &__container {
    @media all and (max-width: 420px) {
      padding-bottom: 64px;
    }
  }
}
</style>
