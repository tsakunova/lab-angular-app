import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientsService} from "./ingredients/ingredients.service";
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe
  ],
  providers: [
    IngredientsService
  ]
})
export class SharedModule { }
