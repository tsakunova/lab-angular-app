import {IIngredientItem} from "../ingredients/ingredient-item.model";

export interface ICoctailItem {
  id?: number;
  imageSrc?: string;
  name: string;
  type: string[];
  composition: ICoctailComposition[];
  recipe: string[];
  description: string;
}

export interface ICoctailComposition extends IIngredientItem {
  amount: number;
}
