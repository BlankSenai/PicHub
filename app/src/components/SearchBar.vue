<script setup>
import { Icon } from '@iconify/vue'
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['searchInput'])

const input = ref('')
</script>

<template>
  <div class="search-container">
    <Icon class="icon" icon="material-symbols:search" color="#ddd" width="30px" />

    <input v-model="input" type="text" placeholder="Procurar..." @input="emit('searchInput', input)">
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
}

input {
  color: #ddd;
  width: 200px;
  height: 40px;
  background-color: #333;
  padding: 8px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  outline: none
}

.icon {
  margin-right: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.icon:hover {
  transform: scale(1.2);
}

.icon:active {
  transform: scale(1);
}
</style>