import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IIngredientItem } from '../../shared/ingredients/ingredient.type';

@Component({
  selector: 'app-ingredients-card',
  templateUrl: './ingredients-card.component.html',
  styleUrls: ['./ingredients-card.component.scss']
})
export class IngredientsCardComponent {
  @Input() item: IIngredientItem;

  @Output()
    deleteCard: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    editCard: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {
  }

  deleteCardHandler() {
    this.deleteCard.emit(this.item.id);
  }

  editCardHandler() {
    this.editCard.emit(this.item.id);
  }
}
