import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoctailsService } from '../../shared/coctails/coctails.service';
import { ICoctailItem } from '../../shared/coctails/coctail-item.model';
import { HistoryService } from '../../shared/history/history.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  lastHistoryItem: ICoctailItem;

  isLoading = false;

  readonly subscription = new Subscription();

  constructor(private coctailService: CoctailsService, private historyService: HistoryService) { }

  ngOnInit() {
    this.getTopCoctails();
  }

  getTopCoctails() {
    this.isLoading = true;
    const subscriptionHistiry = this.historyService.getHistoryItems()
      .subscribe(historyItems => {
        this.lastHistoryItem = historyItems[historyItems.length - 1].coctail as ICoctailItem;
        this.isLoading = false;
      });
    this.subscription.add(subscriptionHistiry);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('OnDestroy this.subscription.closed = ', this.subscription.closed);
  }
}
