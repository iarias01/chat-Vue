import type { IChatMessage } from './chat-message.interface';

export interface IFriend {
  id: string;
  name: string;
  age: number;
  city: string;
  description: string;
  online: boolean;
  isFavorite: boolean;
  isMyFriend: boolean;
  chat: IChatMessage[];
}
