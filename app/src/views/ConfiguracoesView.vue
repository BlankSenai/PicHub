<script setup>
import Title from '../components/Title.vue'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import c from '../assets/data/configuracoes/configuracoes.json'
import Configuration from '../components/Configuration.vue'

const router = useRouter()

const search = ref('')

function searchInput(input) {
	search.value = input
}

const configs = computed(() => {
	return c.filter(c => 
	c.name.toLowerCase().includes(search.value.toLowerCase()) || 
	c.description.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
		<div class="main-container">
			<Title 
				:name="'Configurações'"
				@searchInput="searchInput"
			/>

			<Configuration
				v-for="config in configs"
				:key="config.id"
				:config="config"
				@click="config.name === 'Suporte' ? router.push('/suporte') : null"
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