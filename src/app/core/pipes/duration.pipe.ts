import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(seconds: number): string {
    let m = Math.floor((seconds / 60) % 60);
    let minute = (m < 10)? '0' + m : m;
    let s = seconds % 60;
    let second = (s < 10)? '0' + s : s;

    return minute + ':' + second;
  }

}
