import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { StatusColorPipe } from '../pipes/status-color.pipe';
import { LoginEmojiPipe } from '../pipes/login-emoji.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    StatusColorPipe,
    LoginEmojiPipe,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() data!: User;
}
