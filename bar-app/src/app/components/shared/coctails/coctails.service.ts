import { Injectable } from '@angular/core';
import {ICoctailItem} from "./coctail-item.model";
import {COCTAILS} from "./coctails";

@Injectable({
  providedIn: 'root'
})
export class CoctailsService {

  constructor() { }
  getCoctails(): ICoctailItem[]{
    return COCTAILS
  }
  getCoctail(id: any): ICoctailItem{
    return COCTAILS[id]
  }
}
