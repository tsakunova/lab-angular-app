import { Component, Input } from '@angular/core';
import { ICoctailItem } from '../../shared/coctails/coctail-item.model';

@Component({
  selector: 'app-home-last-coctail',
  templateUrl: './home-last-coctail.component.html',
  styleUrls: ['./home-last-coctail.component.scss']
})
export class HomeLastCoctailComponent {
@Input() coctail: ICoctailItem;
}
