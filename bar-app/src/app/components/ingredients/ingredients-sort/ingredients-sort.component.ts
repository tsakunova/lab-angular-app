import {
  Component, DoCheck, EventEmitter, Output
} from '@angular/core';
import { sortDirectionType, sortType } from '../../shared/enums';

@Component({
  selector: 'app-ingredients-sort',
  templateUrl: './ingredients-sort.component.html',
  styleUrls: ['./ingredients-sort.component.scss']
})
export class IngredientsSortComponent implements DoCheck {
  selects: string[] = Object.keys(sortType);

  sort: string = sortType.type;

  direction: string = sortDirectionType.up;

  @Output()
    sortValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
    sortDirection: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngDoCheck() {
    this.sortValue.emit(this.sort);
    this.sortDirection.emit(this.direction);
  }

  onSortChanged(value: sortType) {
    this.sort = value;
  }

  onDirectionSortChanged(value: sortDirectionType) {
    this.direction = value;
  }

  addDirection() {
    this.direction === sortDirectionType.up
      ? this.direction = sortDirectionType.down
      : this.direction = sortDirectionType.up;
    console.log(this.direction);
  }
}
