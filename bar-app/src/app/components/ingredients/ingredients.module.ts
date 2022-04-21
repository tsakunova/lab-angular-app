import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { IngredientsPageComponent } from './ingredients-page/ingredients-page.component';
import {SharedModule} from "../shared/shared.module";
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientsCardComponent } from './ingredients-card/ingredients-card.component';
import { IngredientsSearchComponent } from './ingredients-search/ingredients-search.component';
import { IngredientsFilterComponent } from './ingredients-filter/ingredients-filter.component';


@NgModule({
  declarations: [
    IngredientsPageComponent,
    IngredientsListComponent,
    IngredientsCardComponent,
    IngredientsSearchComponent,
    IngredientsFilterComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '', component: IngredientsPageComponent,
    }])
  ]
})
export class IngredientsModule { }
