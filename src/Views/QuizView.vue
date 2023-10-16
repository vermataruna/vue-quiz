<template>
    <div>
        <QuizHeader :questionStatus="questionStatus"/>
        <Question :question="quiz.questions[currentQuestionIndex]"/>
    </div>
    <button @click="currentQuestionIndex++">Next Question</button>
</template>

<script setup>
import Question from "../components/Question.vue"
import QuizHeader from "../components/QuizHeader.vue"
import { useRoute } from "vue-router"
import quizes from "../data/quizes.json"
import { ref, watch, computed } from "vue"

const route = useRoute()

const quizId = parseInt(route.params.id)

const currentQuestionIndex = ref(0)

const quiz = quizes.find(quiz => quiz.id === quizId)

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)
// watch(() => currentQuestionIndex.value, () => {
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
// })

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)

</script>

<style scoped>
</style>