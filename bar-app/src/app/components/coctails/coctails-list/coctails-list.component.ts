import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { ICoctailItem } from '../../shared/coctails/coctail-item.model';

@Component({
  selector: 'app-coctails-list',
  templateUrl: './coctails-list.component.html',
  styleUrls: ['./coctails-list.component.scss']
})
export class CoctailsListComponent {
  @Input() coctails: ICoctailItem[];

  @Output()
    addToHistory: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    addToFavorite: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  addHistoryHandler(id: number) {
    this.addToHistory.emit(id);
  }

  addFavoriteHandler(id: number) {
    this.addToFavorite.emit(id);
  }
}
