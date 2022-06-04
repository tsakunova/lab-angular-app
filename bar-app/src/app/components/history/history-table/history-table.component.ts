import {
  AfterContentInit,
  AfterViewInit,
  Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild
} from '@angular/core';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IHistoryItem } from '../../shared/history/history-item.model';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HistoryTableComponent implements AfterViewInit, OnChanges, AfterContentInit {
  dataSource: MatTableDataSource<IHistoryItem>;

  displayedColumns: string[] = ['cocktailName', 'dateAdd', 'delete'];

  expandedElement: IHistoryItem | null;

  @Input() historyItems: IHistoryItem[];

  @Input() search: string;

  @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnChanges(value: SimpleChanges) {
    console.log('NgOnChanges', value);
    if (this.dataSource) {
      this.connectMatTable();
    }
  }

  ngAfterContentInit() {
    this.connectMatTable();
  }

  ngAfterViewInit() {
    this.connectMatTable();
  }

  deleteHistoryItem(id: number, event: Event) {
    event.stopPropagation();
    this.deleteItem.emit(id);
    this.dataSource.disconnect();
  }

  private connectMatTable() {
    this.dataSource = new MatTableDataSource<IHistoryItem>(this.historyItems);
    this.dataSource.filterPredicate = (data, filter: string) => !!data.cocktail?.name
      .toLocaleLowerCase().includes(filter);
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
      if (property === 'cocktailName') {
        return item.cocktail?.name;
      }
      // @ts-ignore
      return item[property];
    };

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filter = this.search;
  }
}
