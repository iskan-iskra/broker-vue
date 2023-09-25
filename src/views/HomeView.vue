<script setup lang="ts">
import MyBrokerCard from "@/components/MyBrokerCard.vue";
import MyCountryFilter from "@/components/MyCountryFilter.vue";
import { useBrokerListStore, useCountryStore } from "@/stores";
const broker = useBrokerListStore();
const country = useCountryStore();
</script>

<template>
  <v-container class="container">
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
  </v-container>
</template>

<style scoped lang="scss"></style>
