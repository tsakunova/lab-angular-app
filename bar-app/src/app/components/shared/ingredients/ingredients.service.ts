import { Injectable } from '@angular/core';
import {INGREDIENTS, INGREDIENTS_TYPES, INGREDIENTS_UNIT} from "./ingredients";
import {IIngredientItem, IngredientForSave, IngredientType, IngredientUnit} from "./ingredient-item.model";

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {
  private ingredients = [...INGREDIENTS];
  private ingredientTypes = [...INGREDIENTS_TYPES];
  private ingredientUnits = [...INGREDIENTS_UNIT];
  constructor() { }
  getIngredients(): IIngredientItem[]{
    return this.ingredients
  }
  getIngredient(id: number): IIngredientItem | undefined {
    return this.ingredients.find(item => item.id === id );
  }
  addIngredient(item: IngredientForSave) {
    const newIngredient: IIngredientItem = {
      'id': this.ingredients[this.ingredients.length-1].id+1,
      'name': item.name,
      'type': this.ingredientTypes[+item.type].name,
      'unit': this.ingredientUnits[+item.type].name,
    };
    this.ingredients = [...this.ingredients, newIngredient];
    return this.ingredients
  }
  getIngredientsTypes(): Array<{id: number, name: IngredientType}> {
    return this.ingredientTypes
  }
  getIngredientsUnits(): Array<{id: number, name: IngredientUnit}> {
    return this.ingredientUnits
  }
}
