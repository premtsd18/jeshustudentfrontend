import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetable'
})
export class DatetablePipe implements PipeTransform {

  transform(value: any): any {
    
    return value.substring(0,10)+"\n"+value.substring(11,19);
  }

}
