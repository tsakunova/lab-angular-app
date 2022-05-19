import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T>(items: any, search: string = '') {
    if (!search.trim()) {
      return items;
    }

    return items.filter((item: any) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
