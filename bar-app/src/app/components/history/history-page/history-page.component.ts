import { Component, OnInit } from '@angular/core';
import { IHistoryItem } from '../../shared/history/history-item.model';
import { HistoryService } from '../../shared/history/history.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  isLoading = false;

  historyList: IHistoryItem[];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchHistoryItems();
  }

  fetchHistoryItems() {
    this.historyService.getHistoryItems()
      .subscribe(items => {
        this.historyList = items;
        this.isLoading = false;
      });
  }

  deleteHistoryItemHandler(id: number) {
    this.historyService.deleteHistoryItem(id)
      .subscribe(() => {
        this.fetchHistoryItems();
      });
  }
}
