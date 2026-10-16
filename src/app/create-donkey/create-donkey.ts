import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Donkey } from '../models/donkey';

@Component({
  selector: 'app-create-donkey',
  imports: [FormsModule],
  templateUrl: './create-donkey.html',
  styleUrl: './create-donkey.css',
})
export class CreateDonkey {
  name = '';
  origin = '';
  birthDate = '';
  photo = '';
  errorMessage = '';

  createdDonkey: Donkey | null = null;

  createDonkey(): void {
    if (
      !this.name.trim() ||
      !this.origin.trim() ||
      !this.birthDate
    ) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      return;
    }
    this.errorMessage = '';

  const newDonkey: Donkey = {
    name: this.name,
    origin: this.origin,
    birthDate: this.birthDate,
    photo: this.photo,
    isAdopted: false
    };

    this.createdDonkey = newDonkey;
    this.donkeyCreated.emit(newDonkey);
    this.name = '';
    this.origin = '';
    this.birthDate = '';
    this.photo = '';
  }

  onPhotoSelected(event: Event): void {
  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    return;
  }

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    this.photo = reader.result as string;
  };

  reader.readAsDataURL(file);
}

  @Output() donkeyCreated = new EventEmitter<Donkey>();
}
