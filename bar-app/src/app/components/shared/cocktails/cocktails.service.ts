import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  catchError, delay, Observable, throwError
} from 'rxjs';
import { ICocktailItem, ICocktailTypes } from './cocktail-item.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  constructor(private http: HttpClient) {
  }

  getCocktailsTypes(): Observable<ICocktailTypes[]> {
    return this.http.get<ICocktailTypes[]>('http://localhost:3000/typecocktails');
  }

  editCocktailsTypes(id: number, data: ICocktailTypes) {
    return this.http.put<void>(`http://localhost:3000/typecocktails/${id}`, data);
  }

  getCocktails(types: number []): Observable<ICocktailItem[]> {
    let params = new HttpParams();
    types.forEach((item: number) => params = params.append('id', item));
    return this.http.get<ICocktailItem[]>('http://localhost:3000/cocktails', { params })
      .pipe(delay(500));
  }

  getCocktail(id: string|null|number): Observable<ICocktailItem> {
    return this.http.get<ICocktailItem>(`http://localhost:3000/cocktails/${id}`)
      .pipe(
        delay(500),
        catchError(err => {
          console.log('Error:', err.message);
          return throwError(err);
        })
      );
  }

  editFavoriteField(id: number, data: ICocktailItem) {
    return this.http.put<void>(`http://localhost:3000/cocktails/${id}`, data);
  }

  addCocktail(newItem: ICocktailItem): Observable<ICocktailItem> {
    return this.http.post<ICocktailItem>('http://localhost:3000/cocktails', newItem);
  }
}
