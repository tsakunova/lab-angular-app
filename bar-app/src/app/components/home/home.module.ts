import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeTopFiveComponent } from './home-top-five/home-top-five.component';
import { HomeLastCoctailComponent } from './home-last-coctail/home-last-coctail.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeTopFiveComponent,
    HomeLastCoctailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HomePageComponent,
    }]),
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
