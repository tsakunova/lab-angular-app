import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IIngredientItem} from "../../shared/ingredients/ingredient-item.model";
import {sortDirectionType} from "../../shared/enums";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent {
  @Input() ingredients: IIngredientItem[];
  @Input() search: string;
  @Input() sort: string;
  @Input() sortDirection: sortDirectionType;

  @Output()
  deleteCard: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  deleteCardHandler(id: number) {
    this.deleteCard.emit(id);
  }


}
