export interface IIngredientItem {
  id?: number;
  name: string;
  type: string;
  unit: string;
}

export enum IngredientTypeModel {
  alco = 'Strong spirits',
  vermut = 'Vermouth',
  bitter = 'Liqueurs and Bitters',
  vine = 'Wines',
  beer = 'Beer and cider',
  syrop = 'Syrups',
  water = 'Water and drinks',
  fruits = 'Fruits',
  ice = 'Ice',
  sweets = 'Sweet treats',
  plants = 'Plants'
}

export enum IngredientUnitModel {
  ml = 'ml',
  g = 'g',
  piece = 'piece'
}
