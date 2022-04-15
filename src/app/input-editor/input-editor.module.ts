import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillModule } from 'ngx-quill';
import { EmojiInputEditorComponent } from './components/emoji-input-editor/emoji-input-editor.component';

@NgModule({
  declarations: [
    EmojiInputEditorComponent
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot()
  ],
  exports: [
    EmojiInputEditorComponent
  ]
})
export class InputEditorModule { }
