import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IIngredientItem} from "../../shared/ingredients/ingredient-item.model";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent {
  @Input() ingredients: IIngredientItem[];
  @Input() search: string;
  @Output()
  deleteCard: EventEmitter<number> = new EventEmitter<number>();
  deleteCardHandler(id: number) {
    this.deleteCard.emit(id);
  }
  constructor() { }
}
