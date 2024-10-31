<script setup>
import { defineProps } from 'vue'

const { config } = defineProps(['config'])
</script>

<template>
  <div class="config">
    <h1>{{ config.name }}</h1>

    <p>{{ config.description }}</p>
  </div>
</template>

<style scoped>
.config {
	display: flex;
	flex-direction: column;
	padding: 30px;
  background-color: #333;
  height: 150px;
  width: 80%;
  margin-top: 40px;
  border-radius: 15px;
  transition: 0.2s;
  cursor: pointer;
}

.config:hover {
	transform: scale(1.02);
}

.config:active {
	transform: scale(1);
}

h1, p {
	color: #ddd;
}
</style>