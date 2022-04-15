import { Component, OnInit } from '@angular/core';
import { ContentChange } from 'ngx-quill';

@Component({
  selector: 'app-emoji-input-editor',
  templateUrl: './emoji-input-editor.component.html',
  styleUrls: ['./emoji-input-editor.component.css']
})
export class EmojiInputEditorComponent {

  public handleContentChanged(lastMessage: ContentChange) {
    console.log(lastMessage)
  }

}
