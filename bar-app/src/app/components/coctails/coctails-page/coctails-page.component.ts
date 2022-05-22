import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { ICoctailItem, ICoctailTypes } from '../../shared/coctails/coctail-item.model';
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

  search = '';

  sortToTypes: ICoctailTypes[] = [];

  coctailsList: ICoctailItem[];

  coctailTypes: ICoctailTypes[] = [];

  constructor(private coctailServise: CoctailsService, private historyService: HistoryService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchTypes();
    this.fetchCoctails();
  }

  fetchTypes() {
    this.coctailServise.getCoctailsTypes()
      .subscribe(types => {
        this.coctailTypes = types;
      });
  }

  fetchCoctails() {
    this.isLoading = true;
    this.coctailServise.getCoctails(this.sortToTypes)
      .subscribe(coctails => {
        this.coctailsList = coctails;
        this.isLoading = false;
      });
  }

  getData() {
    const idsArr = this.sortToTypes.map(item => item.coctailsIds); // [[1,2],[3], [4]]
    const ids = Array.from(new Set(idsArr.flat())); // [1,2,3,4]
    const data = ids.filter(id => idsArr.every(item => item.includes(id)));
    this.coctailServise.getCoctails(data)
      .subscribe(coctails => {
        this.coctailsList = coctails;
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
    this.historyService.addHistoryItem(historyItem).subscribe();
  }

  openDialog() {

  }

  sortToType(coctailT: ICoctailTypes, chip: MatChip) {
    if (this.sortToTypes.includes(coctailT)) {
      this.sortToTypes = this.sortToTypes.filter(item => item !== coctailT);
    } else {
      this.sortToTypes = [...this.sortToTypes, coctailT];
    }
    this.getData();
    chip.toggleSelected();
  }

  searchHeandler(value: any) {
    this.search = value;
  }
}
