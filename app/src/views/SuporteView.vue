<script setup>
import Title from '../components/Title.vue'
import Question from '../components/Question.vue'
import { ref } from 'vue'
import questions from '../assets/data/questoes/questoes.json'
import axios from 'axios'
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'

const showInput = ref(true)
const input = ref('')

function showErrors(errors) {
	const textarea = document.querySelector('#text')
	const errorMessage = document.querySelector('#error-message')

	if (Object.hasOwn(errors, 'body')) {
			textarea.style.border = 'solid 2px #dc3545'
			errorMessage.innerHTML = errors.body.pergunta
		} else {
			textarea.style.border = 'solid 2px #3D8AF7'
			errorMessage.innerHTML = ''
		}
	}
	
	async function sendMessage() {
		const store = useUserStore()
		const { jwt } = storeToRefs(store)
		
		const response = await axios({
			method: 'post',
			url: 'http://localhost:3333/suporte',
			data: {
				pergunta: input.value
			},
			headers: {'authorization': `Bearer ${jwt.value}`}
		}).catch(error => showErrors(error.response.data.errors))

		if (response) {
			showInput.value = false
		}
	}
</script>

<template>
	<div class="main-container">
		<Title :name="'Suporte'" />

		<div v-if="showInput" class="input-container">
			<h1>Escreva para nós</h1>

			<textarea v-model="input" placeholder="Digite aqui..." id="text"></textarea>

			<p id="error-message"></p>

			<button @click="sendMessage">Enviar</button>
		</div>

		<Transition name="message-animation" appear>
			<h1 v-if="!showInput">Agradecemos pelo seu feedback. Entraremos em contato!</h1>
		</Transition>

		<div class="FAQ">
			<h1>Perguntas frequentes</h1>

			<Question 
				v-for="question in questions" 
				:key="question.id" 
				:question="question"
			/>
		</div>
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

.input-container {
	width: 50%;
	display: flex;
	flex-direction: column;
}

.input-container h1 {
	color: #ddd;
	font-size: 50px;
	font-weight: normal;
	text-align: center;
}

textarea {
	background-color: #333;
	border: none;
	outline: none;
	width: 100%;
	height: 200px;
	resize: none;
	color: #ddd;
	font-size: 20px;
	border-radius: 15px;
	padding: 15px;
	margin-top: 10px;
}

button {
	background-color: #3D8AF7;
	color: #ddd;
	border: none;
	font-size: 30px;
	border-radius: 15px;
	padding: 10px;
	transition: 0.2s;
	cursor: pointer;
	margin-top: 30px;
}

button:hover {
	transform: scale(1.02);
}

button:active {
	transform: scale(1);
}

h1 {
	color: #3D8AF7;
	font-size: 50px;
	margin-top: 50px;
}

.message-animation-enter-active {
	transition: all 0.5s;
}

.message-animation-enter-from,
.message-animation-leave-to {
	opacity: 0;
	transform: translateY(100px);
}

.FAQ h1 {
	color: #ddd;
	font-size: 50px;
}

.FAQ {
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
}

#error-message {
	color: #dc3545;
	font-size: 15px;
}
</style>