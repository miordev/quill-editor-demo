import { DeltaOperation } from "quill";

// TODO: Move interface to generic interfaces folder
export interface MessagePayload {
  // TODO: Check the content type. Is it any type?
  content: DeltaOperation;
  html: string | null;
  text: string;
}
