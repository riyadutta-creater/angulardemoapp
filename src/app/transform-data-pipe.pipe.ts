import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDataPipe'
})
export class TransformDataPipePipe implements PipeTransform {
  result:string="";
  transform(value: string, char1: number): string {
    for(let x=0;x<char1;x++){
      this.result += value+" ";
    }
    return this.result;
  }
}
