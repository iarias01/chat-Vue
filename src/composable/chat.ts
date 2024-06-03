import type { IChatMessage } from '@/interfaces/chat-message.interface';
import { useNewFriendStore } from '@/stores/user.store';
import { ref } from 'vue';

const friendStore = useNewFriendStore();
const friend = friendStore.newFriend;

export const chatFunctions = () => {
  const messages = ref<IChatMessage[]>(friend.chat);
  const newMessage = (text: string) => {
    friend.chat.push({
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
