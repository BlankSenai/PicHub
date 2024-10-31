<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ref, defineEmits, onMounted } from 'vue'
import { useUserStore } from '../stores/index'

const emit = defineEmits(['loggedIn'])

const router = useRouter()

onMounted(() => {
	emit('loggedIn', false)
})

const name = ref('')
const email = ref('')
const password = ref('')

function showErrors(errors) {
	const nameInput = document.querySelector('#name-input')
	const emailInput = document.querySelector('#email-input')
	const passwordInput = document.querySelector('#password-input')
	const nameErrorMessage = document.querySelector('#name-error-message')
	const emailErrorMessage = document.querySelector('#email-error-message')
	const passwordErrorMessage = document.querySelector('#password-error-message')

	if (Object.hasOwn(errors, 'body')) {
		if (Object.hasOwn(errors.body, 'nome')) {
			nameInput.style.border = 'solid 2px #dc3545'
			nameErrorMessage.innerHTML = errors.body.nome
		} else {
			nameInput.style.border = 'solid 2px #3D8AF7'
			nameErrorMessage.innerHTML = ''
		}

		if (Object.hasOwn(errors.body, 'email')) {
			emailInput.style.border = 'solid 2px #dc3545'
			emailErrorMessage.innerHTML = errors.body.email
		} else {
			emailInput.style.border = 'solid 2px #3D8AF7'
			emailErrorMessage.innerHTML = ''
		}
		
		if (Object.hasOwn(errors.body, 'senha')) {
			passwordInput.style.border = 'solid 2px #dc3545'
			passwordErrorMessage.innerHTML = errors.body.senha
		} else {
			passwordInput.style.border = 'solid 2px #3D8AF7'
			passwordErrorMessage.innerHTML = ''
		}
	} else if (Object.hasOwn(errors, 'default')) {
		nameInput.style.border = 'solid 2px #dc3545'
		emailInput.style.border = 'solid 2px #dc3545'
		passwordInput.style.border = 'solid 2px #dc3545'
		nameErrorMessage.innerHTML = errors.default
		emailErrorMessage.innerHTML = errors.default
		passwordErrorMessage.innerHTML = errors.default
	} else {
		nameInput.style.border = 'solid 2px #3D8AF7'
		emailInput.style.border = 'solid 2px #3D8AF7'
		passwordInput.style.border = 'solid 2px #3D8AF7'
		nameErrorMessage.innerHTML = ''
		emailErrorMessage.innerHTML = ''
		passwordErrorMessage.innerHTML = ''
	}
}

async function signUp() {
	const credentials = {
		nome: name.value,
		email: email.value,
		senha: password.value 
	}
	
	const response = await axios({
		method: 'post',
		url: 'http://localhost:3333/cadastrar',
		data: credentials,
	}).catch(error => showErrors(error.response.data.errors))
	
	if (response) {
		delete credentials.nome
		
		const token = await axios({
			method: 'post',
			url: 'http://localhost:3333/login',	
			data: credentials
		})
		
		if (token) {
			const store = useUserStore()

			store.setToken(token.data.accessToken)
			emit('loggedIn', true)
			router.push('/explorar')
		}
	}
}

</script>

<template>
		<div class="main-container">
			<h1 class="title">PicHub</h1>

			<div class="signup-container">
				<h1>Crie sua conta</h1>

				<div class="inputs-container">
					<div class="input-text">
						<label class="name">Nome de usuário</label>

						<p class="error-message" id="name-error-message"></p>
					</div>

					<input v-model="name" id="name-input" type="text" @input="showErrors({})">
					
					<div class="input-text">
						<label class="email">Endereço de E-mail</label>

						<p class="error-message" id="email-error-message"></p>
					</div>

					<input v-model="email" id="email-input" type="text" @input="showErrors({})">
					
					<div class="input-text">
						<label class="password">Senha</label>

						<p class="error-message" id="password-error-message"></p>
					</div>

					<input v-model="password" id="password-input" type="password" @input="showErrors({})">
				</div>

				<button @click="signUp">Criar Conta</button>

				<p>Ao criar a conta você concorda com os termos de serviço e privacidade.</p>

				<p class="login">Já possui uma conta? <span @click="router.push('/entrar')">Entre aqui</span></p>
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

.title {
	color: #3D8AF7;
	font-size: 100px;
}

.signup-container {
	background-color: #333;
	display: flex;
	flex-direction: column;
	padding: 50px 100px;
	border-radius: 20px;
	margin-top: 40px;
}

.inputs-container {
	display: flex;
	flex-direction: column;
	margin-top: 50px;
}

.input-text {
	display: flex;
	justify-content: space-between;
	align-items: end;
}

.error-message {
	color: #dc3545;
	font-size: 15px;
}

h1 {
	color: #ddd;
	font-size: 40px;
}

label {
	font-size: 20px;
	color: #ddd;
	margin-top: 10px;
}

p {
	font-size: 18px;
	color: #ddd;
}

.login {
	text-align: center;
	margin-top: 40px;
}

input {
	width: 600px;
	height: 60px;
	border-radius: 10px;
	border: solid 2px #3D8AF7;
	background-color: #333;
	outline: none;
	color: #ddd;
	font-size: 20px;
	padding: 20px;
	margin-top: 10px;
}

button {
	background-color: #3D8AF7;
	border: none;
	color: #ddd;
	width: 600px;
	height: 60px;
	font-size: 22px;
	font-weight: bold;
	border-radius: 10px;
	cursor: pointer;
	transition: 0.2s;
	margin-top: 50px;
}

button:hover {
	transform: scale(1.02);
}

button:active {
	transform: scale(1);
}

span {
	color: #3D8AF7;
	cursor: pointer;
	text-decoration: underline;
}
</style>