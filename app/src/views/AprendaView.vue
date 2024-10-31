<script setup>
import Title from '../components/Title.vue'

</script>

<template>
	<div class="main-container">
		<Title :name="'Aprenda'" />

		<h1 class="title">Leve suas habilidades fotográficas para outro nível.</h1>

		<div class="plan-container">
			<h1>Garante:</h1>

			<ul>
				<li>Materiais exclusivos</li>
				<li>Aulas prontas</li>
				<li>Eventos</li>
			</ul>

			<div class="price-container">
				<h3>Acesso vitalício por</h3>

				<h2>R$299.90</h2>

				<button>Começar agora</button>
			</div>
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
	font-size: 60px;
	margin-top: 80px;
	text-align: center;
}

.plan-container {
	background-color: #333;
	padding: 50px;
	border-radius: 20px;
	margin-top: 50px;
}

.plan-container h1 {
	color: #ddd;
	font-size: 44px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 20px;
}

li {
	color: #ddd;
	font-weight: lighter;
	font-size: 25px;
	margin-left: 40px;
}

h2 {
	color: #ddd;
	font-weight: normal;
	font-size: 38px;

}

h3 {
	color: #ddd;
	font-weight: lighter;
	font-size: 20px;
}

button {
	background-color: #3D8AF7;
	border: none;
	font-size: 35px;
	font-weight: bold;
	color: #ddd;
	border-radius: 15px;
	padding: 15px 150px;
	cursor: pointer;
	transition: 0.2s;
}

button:hover {
	transform: scale(1.05);
}

button:active {
	transform: scale(1);
}

.price-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin-top: 40px;
}
</style>