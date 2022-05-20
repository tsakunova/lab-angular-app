import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MybarPageComponent } from './mybar-page/mybar-page.component';

@NgModule({
  declarations: [
    MybarPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: MybarPageComponent,
    }])
  ]
})
export class MyBarModule {
}
