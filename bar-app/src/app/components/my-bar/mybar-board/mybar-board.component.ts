import {
  Component, ChangeDetectionStrategy, Input, Output, EventEmitter
} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';
import { IMyBar } from '../../shared/mybar/mybar-item.model';

@Component({
  selector: 'app-mybar-board',
  templateUrl: './mybar-board.component.html',
  styleUrls: ['./mybar-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MybarBoardComponent {
  myBar: IMyBar;

  @Input() bar: IIngredientItem[];

  @Input() buy: IIngredientItem[];

  @Output() reloadData: EventEmitter<IMyBar> = new EventEmitter<IMyBar>();

  constructor() { }

  drop(event: CdkDragDrop<IIngredientItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if (event.container.element.nativeElement.id === 'bar') {
        this.myBar = {
          inbar: event.container.data.map(item => item.id) as number[],
          tobuy: event.previousContainer.data.map(item => item.id) as number[],
        };
      } else if (event.container.element.nativeElement.id === 'buy') {
        this.myBar = {
          inbar: event.previousContainer.data.map(item => item.id) as number[],
          tobuy: event.container.data.map(item => item.id) as number[]
        };
      }
      this.reloadData.emit(this.myBar);
    }
  }
}
