import { MessageContentList } from './message-content.interface';

export interface MessagePayload {
  content: MessageContentList;
  html: string | null;
  text: string;
}
