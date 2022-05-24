import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IIngredientItem} from "../../shared/ingredients/ingredient-item.model";

@Component({
  selector: 'app-ingredients-card',
  templateUrl: './ingredients-card.component.html',
  styleUrls: ['./ingredients-card.component.scss']
})
export class IngredientsCardComponent {
  @Input() item: IIngredientItem;
  @Output()
  deleteCard: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  deleteCardHandler() {
    this.deleteCard.emit(this.item.id);
  }
}
