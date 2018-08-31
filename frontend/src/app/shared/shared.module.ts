import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardComponent, ReactiveFormsModule, LoaderComponent],
  declarations: [CardComponent, LoaderComponent]
})
export class SharedModule {}
