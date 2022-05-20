import { Pipe, PipeTransform } from '@angular/core';
import { sortDirectionCoeff, sortDirectionType, sortType } from '../enums';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(values: any, type: string, direction: sortDirectionType) {
    if (type === sortType.name) {
      return [...values].sort((a: any, b: any) => sortDirectionCoeff[direction] * (a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1));
    } if (type === sortType.type) {
      return [...values].sort((a: any, b: any) => sortDirectionCoeff[direction] * (a.type <= b.type ? -1 : 1));
    } return values;
  }
}
