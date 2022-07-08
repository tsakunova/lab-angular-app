import { ICocktailItem } from '../cocktails/cocktail-item.model';

export interface IHistoryItem {
  id?: number;
  cocktailId: number;
  dateAdd: Date;
  cocktail?: ICocktailItem;
}
