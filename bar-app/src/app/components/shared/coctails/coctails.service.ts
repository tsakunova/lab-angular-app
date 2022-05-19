import {Injectable} from '@angular/core';
import {ICoctailItem} from "./coctail-item.model";
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoctailsService {

  constructor(private http: HttpClient) {
  }

  getCoctails(): Observable<ICoctailItem[]> {
    return this.http.get<ICoctailItem[]>('http://localhost:3000/coctails')
      .pipe(delay(500))
  }

  getCoctail(id: any): Observable<ICoctailItem> {
    return this.http.get<ICoctailItem>(`http://localhost:3000/coctails/${id}`)
      .pipe(delay(500))
  }
}
