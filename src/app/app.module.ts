import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuillModule } from 'ngx-quill';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputEditorComponent } from './components/input-editor/input-editor.component';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputEditorComponent,
    CodeViewerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HighlightModule,
    QuillModule.forRoot(),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
