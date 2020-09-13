import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: any,state:String): any {
    let city={}
    for(let i of value){
      if(i.State===state)
      city[i.City]=0;
    }
    value=Object.keys(city)
    if(value.length>0){
      value.sort(function(a,b){
       return (a.localeCompare(b));
      })
      return value}
      else
      return [];
  }

}
