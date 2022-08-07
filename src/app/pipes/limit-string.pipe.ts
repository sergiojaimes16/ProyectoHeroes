import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitString'
})
export class LimitStringPipe implements PipeTransform {

  transform(value: string, cantidad: number): string {
    // let limite = parseInt(cantidad);
    return value.length > cantidad ? value.substring(0,cantidad)+"..." :   value;
  }

}
