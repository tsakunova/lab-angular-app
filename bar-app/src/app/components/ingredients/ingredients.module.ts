import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IngredientsSortComponent } from './ingredients-sort/ingredients-sort.component';
import { IngredientsFormComponent } from './ingredients-form/ingredients-form.component';
import { IngredientsSearchComponent } from './ingredients-search/ingredients-search.component';
import { IngredientsCardComponent } from './ingredients-card/ingredients-card.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { SharedModule } from '../shared/shared.module';
import { IngredientsPageComponent } from './ingredients-page/ingredients-page.component';

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
    MatInputModule,
    MatChipsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ScrollingModule,
    MatTooltipModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class IngredientsModule {
}
