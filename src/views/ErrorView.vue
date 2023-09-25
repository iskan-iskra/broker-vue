<template>
  <div class="error-view">
    <h1>ERROR 404</h1>
    <v-btn @click="redirect(RouterPath.HomePage)">Back to home</v-btn>
  </div>
</template>

<script setup lang="ts">
import { RouterPath } from "@/router";
import { useRouter } from "vue-router";
const router = useRouter();

const redirect = (path: RouterPath) => {
  router.push({ path });
};
</script>

<style scoped lang="scss">
.error-view {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
</style>
