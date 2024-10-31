<script setup>
import { defineProps, defineEmits } from 'vue'
import gsap from 'gsap'

const { image } = defineProps(['image'])

const emit = defineEmits(['closeImage'])

function animateEnter(el) {
  el.style.opacity = '0'
  el.style.transform = 'translate(-50%, -50%) scale(0)'

  gsap.to(el, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
    onComplete: () => {
      el.style.transform = ''
      el.opacity = ''
    }
  })
}
</script>

<template>
  <div class="overlay" @click="emit('closeImage')"></div>

  <Transition name="modal-animation" appear @enter="animateEnter">
    <div class="modal">
      <img :src="image" draggable="false">
    </div>
  </Transition>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 99;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90%;
  background-color: #333;
  z-index: 100;
}

img {
  height: 100%;
  object-fit: contain;
}
</style>