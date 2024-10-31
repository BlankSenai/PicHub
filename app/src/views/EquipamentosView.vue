<script setup>
import Title from '../components/Title.vue'
import Equipment from '../components/Equipment.vue'
import e from '../assets/data/equipamentos/equipamentos.json'
import { ref, computed } from 'vue'

const search = ref('')

function searchInput(input) {
	search.value = input
}

const equipments = computed(() => {
	return e.filter(e => e.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
		<div class="main-container">
			<Title 
				:name="'Equipamentos'" 
				@searchInput="searchInput"
			/>

			<Equipment 
				v-for="equipment in equipments" 
				:key="equipment.id" 
				:equipment="equipment"
			/>
		</div>
</template>

<style scoped>
.main-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow: auto;
	align-items: center;
}
</style>