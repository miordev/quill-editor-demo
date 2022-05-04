import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [],
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
    HighlightModule
  ]
})
export class SharedModule { }
