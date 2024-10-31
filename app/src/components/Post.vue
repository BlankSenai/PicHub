<script setup>
import { defineProps, defineEmits } from 'vue'
import { Icon } from '@iconify/vue'

const { post } = defineProps(['post'])

const emit = defineEmits(['clickImage'])
</script>

<template>
  <div class="post-container">
    <div class="profile">
      <img :src="post.profile.image">

      <p>{{ post.profile.name }}</p>
    </div>

    <div class="info-container">
      <p v-for="info in post.info" class="info">{{ info }}</p>
    </div>

    <img class="image" :src="post.image" @click="emit('clickImage', post.image)" draggable="false">

    <p class="description">{{ post.description }}</p>

    <div class="icons-container">
      <Icon class="icon" icon="icon-park-outline:like" color="#ddd" width="25px" />
      <Icon class="icon" icon="material-symbols:mode-comment-outline" color="#ddd" width="25px" />
      <Icon class="icon" icon="material-symbols:bookmark-add-outline" color="#ddd" width="25px" />
    </div>

    <div class="line"></div>
  </div>
</template>

<style scoped>
.post-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.profile img {
  width: 60px;
  object-fit: cover;
  aspect-ratio: 1;
  border-radius: 100px;
}

.profile p {
  color: #ddd;
  margin-left: 20px;
  font-size: 20px;
}

.image {
  height: 600px;
  object-fit: contain;
  margin-top: 30px;
  cursor: pointer;
}

.line {
  margin-top: 20px;
  width: 100%;
  height: 3px;
  background-color: #444;
}

.description {
  color: #ddd;
  font-size: 20px;
  margin-top: 20px;
}

.icons-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.icon {
  margin-right: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.icon:hover {
  transform: scale(1.2);
}

.icon:active {
  transform: scale(1);
}

.info-container {
  margin-top: 20px;
}

.info {
  color: #ddd;
  font-size: 16px;
  font-weight: lighter;
  margin-top: 8px;
}
</style>