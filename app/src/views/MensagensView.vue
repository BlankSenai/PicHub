<script setup>
import Title from '../components/Title.vue'
import m from '../assets/data/mensagens/mensagens.json'
import Message from '../components/Message.vue'
import { ref, computed } from 'vue'

const search = ref('')

function searchInput(input) {
	search.value = input
}

const messages = computed(() => {
	return m.filter(m => m.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
		<div class="main-container">
			<Title 
				:name="'Mensagens'"
				@searchInput="searchInput"
			/>

			<Message 
				v-for="message in messages"
				:key="message.id"
				:message="message"
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