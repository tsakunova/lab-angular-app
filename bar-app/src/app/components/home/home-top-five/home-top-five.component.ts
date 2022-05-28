import { Component, Input } from '@angular/core';
import { ICoctailItem } from '../../shared/coctails/coctail-item.model';

@Component({
  selector: 'app-home-top-five',
  templateUrl: './home-top-five.component.html',
  styleUrls: ['./home-top-five.component.scss']
})
export class HomeTopFiveComponent {
  @Input()topFive: ICoctailItem[];

  @Input()topFiveCount: number[];

  displayedColumns: string[] = ['number', 'name', 'count'];

}
