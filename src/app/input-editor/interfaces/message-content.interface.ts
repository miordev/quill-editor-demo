export interface StringMap {
  [key: string]: boolean;
}

export interface MessageContent {
  insert: string,
  attributes?: StringMap
}

export interface MessageContentList {
  ops: MessageContent[]
}
