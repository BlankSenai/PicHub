<script setup>
import Title from '../components/Title.vue'
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'

const search = ref('')
const collections = ref([])

onMounted(async () => {
	const store = useUserStore()
	const { jwt } = storeToRefs(store)

	const response = await axios({
		method: 'get',
		url: 'http://localhost:3333/colecoes',
		headers: {'authorization': `Bearer ${jwt.value}`}
	}).catch(error => console.log(error))

	if (response) {
		collections.value = response.data
	}
})

function searchInput(input) {
	search.value = input
}

const searchedCollections = computed(() => {
	return collections.value.filter(c => c.nome.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<template>
		<div class="main-container">
			<Title 
				:name="'Coleções'" 
				@searchInput="searchInput"
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