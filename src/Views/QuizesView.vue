<template>
    <div>
      <header>
        <h1>Quiz(s)</h1>
        <input v-model.trim="search" type="text" placeholder="Search...">
      </header>
      <div class="options-container">
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import quizData from '../data/quizes.json';
  import { ref, watch } from 'vue';
  import Card from '../components/Card.vue';
  
  const quizes = ref(quizData);
  const search = ref("");
  
  watch(search, () => {
    quizes.value = quizData.filter(item => 
    item.name.toLowerCase().includes(search.value.toLowerCase()));
  });
  
  </script>
  
  <style scoped>
  
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  
  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }
  
  header input {
    border: none;
    background-color: rgb(221, 221, 221);
    padding: 10px;
    border-radius: 5px;
  }
  
  .option {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  
    .options-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
    }
  
  </style>