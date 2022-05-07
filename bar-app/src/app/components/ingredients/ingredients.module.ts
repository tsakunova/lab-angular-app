import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { IngredientsPageComponent } from './ingredients-page/ingredients-page.component';
import {SharedModule} from "../shared/shared.module";
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientsCardComponent } from './ingredients-card/ingredients-card.component';
import { IngredientsSearchComponent } from './ingredients-search/ingredients-search.component';
import { IngredientsFilterComponent } from './ingredients-filter/ingredients-filter.component';
import { IngredientsFormComponent } from './ingredients-form/ingredients-form.component';
import {FormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    IngredientsPageComponent,
    IngredientsListComponent,
    IngredientsCardComponent,
    IngredientsSearchComponent,
    IngredientsFilterComponent,
    IngredientsFormComponent,

  ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild([{
            path: '', component: IngredientsPageComponent,
        }]),
        MatProgressSpinnerModule
    ]
})
export class IngredientsModule { }
