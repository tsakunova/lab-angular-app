import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoctailsPageComponent } from './coctails-page/coctails-page.component';
import {RouterModule} from "@angular/router";
import { CoctailsSearchComponent } from './coctails-search/coctails-search.component';
import { CoctailsListComponent } from './coctails-list/coctails-list.component';
import { CoctailsCardComponent } from './coctails-card/coctails-card.component';



@NgModule({
  declarations: [
    CoctailsPageComponent,
    CoctailsSearchComponent,
    CoctailsListComponent,
    CoctailsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: CoctailsPageComponent
    }])

  ]

})
export class CoctailsModule { }
