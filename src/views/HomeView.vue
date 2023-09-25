<script setup lang="ts">
import { MyBrokerCard, MyCountryFilter, MyLoader } from "@/components";
import { useBrokerListStore } from "@/stores";
const broker = useBrokerListStore();
</script>

<template>
  <template v-if="!broker.isLoading && !broker.isError">
    <v-row>
      <v-col :cols="12" :sm="12" :md="6" :lg="4"> <MyCountryFilter /></v-col>
    </v-row>
    <v-row>
      <v-col
        :cols="12"
        :sm="6"
        :md="6"
        :lg="4"
        v-for="item in broker.listFilteredByCountry"
        :key="item.id"
        ><MyBrokerCard v-bind="item"
      /></v-col>
    </v-row>
  </template>
  <MyLoader v-else />
</template>

<style scoped lang="scss">
.home-view {
}
</style>
