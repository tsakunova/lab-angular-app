import { Component, Input } from '@angular/core';
import { ICocktailItem } from '../../shared/cocktails/cocktail-item.model';

@Component({
  selector: 'app-home-top-five',
  templateUrl: './home-top-five.component.html',
  styleUrls: ['./home-top-five.component.scss']
})
export class HomeTopFiveComponent {
  @Input()topFive: ICocktailItem[];

  @Input()topFiveCount: number[];

  displayedColumns: string[] = ['number', 'name', 'count'];
}
