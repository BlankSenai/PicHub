<script setup>
import { RouterView } from 'vue-router'
import SideMenu from './components/SideMenu.vue';
import { useUserStore } from './stores'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { jwt } = storeToRefs(store)
</script>

<template>
  <div class="container">
    <SideMenu 
      v-if="jwt"
    />

    <Transition name="change-view" appear>
      <RouterView
        @loggedIn="toggleSideMenu"
      />
    </Transition>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.change-view-enter-active {
  transition: all 0.3s;
}

.change-view-enter-from,
.change-view-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}
</style>
