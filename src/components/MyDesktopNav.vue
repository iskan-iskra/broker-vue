<template>
  <div class="my-nav__container_desktop">
    <v-tabs mandatory :model-value="currentPage">
      <v-tab
        v-for="item in availableRoutes"
        :key="item.path"
        :value="item"
        @click="routerClick(item)"
        >{{ item.name }}</v-tab
      >
    </v-tabs>
  </div>
</template>

<script setup lang="ts">
import { useNavigation } from "@/composables";
const { availableRoutes, currentPage, routerClick } = useNavigation();
</script>

<style scoped lang="scss">
.my-nav {
  &__container {
    &_desktop {
      display: flex;
      position: sticky;
      z-index: 1000;
      top: 0;
      justify-content: center;
      background-color: white;
    }
  }
}
</style>
