import { Component, EventEmitter, Output } from '@angular/core';
import { ContentChange } from 'ngx-quill';

import { MessagePayload } from '../../interfaces/message-payload.interface';

@Component({
  selector: 'app-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.css']
})
export class InputEditorComponent {
  public currentMessage?: MessagePayload

  @Output() onMessage = new EventEmitter<MessagePayload>();

  public updateMessage(lastQuillMessage: ContentChange) {
    this.currentMessage = {
      content: lastQuillMessage.content,
      html: lastQuillMessage.html,
      text: lastQuillMessage.text,
    }
    this.onMessage.emit(this.currentMessage)
  }

}
