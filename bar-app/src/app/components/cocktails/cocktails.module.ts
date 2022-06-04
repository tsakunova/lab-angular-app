import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CocktailsPageComponent } from './cocktails-page/cocktails-page.component';
import { CocktailsSearchComponent } from './cocktails-search/cocktails-search.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailsCardComponent } from './cocktails-card/cocktails-card.component';
import { CocktailsCurrentCardComponent } from './cocktails-current-card/cocktails-current-card.component';
import { SharedModule } from '../shared/shared.module';
import { CocktailsFormComponent } from './cocktails-form/cocktails-form.component';
import {A11yModule} from "@angular/cdk/a11y";

@NgModule({
  declarations: [
    CocktailsPageComponent,
    CocktailsSearchComponent,
    CocktailsListComponent,
    CocktailsCardComponent,
    CocktailsCurrentCardComponent,
    CocktailsFormComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: CocktailsPageComponent},
            {path: 'item/:id', component: CocktailsCurrentCardComponent},
        ]),
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        SharedModule,
        MatDialogModule,
        NgxMatSelectSearchModule,
        MatSlideToggleModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatSnackBarModule,
        MatTooltipModule,
        DragDropModule,
        A11yModule
    ]

})
export class CocktailsModule { }
