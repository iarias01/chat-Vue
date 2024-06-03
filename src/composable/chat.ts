import type { IChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

export const chatFunctions = () => {
  const messages = ref<IChatMessage[]>([]);
  const newMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    });
  };

  const getRandomResponse = () => {
    const responses = [
      "That's interesting!",
      'Can you tell me more?',
      'I see.',
      'Really? Wow!',
      "I didn't know that.",
      'Sounds good!',
      "Let's talk more about that.",
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];
    messages.value.push({
      id: new Date().getTime(),
      message: response,
      itsMine: false,
    });
  };

  return {
    messages,
    newMessage,
    getRandomResponse,
  };
};
