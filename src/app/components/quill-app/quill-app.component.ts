import { Component } from '@angular/core';

import { MessagePayload } from '../../interfaces/message-payload.interface';

@Component({
  selector: 'app-quill-app',
  templateUrl: './quill-app.component.html',
  styleUrls: ['./quill-app.component.css']
})
export class QuillAppComponent {
  public currentMessage?: MessagePayload

  public updateMessage(message: MessagePayload) {
    this.currentMessage = message
  }
}
