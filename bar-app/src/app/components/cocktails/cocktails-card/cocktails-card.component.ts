import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { ICocktailItem, ICocktailTypes } from '../../shared/cocktails/cocktail-item.model';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-cocktails-card',
  templateUrl: './cocktails-card.component.html',
  styleUrls: ['./cocktails-card.component.scss']
})
export class CocktailsCardComponent {
  @Output()
    addToHistory: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    addToFavorite: EventEmitter<number> = new EventEmitter<number>();

  @Input() item: ICocktailItem;

  @Input() ingredients: IIngredientItem[];

  @Input() types: ICocktailTypes[];

  constructor() { }

  getNameIngredient(ingredId: number) {
    return this.ingredients.find(item => item.id === ingredId)?.name;
  }

  getNameUnit(ingredId: number) {
    return this.ingredients.find(item => item.id === ingredId)?.unit;
  }

  getNameType(typeId: number) {
    return this.types.find(item => item.id === typeId)?.name;
  }

  historyAddHandler() {
    this.addToHistory.emit(this.item.id);
  }

  favoriteAddHandler() {
    this.addToFavorite.emit(this.item.id);
  }
}
