import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';

@NgModule({
  declarations: [
    CodeViewerComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  exports: [
    CodeViewerComponent
  ]
})
export class OutputEditorModule { }
