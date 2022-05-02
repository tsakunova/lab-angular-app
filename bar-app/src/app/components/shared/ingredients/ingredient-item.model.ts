export interface IIngredientItem {
     id: number;
    name: string;
    type: string;
    unit: string;
}
export type IngredientForSave = Omit<IIngredientItem, 'id'>;

export enum IngredientType {
  alco = 'Strong spirits',
  vermut = 'Vermouth',
  bitter = 'Liqueurs and Bitters',
  vine = 'Wines',
  beer = 'Beer and cider',
  syrop = 'Syrups',
  water = 'Water and drinks',
  fruits = 'Fruits',
  ice = 'Ice'
}
export enum IngredientUnit {
  ml = 'ml',
  g = 'g',
  piece = 'piece'
}

