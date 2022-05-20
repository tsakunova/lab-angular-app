import {
  Component, DoCheck, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-ingredients-search',
  templateUrl: './ingredients-search.component.html',
  styleUrls: ['./ingredients-search.component.scss']
})
export class IngredientsSearchComponent implements DoCheck {
  search = '';

  @Output()
    searchValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngDoCheck() {
    this.searchValue.emit(this.search);
  }
}
