import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform<T>(items: any, search = '') {
    if (!search.trim()) {
      return items;
    }

    return items.filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase()));
  }
}
