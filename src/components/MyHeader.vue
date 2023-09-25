<template>
  <MyMobileNav class="my-header__mobile" />
  <MyDesktopNav class="my-header__desktop" />
</template>

<script setup lang="ts">
import MyDesktopNav from "./MyDesktopNav.vue";
import MyMobileNav from "./MyMobileNav.vue";
</script>

<style scoped lang="scss">
.my-header {
  &__desktop {
    display: flex;
    @media all and (max-width: 420px) {
      display: none;
    }
  }

  &__mobile {
    display: none;
    @media all and (max-width: 420px) {
      display: block;
    }
  }
}
</style>
