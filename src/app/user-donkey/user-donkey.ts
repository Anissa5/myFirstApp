import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Donkey } from '../models/donkey';

@Component({
  selector: 'app-user-donkey',
  imports: [FormsModule],
  templateUrl: './user-donkey.html',
  styleUrl: './user-donkey.css',
})
export class UserDonkey {
  @Input() donkeys: Donkey[] = [];
  @Output() adoptionCancelled = new EventEmitter<Donkey>();

  editingDonkey: Donkey | null = null;
  editedDonkey: Donkey | null = null;

  startEdit(donkey: Donkey): void {
  this.editingDonkey = donkey;
  this.editedDonkey = { ...donkey };
}

saveEdit(): void {
  if (this.editingDonkey && this.editedDonkey) {
    Object.assign(this.editingDonkey, this.editedDonkey);
  }

  this.cancelEdit();
}

cancelAdoption(donkey: Donkey): void {
  const confirmed = window.confirm(
    `Veux-tu vraiment annuler l'adoption de ${donkey.name} ?`
  );

  if (confirmed) {
    this.adoptionCancelled.emit(donkey);
  }
}

cancelEdit(): void {
  this.editingDonkey = null;
  this.editedDonkey = null;
}
}
