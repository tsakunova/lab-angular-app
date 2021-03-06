import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsModule } from './components/cocktails/cocktails.module';
import { IngredientsModule } from './components/ingredients/ingredients.module';
import { MyBarModule } from './components/my-bar/my-bar.module';
import { HistoryModule } from './components/history/history.module';
import { HomeModule } from './components/home/home.module';
import { AdminModule } from './components/admin/admin.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'cocktails', loadChildren: () => CocktailsModule },
  { path: 'ingredients', loadChildren: () => IngredientsModule },
  { path: 'history', loadChildren: () => HistoryModule },
  { path: 'my-bar', loadChildren: () => MyBarModule },
  { path: 'admin', loadChildren: () => AdminModule },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
