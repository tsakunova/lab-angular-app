import { Component, OnInit } from '@angular/core';
import { CoctailsService } from '../../shared/coctails/coctails.service';
import { ICoctailItem } from '../../shared/coctails/coctail-item.model';
import { HistoryService } from '../../shared/history/history.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  lastHistoryItem: ICoctailItem;

  isLoading = false;

  constructor(private coctailService: CoctailsService, private historyService: HistoryService) { }

  ngOnInit() {
    this.getTopCoctails();
  }

  getTopCoctails() {
    this.isLoading = true;
    this.historyService.getHistoryItems()
      .subscribe(historyItems => {
        this.lastHistoryItem = historyItems[historyItems.length - 1].coctail as ICoctailItem;
        this.isLoading = false;
      });
  }
}
