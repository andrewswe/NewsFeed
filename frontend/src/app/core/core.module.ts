import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NewsService } from './news.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [NewsService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parent: CoreModule
  ) {
    if (parent) {
      throw new Error(
        'CoreModule is already imported. Only import CoreModule at the root of the application'
      );
    }
  }
}
