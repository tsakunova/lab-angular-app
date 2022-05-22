import { IIngredientItem } from '../ingredients/ingredient-type.model';

export interface ICoctailComposition extends IIngredientItem {
  amount: number;
}
export interface ICoctailItem {
  id: number;
  favorite: boolean;
  imageSrc?: string;
  name: string;
  typeId: number[];
  composition: ICoctailComposition[];
  recipe: string[];
  description: string;
}

export interface ICoctailTypes {
  id: number;
  name: string;
  coctailsIds: number[];
}

export enum CoctailTypeModel {
  lowAlcohol= 'low-alcohol',
  bitter ='bitter',
  ginBased = 'gin based',
  mixes = 'mixes',
  long = 'long drinks',
  citrus = 'citrus',
  tropical = 'tropical',
  vodka = 'vodka based',
  sweet = 'sweet',
  sparkling = 'sparkling',
  simple = 'simple',
  fizz = 'fizz',
}
