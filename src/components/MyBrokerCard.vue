<template>
  <v-card>
    <v-img :src="props.logo" alt="test" height="200px" cover> </v-img>

    <v-card-title>{{ props.name }}</v-card-title>

    <v-card-subtitle> Country: {{ props.country }} </v-card-subtitle>

    <v-card-text> Contact: {{ props.contact }} </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  id: Number,
  name: String,
  country: String,
  contact: String,
  logo: String,
});
</script>

<style scoped></style>
