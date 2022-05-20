import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { ICoctailItem } from '../../shared/coctails/coctail-item.model';

@Component({
  selector: 'app-coctails-card',
  templateUrl: './coctails-card.component.html',
  styleUrls: ['./coctails-card.component.scss']
})
export class CoctailsCardComponent {
  @Output()
    addToHistory: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    addToFavorite: EventEmitter<number> = new EventEmitter<number>();

  @Input() item: ICoctailItem;

  constructor() { }

  historyAddHandler() {
    this.addToHistory.emit(this.item.id);
  }

  favoriteAddHandler() {
    this.addToFavorite.emit(this.item.id);
  }
}
