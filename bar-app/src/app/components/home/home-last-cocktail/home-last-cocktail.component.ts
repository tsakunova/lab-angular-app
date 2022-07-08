import { Component, Input } from '@angular/core';
import { ICocktailItem } from '../../shared/cocktails/cocktail-item.model';

@Component({
  selector: 'app-home-last-cocktail',
  templateUrl: './home-last-cocktail.component.html',
  styleUrls: ['./home-last-cocktail.component.scss']
})
export class HomeLastCocktailComponent {
@Input() cocktail: ICocktailItem;
}
