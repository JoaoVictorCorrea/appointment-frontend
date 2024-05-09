import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: string): string {
    if (!time) {
      return "";
    }
    else {
      const parts = time.split(":");

      if (parts.length === 3) {
        return `${parts[0]}:${parts[1]}`;
      }
      else {
        return time;
      }
    }
  }
}
