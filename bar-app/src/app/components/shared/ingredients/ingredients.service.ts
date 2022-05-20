import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { INGREDIENTS_TYPES, INGREDIENTS_UNIT } from './ingredients';
import { IIngredientItem, IngredientType, IngredientUnit } from './ingredient-item.model';

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {
  private ingredientTypes = [...INGREDIENTS_TYPES];

  private ingredientUnits = [...INGREDIENTS_UNIT];

  constructor(private http: HttpClient) {
  }

  getIngredients(types: string[]): Observable<IIngredientItem[]> {
    let params = new HttpParams();
    types.forEach((item) => params = params.append('type', item));

    return this.http.get<IIngredientItem[]>('http://localhost:3000/ingredients', { params })
      .pipe(delay(500));
  }

  editIngredient(id: number, data: IIngredientItem) {
    return this.http.put<void>(`http://localhost:3000/ingredients/${id}`, data);
  }

  addIngredient(newItem: IIngredientItem): Observable<IIngredientItem> {
    return this.http.post<IIngredientItem>('http://localhost:3000/ingredients', newItem);
  }

  getIngredientsTypes(): Array<{ id: number; name: IngredientType }> {
    return this.ingredientTypes;
  }

  getIngredientsUnits(): Array<{ id: number; name: IngredientUnit }> {
    return this.ingredientUnits;
  }

  deleteIngredients(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/ingredients/${id}`);
  }
}
