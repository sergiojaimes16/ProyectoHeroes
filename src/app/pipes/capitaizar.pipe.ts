import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitaizar'
})
export class CapitaizarPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

}
