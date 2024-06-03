<template>
  <div ref="chat" class="flex-1 overflow-y-auto p-4 bg-container w-full">
    <div class="flex flex-col items-center w-full space-y-2">
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';
interface Props {
  messages: IChatMessage[];
}
const { messages } = defineProps<Props>();

const chat = ref<HTMLDivElement | null>(null);
const moveScroll = () => {
  setTimeout(() => {
    chat.value?.scrollTo({
      top: chat.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
};

watch(messages, () => {
  moveScroll();
});
</script>
