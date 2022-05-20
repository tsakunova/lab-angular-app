import { Component, OnInit } from '@angular/core';
import { IHistoryItem } from '../../shared/history/history-item.model';
import { HistoryService } from '../../shared/history/history.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  historyList: IHistoryItem[];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.fetchHistoryItems();
  }

  fetchHistoryItems() {
    this.historyService.getHistoryItems()
      .subscribe(items => {
        this.historyList = items;
      });
  }
}
