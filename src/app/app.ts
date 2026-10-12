import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bienvenue sur le site de Anissa !');
}
