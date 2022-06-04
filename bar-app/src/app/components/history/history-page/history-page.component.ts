import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHistoryItem } from '../../shared/history/history-item.model';
import { HistoryService } from '../../shared/history/history.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {
  readonly subscription = new Subscription();

  isLoading = false;

  historyList: IHistoryItem[];

  searchValue: string;

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchHistoryItems();
  }

  fetchHistoryItems() {
    const subscriptionHistory = this.historyService.getHistoryItems()
      .subscribe(items => {
        this.historyList = [...items];
        this.isLoading = false;
      });
    this.subscription.add(subscriptionHistory);
  }

  deleteHistoryItemHandler(id: number) {
    const subscriptionHistoryDel = this.historyService.deleteHistoryItem(id)
      .subscribe(() => {
        this.fetchHistoryItems();
      });
    this.subscription.add(subscriptionHistoryDel);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchValue = filterValue.toLowerCase();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
