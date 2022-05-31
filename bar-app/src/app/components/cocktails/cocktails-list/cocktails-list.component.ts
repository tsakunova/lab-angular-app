import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ICocktailItem, ICocktailTypes } from '../../shared/cocktails/cocktail-item.model';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent {
  @Input() cocktails: ICocktailItem[];

  @Input() cocktailTypesArr: ICocktailTypes[];

  @Input() ingredients: IIngredientItem[] = [];

  @Input() search: string;

  @Output()
    addToHistory: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    addToFavorite: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  addHistoryHandler(id: number) {
    this.addToHistory.emit(id);
  }

  addFavoriteHandler(id: number) {
    this.addToFavorite.emit(id);
  }

  drop(event: CdkDragDrop<ICocktailItem[]>) {
    moveItemInArray(this.cocktails, event.previousIndex, event.currentIndex);
  }
}
