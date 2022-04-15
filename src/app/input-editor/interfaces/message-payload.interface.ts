import { Delta } from "quill";

export interface MessagePayload {
  content: Delta;
  html: string | null;
  text: string;
}
