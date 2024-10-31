<script setup>
import Title from '../components/Title.vue'
import Post from '../components/Post.vue'
import p from '/src/assets/data/posts/posts.json'
import ImageModal from '../components/ImageModal.vue'
import { computed, ref } from 'vue'

const showModal = ref(false)
const image = ref('')
const search = ref('')

function openModal(img) {
	image.value = img

	showModal.value = true
}

function searchInput(input) {
	search.value = input
}

const posts = computed(() => {
	return p.filter(p => p.profile.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>	
	<div class="main-container">
		<ImageModal 
			v-if="showModal" 
			:image="image" 
			@closeImage="showModal = false"
		/>
		
		<Title 
			:name="'Explorar'" 
			@searchInput="searchInput"
		/>

		<Post 
			v-for="post in posts" 
			:key="post.id" 
			:post="post"
			@clickImage="openModal"
		/>
	</div>
</template>

<style scoped>
.main-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	overflow: auto;
}
</style>