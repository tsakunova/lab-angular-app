import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoctailsService } from '../../shared/coctails/coctails.service';
import { ICoctailItem } from '../../shared/coctails/coctail-item.model';
import { HistoryService } from '../../shared/history/history.service';
import { IHistoryItem } from '../../shared/history/history-item.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  lastHistoryItem: ICoctailItem;

  topFive: ICoctailItem[];

  topFiveCount: number[];

  isLoading = false;

  readonly subscription = new Subscription();

  constructor(private coctailService: CoctailsService, private historyService: HistoryService) { }

  ngOnInit() {
    this.renderTopFiveCoctails();
    this.getLastCoctails();
  }

  getLastCoctails() {
    this.isLoading = true;
    const subscriptionHistory = this.historyService.getHistoryItems()
      .subscribe(historyItems => {
        this.lastHistoryItem = historyItems[historyItems.length - 1].coctail as ICoctailItem;
        this.isLoading = false;
      });
    this.subscription.add(subscriptionHistory);
  }

  getNumberTopCoctails(items: IHistoryItem[]) {
    const numCoctails: number[] = items.map(item => item.coctailId);
    const result: {[char: string]: number} = {};
    for (const elem of numCoctails) {
      if (result[elem] !== undefined) {
        result[elem] += 1;
      } else {
        result[elem] = 1;
      }
    }
    const entries = Object.entries(result);
    const idCoctails = entries.sort((a, b) => b[1] - a[1]).slice(0, 5).map(item => +item[0]);
    const coctailsCount = entries.sort((a, b) => b[1] - a[1]).slice(0, 5).map(item => +item[1]);
    const subscriptionCoctails = this.coctailService.getCoctails(idCoctails)
      .subscribe(items => {
        this.topFive = items;
        this.topFiveCount = coctailsCount;
      });
    this.subscription.add(subscriptionCoctails);
  }

  renderTopFiveCoctails() {
    const subscriptionHistoryTop = this.historyService.getHistoryItems()
      .subscribe(items => {
        this.getNumberTopCoctails(items);
      });
    this.subscription.add(subscriptionHistoryTop);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('OnDestroy this.subscription.closed = ', this.subscription.closed);
  }
}
