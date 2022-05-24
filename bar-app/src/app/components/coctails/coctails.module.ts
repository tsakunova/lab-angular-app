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
import { CoctailsPageComponent } from './coctails-page/coctails-page.component';
import { CoctailsSearchComponent } from './coctails-search/coctails-search.component';
import { CoctailsListComponent } from './coctails-list/coctails-list.component';
import { CoctailsCardComponent } from './coctails-card/coctails-card.component';
import { CoctailsCurrentCardComponent } from './coctails-current-card/coctails-current-card.component';
import { SharedModule } from '../shared/shared.module';
import { CoctailsFormComponent } from './coctails-form/coctails-form.component';

@NgModule({
  declarations: [
    CoctailsPageComponent,
    CoctailsSearchComponent,
    CoctailsListComponent,
    CoctailsCardComponent,
    CoctailsCurrentCardComponent,
    CoctailsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CoctailsPageComponent },
      { path: 'item/:id', component: CoctailsCurrentCardComponent },
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
    MatAutocompleteModule

  ]

})
export class CoctailsModule { }
