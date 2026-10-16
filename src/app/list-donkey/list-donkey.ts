import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Donkey } from '../models/donkey';

@Component({
  selector: 'app-list-donkey',
  imports: [FormsModule],
  templateUrl: './list-donkey.html',
  styleUrl: './list-donkey.css',
})
export class ListDonkey {

  @Input() donkeys: Donkey[] = [];
  @Output() donkeyRemoved = new EventEmitter<Donkey>();
  @Output() donkeyAdopted = new EventEmitter<Donkey>();

  hoveredDonkey: Donkey | null = null;
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

cancelEdit(): void {
  this.editingDonkey = null;
  this.editedDonkey = null;
}

  confirmRemoval(donkey: Donkey): void {
  const confirmed = window.confirm(
    `Veux-tu vraiment supprimer ${donkey.name} ?`
  );

  if (confirmed) {
    this.donkeyRemoved.emit(donkey);
  }
}

}
