import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: any): any {
    let state={}
    for(let i of value){
      state[i.State]=0;
    }
    
    value=Object.keys(state)
    if(value.length>0){
      value.sort(function(a,b){
       return (a.localeCompare(b));
      })
      return value}
      else
      return [];
  }

}
