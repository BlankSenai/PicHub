<script setup>
import { defineProps } from 'vue'

const { equipment } = defineProps(['equipment'])
</script>

<template>
  <div class="equipment-container">
    <img :src="equipment.image" draggable="false">

    <div class="info">
      <h1>{{ equipment.name }}</h1>

      <p>{{ equipment.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.equipment-container {
  display: flex;
  background-color: #333;
  height: 200px;
  width: 80%;
  margin-top: 40px;
  border-radius: 20px;
  transition: 0.2s;
  cursor: pointer;
}

.equipment-container:hover {
  transform: scale(1.02);

}

.equipment-container:active {
  transform: scale(1);
}

.info {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

img {
  width: 220px;
  object-fit: contain;
}

h1 {
  color: #ddd;
  font-size: 35px;
}

p {
  color: #ddd;
  font-size: 18px;
}
</style>