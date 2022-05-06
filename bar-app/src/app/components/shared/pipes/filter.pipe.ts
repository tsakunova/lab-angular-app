import { Pipe, PipeTransform } from '@angular/core';
import {ICoctailItem} from "../coctails/coctail-item.model";
import {IIngredientItem} from "../ingredients/ingredient-item.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T>(items: any, search: string = '') {
    // console.log(items, search)
    if (!search.trim()){
      return items;
    }

    return items.filter( (item: any) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
