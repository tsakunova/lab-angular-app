import { Component, OnInit } from '@angular/core';
import { ICoctailItem } from '../../shared/coctails/coctail-item.model';
import { CoctailsService } from '../../shared/coctails/coctails.service';
import { HistoryService } from '../../shared/history/history.service';
import { IHistoryItem } from '../../shared/history/history-item.model';

@Component({
  selector: 'app-coctails-page',
  templateUrl: './coctails-page.component.html',
  styleUrls: ['./coctails-page.component.scss']
})
export class CoctailsPageComponent implements OnInit {
  isLoading = false;

  coctailsList: ICoctailItem[];

  constructor(private coctailServise: CoctailsService, private historyService: HistoryService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.coctailServise.getCoctails()
      .subscribe(coctails => {
        this.coctailsList = coctails;
        this.isLoading = false;
      });
  }

  getData() {
    this.coctailServise.getCoctails()
      .subscribe(coctails => {
        this.coctailsList = [...coctails];
        this.isLoading = false;
      });
  }

  addFavorite(id: number) {
    const coctail = this.coctailsList[id];
    coctail.favorite = !coctail.favorite;
    this.coctailServise.editFavoriteField(id, coctail)
      .subscribe(() => {
        this.getData();
      });
  }

  addHistory(id: number) {
    const date = new Date();
    const historyItem: IHistoryItem = {
      coctailId: id,
      dateAdd: date
    };
    this.historyService.addHistoryItem(historyItem)
      .subscribe(() => {
        console.log('add history');
      });
  }
}
