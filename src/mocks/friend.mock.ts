import { EGender, type IFriend } from '@/interfaces/friend.interface';

export const MOCK_FRIEND: IFriend = {
  id: '1',
  gender: EGender.FEMALE,
  name: 'Sophie',
  age: 22,
  city: 'New York',
  isFavorite: false,
  isMyFriend: false,
  online: true,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
  chat: [],
};
