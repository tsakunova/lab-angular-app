import {Component, Input, OnInit} from '@angular/core';
import {ICoctailItem} from "../../shared/coctails/coctail-item.model";

@Component({
  selector: 'app-coctails-list',
  templateUrl: './coctails-list.component.html',
  styleUrls: ['./coctails-list.component.scss']
})
export class CoctailsListComponent{
  @Input() coctails: ICoctailItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
