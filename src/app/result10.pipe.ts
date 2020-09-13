import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result10'
})
export class Result10Pipe implements PipeTransform {

  transform(values: any): any {
   var date = new Date();
  var datestr=date.toLocaleDateString()
  var datematch=datestr.substring(6,10)+datestr.substring(3,5)+datestr.substring(0,2)
  
  
  values=values.filter(value=>{
    if(value.bidid.match(datematch)) return value
  })
 return values;

  }

}
