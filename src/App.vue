<template>
  <div class="container">
    <QuizesView />
  </div>
</template>

<script setup>
import {RouterView} from "vue-router"
import QuizesView from "../src/Views/QuizesView.vue"
</script>

<style scoped>

.container {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>