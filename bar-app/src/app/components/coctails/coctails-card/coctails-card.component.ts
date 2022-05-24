import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { ICoctailItem, ICoctailTypes } from '../../shared/coctails/coctail-item.model';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-coctails-card',
  templateUrl: './coctails-card.component.html',
  styleUrls: ['./coctails-card.component.scss']
})
export class CoctailsCardComponent {
  @Output()
    addToHistory: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    addToFavorite: EventEmitter<number> = new EventEmitter<number>();

  @Input() item: ICoctailItem;

  @Input() ingredients: IIngredientItem[];

  @Input() types: ICoctailTypes[];

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
