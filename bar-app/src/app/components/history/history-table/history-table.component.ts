import {
  AfterViewInit,
  Component, EventEmitter, Input, Output, ViewChild
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
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HistoryTableComponent implements AfterViewInit {
  @Input() historyItems: IHistoryItem[];

  @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IHistoryItem>;

  displayedColumns: string[] = ['id', 'coctail.name', 'dateAdd', 'delete'];

  expandedElement: IHistoryItem | null;

  ngOnChanges() {
    if (this.dataSource) {
      this.connectMatTable();
    }
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
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'coctail.name') {
        return item.coctail?.name;
      }

      // @ts-ignore
      return item[property];
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
