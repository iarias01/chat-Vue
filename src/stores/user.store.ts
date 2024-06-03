import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IFriend } from '@/interfaces/friend.interface';
import { MOCK_FRIEND } from '@/mocks/friend.mock';

export const useNewFirendStore = defineStore('newFriend', () => {
  const newFriend = ref<IFriend>(MOCK_FRIEND);

  return {
    friend: computed(() => {
      return { ...newFriend };
    }),};
});
