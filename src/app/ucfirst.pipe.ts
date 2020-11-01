import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): any {
    //the quick brown fox
    //[the, quick, brown, fox]
   return value.split(' ')
      .map((word: string) => ' ' + word.substring(0, 1).toUpperCase() + '' + word.substring(1)).join('');
  }

}
