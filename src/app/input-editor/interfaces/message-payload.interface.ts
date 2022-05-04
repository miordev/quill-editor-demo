import { DeltaOperation } from "quill";

export interface MessagePayload {
  content: DeltaOperation;
  html: string | null;
  text: string;
}
