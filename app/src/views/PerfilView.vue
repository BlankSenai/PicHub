<script setup>
import Title from '../components/Title.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/index'
import { storeToRefs } from 'pinia'

const router = useRouter()

const user = ref('')

const store = useUserStore()

onMounted(async () => {
	const { jwt } = storeToRefs(store)

	const response = await axios({
		method: 'get',
		url: `http://localhost:3333/usuario`,
		headers: {'authorization': `Bearer ${jwt.value}`}
	})

	user.value = response.data
})

function logOut() {
	store.logOut()
	router.push('/entrar')
}

</script>

<template>
		<div class="main-container">
			<Title :name="'Perfil'" />

			<div class="profile">
				<img src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg" draggable="false">
				
				<h1>{{ user.nome }}</h1>
				<h2>{{ user.email }}</h2>
			</div>

			<div class="buttons-container">
				<button @click="router.push('/colecoes')">Coleções</button>
				<button @click="router.push('/mensagens')">Mensagens</button>
				<button class="logout" @click="logOut">Sair</button>
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

img {
	width: 200px;
	border-radius: 100%;
	aspect-ratio: 1;
	object-fit: cover;
}

h1 {
	font-size: 60px;
	color: #ddd;
}

h2 {
	font-size: 20px;
	font-weight: normal;
	color: #ddd;
}

.profile {
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.buttons-container {
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	width: 50%;
}

button {
	background-color: #3D8AF7;
	color: #ddd;
	width: 100%;
	height: 60px;
	font-size: 30px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	transition: 0.2s;
	margin-top: 10px;
}

button:hover {
	transform: scale(1.02);
}

button:active {
	transform: scale(1);
}

.logout {
	background-color: #dc3545;
}
</style>