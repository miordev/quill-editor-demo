import { MessageContentList } from './message-content.interface';

// TODO: Move interface to generic interfaces folder
// TODO: Change the interface name
export interface MessagePayload {
  // TODO: Check the content type. Is it any type?
  content: MessageContentList;
  html: string | null;
  text: string;
}
