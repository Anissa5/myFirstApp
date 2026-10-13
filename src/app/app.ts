import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, NgClass, NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bienvenue sur le site de Anissa !');

isThisIngredientVital = true;
showList = true;

ingredients = ['Cornichons', 'Pommes de terre', 'Fromage'];

ajouterJambon() {
  if (!this.ingredients.includes('Jambon')) {
    this.ingredients.push('Jambon');
  }
}

}
