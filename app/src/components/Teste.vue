<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const images = ref([])
const files = ref([])

async function sendData(e) {
	files.value = e.target.files

	const formData = new FormData()

	for (let i = 0; i < files.value.length; i++) {
		formData.append('image', files.value[i])
	}

	// const postRes = await axios({
	//     method: 'post',
	//     url: 'http://localhost:3333/imagens/1',
	//     data: formData,
	//     headers: {
	//         'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTcxOTQ0MDAzMiwiZXhwIjoxNzE5NTI2NDMyfQ.qucH-c3-_C6ISfEXRuNxHn3JjoRgZmmzkTV-mWcZ1zo',
	//         'Content-Type': 'multipart/form-data'
	//     }
	// })
	// console.log(postRes)

	for (const pair of formData.entries()) {
		console.log(pair[0], pair[1]);
	}
}

onMounted(async () => {
	const getRes = await axios({
		method: 'get',
		url: 'http://localhost:3333/imagens/1',
		headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTcxOTQ0MDAzMiwiZXhwIjoxNzE5NTI2NDMyfQ.qucH-c3-_C6ISfEXRuNxHn3JjoRgZmmzkTV-mWcZ1zo' }
	})

	images.value = getRes.data
})
</script>

<template>
	<div>
		<input @input="sendData" type="file" accept=".png, .jpg" multiple>

		<div v-for="image in images">
			{{ image }}
		</div>
	</div>
</template>

<style scoped></style>