import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-ingredients-card',
  templateUrl: './ingredients-card.component.html',
  styleUrls: ['./ingredients-card.component.scss']
})
export class IngredientsCardComponent {
  @Input() item: IIngredientItem;

  @Output()
    addMyBarCard: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    addToBuyCard: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    editCard: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {
  }

  editCardHandler() {
    this.editCard.emit(this.item.id);
  }

  addMyBarCardHandler() {
    this.addMyBarCard.emit(this.item.id);
  }

  addToBuyCardHandler() {
    this.addToBuyCard.emit(this.item.id);
  }
}
