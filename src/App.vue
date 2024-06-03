<template>
  <header class="header w-full">
    <nav class="nav px-4 py-2 text-white flex justify-center items-center relative m-auto">
      <RouterLink to="/" v-if="isInChatRoute">
        <img class="arrow" src="@/assets/images/arrow.png" alt="back" />
      </RouterLink>
      <span>{{ user }}</span>
    </nav>
  </header>
  <div class="main">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const user = ref('Sophie');

const route = useRoute();
const isInChatRoute = computed(() => route.path === '/chat');
</script>

<style scoped>
.main {
  width: 100%;
  margin: auto;
}
.nav {
  max-width: 768px;
}

.header {
  background-color: #3d3d3c;
  color: #fefeff;
  font-weight: 700;
  span {
    font-size: 24px;
    line-height: 38px;
  }
  .arrow {
    width: 15px;
    position: absolute;
    left: 20px;
    top: 15px;
  }
}
</style>
