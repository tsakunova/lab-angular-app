import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsService } from './ingredients/ingredients.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FilterPipe,
    SortPipe,
    HttpClientModule
  ],
  providers: [
    IngredientsService
  ]
})
export class SharedModule {
}
