<template>
  <div class="container">
    <header>
      <h1>Quiz(s)</h1>
      <input type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <div class="card" v-for="quiz in quizes" :key="quiz.id">
        <img :src="quiz.img">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import quizData from '../src/data/quizes.json';
import { ref } from 'vue';

const quizes = ref(quizData);

</script>

<style scoped>

.container {
  max-width: 1000px;
  margin: 0 auto;
}

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

.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: 190px;
    margin: 0
  }

  .card .card-text {
    padding: 0 5px
  }

  .card .card-text h2 {
    font-weight: bold;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

</style>