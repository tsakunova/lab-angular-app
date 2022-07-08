import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMyBar } from './mybar-item.model';

@Injectable({
  providedIn: 'root'
})
export class MybarService {
  items: IMyBar;

  constructor(private http: HttpClient) { }

  getMyBarItems(): Observable<IMyBar> {
    return this.http.get<IMyBar>('http://localhost:3000/mybar')
      .pipe(delay(500));
  }

  reloadInBarItems(newItem: IMyBar): Observable<IMyBar> {
    return this.http.patch<IMyBar>('http://localhost:3000/mybar', newItem);
  }

  reloadToBuyItems(newItem: IMyBar): Observable<IMyBar> {
    return this.http.patch<IMyBar>('http://localhost:3000/mybar', newItem);
  }
}
