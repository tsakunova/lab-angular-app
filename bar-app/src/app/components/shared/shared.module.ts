import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientsService} from "./ingredients/ingredients.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    IngredientsService
  ]
})
export class SharedModule { }
