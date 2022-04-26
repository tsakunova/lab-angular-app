export interface IIngredientItem {
     id: number;
    name: string;
    type: string;
    unit: string;
}
export type IngredientForSave = Omit<IIngredientItem, 'id'>;

export enum IngredientType {
  alco = 'Крепкий алкоголь',
  vermut = 'Вермуты',
  bitter = 'Ликеры и биттеры',
  vine = 'Вина',
  beer = 'Пиво и сидр',
  syrop = 'Сиропы',
  water = 'Вода и напитки',
  fruits = 'Фрукты',
  ice = 'Лед'
}
export enum IngredientUnit {
  ml = 'мл',
  g = 'г',
  piece = 'шт'
}

