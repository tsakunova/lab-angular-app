import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { ICoctailItem, ICoctailTypes } from './coctail-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoctailsService {
  constructor(private http: HttpClient) {
  }

  getCoctailsTypes(): Observable<ICoctailTypes[]> {
    return this.http.get<ICoctailTypes[]>('http://localhost:3000/typecoctails');
  }

  editCoctailsTypes(id: number, data: ICoctailTypes) {
    return this.http.put<void>(`http://localhost:3000/typecoctails/${id}`, data);
  }

  getCoctails(types: any): Observable<ICoctailItem[]> {
    let params = new HttpParams();
    types.forEach((item: any) => params = params.append('id', item));
    return this.http.get<ICoctailItem[]>('http://localhost:3000/coctails', { params })
      .pipe(delay(500));
  }

  getCoctail(id: string|null|number): Observable<ICoctailItem> {
    return this.http.get<ICoctailItem>(`http://localhost:3000/coctails/${id}`)
      .pipe(delay(500));
  }

  editFavoriteField(id: number, data: ICoctailItem) {
    return this.http.put<void>(`http://localhost:3000/coctails/${id}`, data);
  }

  addCoctail(newItem: ICoctailItem): Observable<ICoctailItem> {
    return this.http.post<ICoctailItem>('http://localhost:3000/coctails', newItem);
  }
}
