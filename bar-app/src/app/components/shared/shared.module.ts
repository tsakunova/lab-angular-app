import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsService } from './ingredients/ingredients.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    SortPipe
  ],
  providers: [
    IngredientsService
  ]
})
export class SharedModule {
}
