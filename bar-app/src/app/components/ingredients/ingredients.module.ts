import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { IngredientsPageComponent } from './ingredients-page/ingredients-page.component';
import {SharedModule} from "../shared/shared.module";
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientsCardComponent } from './ingredients-card/ingredients-card.component';
import { IngredientsSearchComponent } from './ingredients-search/ingredients-search.component';
import { IngredientsFormComponent } from './ingredients-form/ingredients-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { IngredientsSortComponent } from './ingredients-sort/ingredients-sort.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    IngredientsPageComponent,
    IngredientsListComponent,
    IngredientsCardComponent,
    IngredientsSearchComponent,
    IngredientsFormComponent,
    IngredientsSortComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '', component: IngredientsPageComponent,
    }]),
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class IngredientsModule { }
