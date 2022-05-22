import {
  Component, DoCheck, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-coctails-search',
  templateUrl: './coctails-search.component.html',
  styleUrls: ['./coctails-search.component.scss']
})
export class CoctailsSearchComponent implements DoCheck {
  search = '';

  @Output()
    searchValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngDoCheck() {
    this.searchValue.emit(this.search);
  }
}
