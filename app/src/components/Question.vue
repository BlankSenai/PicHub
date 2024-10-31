<script setup>
import { defineProps } from 'vue'

const { question } = defineProps(['question'])
</script>

<template>
  <div class="question-container">
    <h1>{{ question.title }}</h1>
  
    <p>{{ question.answer }}</p>
  </div>
</template>

<style scoped>
.question-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 20px;
  border-top: solid 5px #333;
  padding: 30px;
  width: 100%;
}

h1 {
  color: #ddd;
  font-size: 30px;
  font-weight: normal;
}

p {
  color: #ddd;
  font-size: 20px;
  font-weight: lighter;
}
</style>