import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { QuillModule } from 'ngx-quill';

import { EmojiInputEditorComponent } from './components/emoji-input-editor/emoji-input-editor.component';

@NgModule({
  declarations: [
    EmojiInputEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuillModule.forRoot()
  ],
  exports: [
    EmojiInputEditorComponent
  ]
})
export class InputEditorModule { }
