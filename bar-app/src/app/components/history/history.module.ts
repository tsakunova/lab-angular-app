import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPageComponent } from './history-page/history-page.component';
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    HistoryPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HistoryPageComponent,
    }])]
})
export class HistoryModule { }
