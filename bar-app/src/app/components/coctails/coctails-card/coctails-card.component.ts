import {Component, Input, OnInit} from '@angular/core';
import {ICoctailItem} from "../../shared/coctails/coctail-item.model";

@Component({
  selector: 'app-coctails-card',
  templateUrl: './coctails-card.component.html',
  styleUrls: ['./coctails-card.component.scss']
})
export class CoctailsCardComponent {
  @Input() item: ICoctailItem;

  constructor() { }

  ngOnInit(): void {
  }

}
