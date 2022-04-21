import { Injectable } from '@angular/core';
import {INGREDIENTS} from "./ingredients";
import {IIngredientItem} from "./ingredient-item.model";

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {

  constructor() { }
  getIngredients(): IIngredientItem[]{
    return INGREDIENTS
  }
  getIngredient(id: number): IIngredientItem{
    return INGREDIENTS[id]
  }
  addIngredient(name: string, type: string, unit: string): void {
    const newIngredient: IIngredientItem = {
      'id': INGREDIENTS.length,
      'name': name,
      'type': type,
      'unit': unit
    };
    INGREDIENTS.push(newIngredient);
  }
}
