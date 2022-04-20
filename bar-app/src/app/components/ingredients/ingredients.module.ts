import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { IngredientsPageComponent } from './ingredients-page/ingredients-page.component';



@NgModule({
  declarations: [
    IngredientsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: IngredientsPageComponent,
    }])
  ]
})
export class IngredientsModule { }
