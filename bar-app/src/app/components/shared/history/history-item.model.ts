import { ICoctailItem } from '../coctails/coctail-item.model';

export interface IHistoryItem {
  id?: number;
  coctailId: number;
  dateAdd: Date;
  coctail?: ICoctailItem;
}
