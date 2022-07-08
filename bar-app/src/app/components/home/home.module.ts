import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkTableModule } from '@angular/cdk/table';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeTopFiveComponent } from './home-top-five/home-top-five.component';
import { HomeLastCocktailComponent } from './home-last-cocktail/home-last-cocktail.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeTopFiveComponent,
    HomeLastCocktailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HomePageComponent,
    }]),
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CdkTableModule
  ]
})
export class HomeModule { }
