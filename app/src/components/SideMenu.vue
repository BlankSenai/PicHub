<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const route = useRoute()
</script>

<template>
	<div class="menu-container">
		<div class="header">
			<h1>PicHub</h1>
		</div>

		<div class="paths-container">
			<div class="paths">
				<div class="path" 
					:style="[route.name === 'explorar' ? { backgroundColor: '#555' } : { backgroundColor: '' }]"
					@click="router.push('/explorar')"
				>
					<p>Explorar</p>
				</div>

				<div class="path" 
					:style="[route.name === 'colecoes' || route.name === 'colecao' ? { backgroundColor: '#555' } : { backgroundColor: '' }]"
					@click="router.push('/colecoes')"
				>
					<p>Coleções</p>
				</div>

				<div class="path"
					:style="[route.name === 'equipamentos' ? { backgroundColor: '#555' } : { backgroundColor: '' }]"
					@click="router.push('/equipamentos')"
				>
					<p>Equipamentos</p>
				</div>

				<div class="path" 
					:style="[route.name === 'aprenda' ? { backgroundColor: '#555' } : { backgroundColor: '' }]"
					@click="router.push('/aprenda')"
				>
					<p>Aprenda</p>
				</div>
			</div>

			<div class="paths">
				<div class="path" 
					:style="[route.name === 'perfil' || route.name === 'mensagens' ? { backgroundColor: '#555' } : { backgroundColor: '' }]"
					@click="router.push('/perfil')"
				>
					<p>Perfil</p>
				</div>

				<div class="path"
					:style="[route.name === 'configuracoes' || route.name === 'suporte' ? { backgroundColor: '#555' } : { backgroundColor: '' }]"
					@click="router.push('/configuracoes')"
				>
					<p>Configurações</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.menu-container {
	display: flex;
	flex-direction: column;
	background-color: #333;
	height: 100vh;
	width: 500px;
	position: sticky;
	top: 0;
}

.header {
	margin-top: 20px;
}

.header h1 {
	font-size: 70px;
	color: #3D8AF7;
	text-align: center;
	user-select: none;
}

.paths-container {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 50px;
}

.paths {
	display: flex;
	flex-direction: column;
}

.path {
	width: 100%;
	margin-bottom: 6px;
	height: 60px;
	display: flex;
	align-items: center;
	transition: 0.2s;
	cursor: pointer;
}

.path:hover {
	background-color: #555;
}

.path p {
	margin-left: 40px;
	font-size: 20px;
	color: #ddd;
}
</style>