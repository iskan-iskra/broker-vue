<template>
  <v-layout class="my-nav__container_mobile">
    <v-bottom-navigation v-model="currentPage" active color="primary" mandatory>
      <v-btn
        v-for="item in availableRoutes"
        :key="item.path"
        :value="item"
        @click="routerClick(item)"
      >
        <v-icon :icon="item.icon" size="large" />
        {{ item.name }}
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script setup lang="ts">
import { useNavigation } from "@/composables";
const { availableRoutes, currentPage, routerClick } = useNavigation();
</script>

<style scoped lang="scss">
.my-nav {
  &__container {
    &_mobile {
      z-index: 1000;
      position: fixed;
      bottom: 0;
      height: 56px;
    }
  }
}
</style>
