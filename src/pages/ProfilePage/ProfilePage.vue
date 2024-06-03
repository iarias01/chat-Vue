<template>
  <div
    v-bind:class="{
      'is-my-friend': user.isMyFriend,
      female: isFemale && user.isMyFriend,
      male: !isFemale && user.isMyFriend,
    }"
    class="p-4 bg-container height flex flex-col justify-between w-full"
  >
    <div class="data-profile mx-auto">
      <div class="image relative">
        <RouterLink to="/chat">
          <img class="rounded-full cursor-pointer" src="@/assets/images/ella.png" alt="photo" />
        </RouterLink>
        <div
          class="state absolute top-6 rounded-full flex items-center justify-center"
          v-bind:class="{ 'state--online': user.online }"
        >
          <span class="uppercase text-white">{{ user.online ? 'online' : 'offline' }}</span>
        </div>
      </div>
      <h1 class="data-profile__name flex flex-row justify-between items-center w-full">
        {{ user.name }}, {{ user.age }}

        <button @click="setFavorite()">
          <img v-if="user.isFavorite" class="star" src="@/assets/images/star.png" />
          <img v-else class="star" src="@/assets/images/star-white.png" />
        </button>
      </h1>
      <p class="data-profile__city">{{ user.city }}</p>
      <p class="data-profile__description">{{ user.description }}</p>
    </div>

    <button @click="setMyFriend()" class="btn-add uppercase w-full p-5 mx-auto mt-3">
      <span v-if="!user.isMyFriend">add as friend</span>
      <span v-else>remove as friend </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { EGender, type IFriend } from '@/interfaces/friend.interface';
import { useNewFriendStore } from '@/stores/user.store';
import { computed, ref } from 'vue';

const friendStore = useNewFriendStore();
const user = ref<IFriend>(friendStore.newFriend);

const isFemale = computed(() => user.value.gender === EGender.FEMALE);

const setFavorite = () => {
  user.value.isFavorite = !user.value.isFavorite;
};

const setMyFriend = () => {
  user.value.isMyFriend = !user.value.isMyFriend;
};
</script>

<style scoped lang="scss">
@import './ProfilePage.scss';
</style>
