<template>
  <div class="p-4 flex items-center relative bg-container">
    <div class="beak mt-4"></div>
    <input
      type="text"
      placeholder="Write a message..."
      class="flex-1 px-4 py-3 focus:outline-none ml-1 rounded"
      v-model="message"
      @keypress.enter="sendMessage"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const emits = defineEmits<{
  sendMessage: [text: string];
}>();

const message = ref('');
const sendMessage = () => {
  message.value = message.value.trim();
  if (!message.value) return;
  emits('sendMessage', message.value);
  message.value = '';
};
</script>

<style scoped lang="scss">
.beak {
  width: 20px;
  height: 20px;
  background-color: white;
  clip-path: polygon(33% 0, 100% 100%, 100% 0);
  position: absolute;
  top: 0;
  left: 3px;
}
input {
  color: #555555;
}
</style>
