import { Injectable } from '@angular/core';
import { INGREDIENTS_TYPES, INGREDIENTS_UNIT} from "./ingredients";
import {IIngredientItem, IngredientForSave, IngredientType, IngredientUnit} from "./ingredient-item.model";
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {
  private ingredientTypes = [...INGREDIENTS_TYPES];
  private ingredientUnits = [...INGREDIENTS_UNIT];

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<IIngredientItem[]>{
    return this.http.get<IIngredientItem[]>('http://localhost:3000/ingredients')
      .pipe(delay(500))
  }

  /*getIngredient(id: number): IIngredientItem | undefined {
    return this.ingredients.find(item => item.id === id );
  }*/

  addIngredient(newItem: IIngredientItem): Observable<IIngredientItem> {
    return this.http.post<IIngredientItem>('http://localhost:3000/ingredients', newItem)
  }

  getIngredientsTypes(): Array<{id: number, name: IngredientType}> {
    return this.ingredientTypes;
  }

  getIngredientsUnits(): Array<{id: number, name: IngredientUnit}> {
    return this.ingredientUnits;
  }

  deleteIngredients(id:number): Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/ingredients/${id}`)
  }
}
