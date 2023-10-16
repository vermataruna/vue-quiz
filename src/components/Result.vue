<template>
    <div class="results">
        <p>Your results...</p>
        <h1>
            {{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}
        </h1>
        <RouterLink to="/">Go home</RouterLink>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import  { RouterLink } from 'vue-router'

const { numberOfCorrectAnswers, quizQuestionLength } =
defineProps([ "numberOfCorrectAnswers", "quizQuestionLength"])

</script>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }
    p {
        font-size: 20px;
    }
    h1 {
        font-size: 60px;
    }

</style>