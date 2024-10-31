<script setup>
import { defineProps } from 'vue'

const { message } = defineProps(['message'])
</script>

<template>
  <div class="message-container">
    <div class="avatar">
      <img :src="message.avatar" draggable="false">
      
      <div class="text">
        <h1>{{ message.name }}</h1>
  
        <p>{{ message.message }}</p>
      </div>
    </div>
    
    <h2>{{ message.date }}</h2>
  </div>
</template>

<style scoped>
.message-container {
  width: 80%;
  background-color: #333;
  height: 150px;
  margin-top: 40px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  transition: 0.2s;
  cursor: pointer;
}

.message-container:hover {
  transform: scale(1.02);
}

.message-container:active {
  transform: scale(1);
}

img {
  border-radius: 100%;
  width: 80px;
  aspect-ratio: 1;
  object-fit: cover;
}

.avatar {
  display: flex;
}

.text {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}

h1 {
  color: #ddd;
  font-size: 30px;
  font-weight: normal;
}

p {
  color: #ddd;
  font-weight: lighter;
  font-size: 18px;
}

h2 {
  color: #ddd;
  font-size: 20px;
  font-weight: normal;
}
</style>