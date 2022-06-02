import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CocktailsService } from '../../shared/cocktails/cocktails.service';
import { ICocktailItem } from '../../shared/cocktails/cocktail-item.model';
import { HistoryService } from '../../shared/history/history.service';
import { IHistoryItem } from '../../shared/history/history-item.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  lastHistoryItem: ICocktailItem;

  topFive: ICocktailItem[];

  topFiveCount: number[];

  isLoading = false;

  readonly subscription = new Subscription();

  constructor(private cocktailService: CocktailsService, private historyService: HistoryService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getLastCocktails();
    this.renderTopFiveCocktails();
  }

  getLastCocktails() {
    const subscriptionHistory = this.historyService.getHistoryItems()
      .subscribe(historyItems => {
        this.lastHistoryItem = historyItems[historyItems.length - 1].cocktail as ICocktailItem;
      });
    this.subscription.add(subscriptionHistory);
  }

  getNumberTopCocktails(items: IHistoryItem[]) {
    const numCocktails: number[] = items.map(item => item.cocktailId);
    const initial: Record<string, number> = {};
    const result = numCocktails.reduce((acc, curr) => {
      if (acc[curr]) {
        return {
          ...acc,
          [curr]: acc[curr] + 1
        };
      }
      return {
        ...acc,
        [curr]: 1
      };
    }, initial);
    const entries = Object.entries(result);
    const idCocktails = entries.sort((a, b) => b[1] - a[1]).slice(0, 5).map(item => +item[0]);
    const cocktailsCount = entries.sort((a, b) => b[1] - a[1]).slice(0, 5).map(item => +item[1]);
    const subscriptionCocktails = this.cocktailService.getCocktails(idCocktails)
      .subscribe(cockt => {
        this.topFive = cockt;
        this.topFiveCount = cocktailsCount;
      });
    this.subscription.add(subscriptionCocktails);
  }

  renderTopFiveCocktails() {
    const subscriptionHistoryTop = this.historyService.getHistoryItems()
      .subscribe(items => {
        this.getNumberTopCocktails(items);
        this.isLoading = false;
      });
    this.subscription.add(subscriptionHistoryTop);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('OnDestroy this.subscription.closed = ', this.subscription.closed);
  }
}
