import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { CoctailsComponent } from './components/coctails/coctails.component';
import { MyBarComponent } from './components/my-bar/my-bar.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    CoctailsComponent,
    MyBarComponent,
    HistoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
