import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HistoryPageComponent } from './history-page/history-page.component';
import { HistoryTableComponent } from './history-table/history-table.component';

@NgModule({
  declarations: [
    HistoryPageComponent,
    HistoryTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HistoryPageComponent,
    }]),
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class HistoryModule { }
