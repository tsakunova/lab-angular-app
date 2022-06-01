import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MybarPageComponent } from './mybar-page/mybar-page.component';
import { MybarBoardComponent } from './mybar-board/mybar-board.component';

@NgModule({
  declarations: [
    MybarPageComponent,
    MybarBoardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: MybarPageComponent,
    }]),
    DragDropModule,
    MatProgressSpinnerModule
  ]
})
export class MyBarModule {
}
