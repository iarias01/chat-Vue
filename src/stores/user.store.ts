import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IFriend } from '@/interfaces/friend.interface';
import { MOCK_FRIEND } from '@/mocks/friend.mock';
import type { IChatMessage } from '@/interfaces/chat-message.interface';
import { useLocalStorage } from '@vueuse/core';

export const useNewFriendStore = defineStore('newFriend', () => {
  const newFriend = ref(useLocalStorage('friend', { ...MOCK_FRIEND }));

  const clearStore = () => {
    newFriend.value = { ...MOCK_FRIEND };
  };

  return {
    newFriend,
    clearStore,
  };
});
