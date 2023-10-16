<template>
    <div class="question-container">
        <h1 class="question">
            {{ question.text }}
        </h1>
    </div>
    <div class="options-container">
        <div 
            v-for="option in question.options" 
            :key="option.id"
            class="option"
            @click="emitSelectOption(option.isCorrect)"
        >
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['selectOption'])

const {question} = defineProps(['question'])

const emitSelectOption = (isCorrect) => {
    emit("selectOption", isCorrect)
}

</script>

<style scoped>
    .question-container{
        margin-top: 20px;
    }
    .question {
        font-size: 30px;
        margin-bottom: 20px;
    }
    .option {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .option-label {
        background-color: beige;
        width: 50px;
        height: 50px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .option-value {
        background-color: azure;
        width: 100%;
        font-size: 20px;
        padding: 0 20px;
    }
</style>