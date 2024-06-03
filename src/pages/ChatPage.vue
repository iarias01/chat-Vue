<template>
  <div class="bg-container height">
    <div class="chat height flex flex-col mx-auto">
      <ChatMessages :messages="messages" />
      <ChatBubbleWritting v-if="isWriting" />
      <MessageBox @send-message="sendMessage($event)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubbleWritting from '@/components/chat/ChatBubbleWritting.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { chatFunctions } from '@/composable/chat';
import { onMounted, ref } from 'vue';

const { messages, newMessage, getRandomResponse, friend, validateLastChatMessage } =
  chatFunctions();

const isWriting = ref(false);

onMounted(() => {
  if (friend.value.online && validateLastChatMessage()) addRandomMessage(0, 500);
});

const addRandomMessage = (timeWriting = 500, timeMesssage = 1000) => {
  setTimeout(() => {
    isWriting.value = true;
    setTimeout(() => {
      getRandomResponse();
      isWriting.value = false;
    }, timeMesssage);
  }, timeWriting);
};

const sendMessage = (text: string) => {
  newMessage(text);
  if (friend.value.online) addRandomMessage();
};
</script>

<style scoped>
.chat {
  max-width: 768px;
}
.user-writing {
  color: #555;
}
</style>
