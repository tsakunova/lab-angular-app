import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { IHistoryItem } from './history-item.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private http: HttpClient) { }

  getHistoryItems(): Observable<IHistoryItem[]> {
    return this.http.get<IHistoryItem[]>('http://localhost:3000/history?_expand=coctail')
      .pipe(delay(500));
  }

  addHistoryItem(newItem: IHistoryItem): Observable<IHistoryItem> {
    return this.http.post<IHistoryItem>('http://localhost:3000/history', newItem);
  }

  deleteHistoryItem(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/history/${id}`);
  }
}
