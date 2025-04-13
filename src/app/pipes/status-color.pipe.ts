import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor',
  standalone: true,
})
export class StatusColorPipe implements PipeTransform {
  transform(status: string): string {
    switch (status) {
      case 'active':
        return 'green';
      case 'inactive':
        return 'yellow';
      case 'banned':
        return 'red';
      default:
        return 'black';
    }
  }
}
