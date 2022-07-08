import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MybarBoardComponent } from './mybar-board/mybar-board.component';
import { MybarPageComponent } from './mybar-page/mybar-page.component';

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
    MatProgressSpinnerModule,
    ClipboardModule,
    MatIconModule,
    MatButtonModule,
    CdkAccordionModule
  ]
})
export class MyBarModule {
}
