import { IIngredientItem } from '../ingredients/ingredient.type';

export interface ICoctailComposition extends IIngredientItem {
  amount: number;
}
export interface ICoctailItem {
  id?: number;
  favorite: boolean;
  imageSrc?: string;
  name: string;
  type: string[];
  composition: ICoctailComposition[];
  recipe: string[];
  description: string;
}
