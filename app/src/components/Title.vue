<script setup>
import { defineProps, defineEmits } from 'vue'
import SearchBar from '../components/SearchBar.vue'

const { name } = defineProps(['name'])

const showSearchBar = !(name === 'Perfil' || name === 'Aprenda' || name === 'Suporte')

const emit = defineEmits(['searchInput'])

function searchInput(input) {
  emit('searchInput', input)
}

</script>

<template>
  <div class="title-container">
    <h1>{{ name }}</h1>

    <div class="searchbar-container">
      <SearchBar 
        v-if="showSearchBar" 
        @searchInput="searchInput"
      />
    </div>

    <div class="line"></div>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  z-index: 98;
}

h1 {
  font-size: 45px;
  font-weight: lighter;
  color: #ddd;
}

.line {
  margin-top: 20px;
  width: 80%;
  height: 3px;
  background-color: #444;
}

.searchbar-container {
  display: flex;
  width: 80%;
}
</style>