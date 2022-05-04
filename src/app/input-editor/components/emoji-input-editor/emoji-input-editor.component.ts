import { Component } from '@angular/core';
import { ContentChange } from 'ngx-quill';

import { MessagePayload } from '../../interfaces/message-payload.interface';

@Component({
  selector: 'app-emoji-input-editor',
  templateUrl: './emoji-input-editor.component.html',
  styleUrls: ['./emoji-input-editor.component.css']
})
export class EmojiInputEditorComponent {

  public currentMessage?: MessagePayload

  public handleContentChanged(lastQuillMessage: ContentChange) {
    this.currentMessage = {
      content: lastQuillMessage.content,
      html: lastQuillMessage.html,
      text: lastQuillMessage.text,
    }
    console.log(this.currentMessage)
  }

}
