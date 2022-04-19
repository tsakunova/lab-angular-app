import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoctailsComponent} from "./components/coctails/coctails.component";
import {IngredientsComponent} from "./components/ingredients/ingredients.component";
import {HistoryComponent} from "./components/history/history.component";
import {MyBarComponent} from "./components/my-bar/my-bar.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'coctails', component: CoctailsComponent},
  { path: 'ingredients', component:  IngredientsComponent},
  { path: 'history', component:  HistoryComponent},
  { path: 'my-bar', component:  MyBarComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
