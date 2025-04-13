import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loginEmoji',
  standalone: true,
})
export class LoginEmojiPipe implements PipeTransform {
  transform(lastLogin: Date): string {
    const daysAgo =
      (Date.now() - new Date(lastLogin).getTime()) / (1000 * 60 * 60 * 24);
    if (daysAgo <= 7) return '🔥';
    if (daysAgo <= 30) return '💤';
    if (daysAgo <= 90) return '🦥';
    return '👻';
  }
}
