import { IIngredientItem, IngredientsModel, IngredientUnitModel } from '../ingredients/ingredients.model';

export interface ICocktailComposition {
  id: number;
  amount: number;
}
export interface ICocktailItem {
  id?: number;
  favorite: boolean;
  imageSrc?: string;
  name: string;
  typeId: number[];
  composition: ICocktailComposition[];
  recipe: string[];
  description: string;
}

export interface ICocktailTypes {
  id: number;
  name: string;
  cocktailsIds: number[];
}

export enum CocktailTypeModel {
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

export interface IConfig {
  typeForm: string;
  types: ICocktailTypes[];
  ingredients: IIngredientItem[];
}

export interface IIngredientsConfig {
  types: Array<{ id: number; name: IngredientsModel }>;
  units: Array<{ id: number; name: IngredientUnitModel }>;
  typeForm: string;
}
