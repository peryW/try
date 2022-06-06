import { Pipe, PipeTransform } from '@angular/core';
import { recipe } from 'src/models/Recipe';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: number): string {
    let newStr,minutes;
    if(value<60){
      newStr= "00:"+value;
    newStr+=" דקות"
    }
    
    else{
      minutes=value%60;
      value-=minutes;
      newStr=value/60+":"+minutes;
    }
   
    return newStr;
  }

}
