import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'myorder'
})
export class MyorderPipe implements PipeTransform {

  transform(value: any):any {
    if(value.length>0){
    value.sort(function(a,b){
     return (new Date(a.date).getTime()-new Date(b.date).getTime())*-1;
    })
    return value}
    else
    return [];
  }
    
  }
  

