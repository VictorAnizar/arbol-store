import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumaPipe'
})
export class SumaPipePipe implements PipeTransform {

  transform(value=0, value2=0): number {
    return value + value2;
  }

}
