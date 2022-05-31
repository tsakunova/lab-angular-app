import {
  ChangeDetectorRef,
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

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngDoCheck() {
    this.cdr.markForCheck();
    this.searchValue.emit(this.search);
  }
}
