import type { IChatMessage } from './chat-message.interface';

export interface IFriend {
  id: string;
  name: string;
  gender: EGender;
  age: number;
  city: string;
  description: string;
  online: boolean;
  isFavorite: boolean;
  isMyFriend: boolean;
  chat: IChatMessage[];
}

export enum EGender {
  FEMALE = 'female',
  MALE = 'male',
}
