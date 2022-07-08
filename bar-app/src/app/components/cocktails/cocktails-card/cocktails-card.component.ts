import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import { ICocktailItem, ICocktailTypes } from '../../shared/cocktails/cocktail-item.model';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-cocktails-card',
  templateUrl: './cocktails-card.component.html',
  styleUrls: ['./cocktails-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailsCardComponent implements OnChanges {
  @Output()
    addToHistory: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    addToFavorite: EventEmitter<number> = new EventEmitter<number>();

  @Input() item: ICocktailItem;

  @Input() ingredients: IIngredientItem[];

  @Input() types: ICocktailTypes[];

  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }

  ngOnChanges() {
    this.cd.reattach();
  }

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
