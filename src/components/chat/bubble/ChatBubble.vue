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

<style lang="scss" scoped>
@import './ChatBubble.scss';
</style>
