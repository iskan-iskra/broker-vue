<template>
  <v-select
    label="Filter by country:"
    :model-value="country.selected"
    :items="country.list"
    @update:model-value="country.setSelected"
    clearable
  ></v-select>
</template>

<script setup lang="ts">
import { useCountryStore } from "@/stores";

const country = useCountryStore();
</script>

<style scoped></style>
