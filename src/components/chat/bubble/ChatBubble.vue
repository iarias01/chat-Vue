<template>
  <div v-if="itsMine" class="bubble flex justify-end flex-row-reverse relative">
    <div class="beak-blue mt-4"></div>
    <img class="image ml-2" src="@/assets/images/yo.png" alt="photo" />
    <div class="bg-blue text-black py-2 px-4 rounded w-full ml-14">
      {{ message }}
    </div>
  </div>
  <div v-else class="bubble flex relative">
    <div class="beak mt-4"></div>
    <img class="image mr-2" src="@/assets/images/ella.png" alt="photo" />
    <div class="bg-white text-black py-2 px-4 rounded w-full mr-14">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
}

defineProps<Props>();
</script>

<style scoped>
.beak,
.beak-blue {
  width: 20px;
  height: 20px;
  position: absolute;
  top: -16px;
}

.beak {
  background-color: #fefeff;
  clip-path: polygon(33% 0, 100% 100%, 100% 0);
  left: 41px;
}

.beak-blue {
  background-color: #55bae3;
  clip-path: polygon(66% 0%, 0 0, 0 100%);
  right: 41px;
}

.bg-blue {
  background-color: #55bae3;
  color: #edf9fc;
}
.bg-white {
  background-color: #fefeff;
  color: #555555;
}

.image {
  clip-path: circle(50% at 50% 50%);
  width: 50px;
}

.bubble {
  margin: 0.7rem 0 !important;
  animation: fadeIn 0.3s ease-out;
  width: 100%;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100px);
    width: 5px;
    margin: auto;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    width: 100%;
    margin: 0.7rem 0;
  }
}
</style>
