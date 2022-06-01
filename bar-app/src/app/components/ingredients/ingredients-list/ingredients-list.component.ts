import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, Output
} from '@angular/core';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';
import { sortDirectionType } from '../../shared/enums';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientsListComponent {
  @Input() ingredients: IIngredientItem[];

  @Input() search: string;

  @Input() sort: string;

  @Input() sortDirection: sortDirectionType;

  @Output()
    addMyBarCard: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    addToBuyCard: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    editCard: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  addMyBarCardHandler(id: number) {
    this.addMyBarCard.emit(id);
  }

  addToBuyCardHandler(id: number) {
    this.addToBuyCard.emit(id);
  }

  editCardHandler(id: number) {
    this.editCard.emit(id);
  }
}
