import { Component } from '@angular/core';
import { MessagePayload } from './interfaces/message-payload.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quill-editor-demo';

  // TODO: Move to another component. Create a parent component (editorComponent)
  public currentMessage?: MessagePayload

  public updateMessage(message: MessagePayload) {
    this.currentMessage = message
  }
}
