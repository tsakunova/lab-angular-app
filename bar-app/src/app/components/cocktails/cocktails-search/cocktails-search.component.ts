import {
  Component, DoCheck, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-cocktails-search',
  templateUrl: './cocktails-search.component.html',
  styleUrls: ['./cocktails-search.component.scss']
})
export class CocktailsSearchComponent implements DoCheck {
  search = '';

  @Output()
    searchValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngDoCheck() {
    this.searchValue.emit(this.search);
  }
}
