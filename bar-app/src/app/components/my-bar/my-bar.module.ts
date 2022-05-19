import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MybarPageComponent} from './mybar-page/mybar-page.component';
import {RouterModule} from "@angular/router";


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
