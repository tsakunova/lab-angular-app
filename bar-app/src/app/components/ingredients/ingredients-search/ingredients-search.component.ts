import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ingredients-search',
  templateUrl: './ingredients-search.component.html',
  styleUrls: ['./ingredients-search.component.scss']
})
export class IngredientsSearchComponent implements OnInit {
  search: string = '';

  @Output()
  searchValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  //
  // searchHandler(value: string){
  //   this.searchValue.emit(value);
  // }

  ngDoCheck() {
    this.searchValue.emit(this.search)
  }

  ngOnInit(): void {
  }

}
