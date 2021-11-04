import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabcase'
})
export class KebabcasePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace(' ', '-');
  }

}
