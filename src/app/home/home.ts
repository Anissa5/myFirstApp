import { Component } from '@angular/core';
import { ListDonkey } from '../list-donkey/list-donkey';
import { UserDonkey } from '../user-donkey/user-donkey';
import { CreateDonkey } from '../create-donkey/create-donkey';
import { Donkey } from '../models/donkey';

@Component({
  selector: 'app-home',
  imports: [ListDonkey, UserDonkey, CreateDonkey],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  donkeys: Donkey[] = [
  {
    name: 'Balthazar',
    origin: 'France',
    birthDate: '2022-05-10',
    photo: '/anebalthazar.jpg',
    isAdopted: false
  },
  {
    name: 'Marguerite',
    origin: 'Espagne',
    birthDate: '2023-08-15',
    photo: '/anemarguerite.jpg',
    isAdopted: false
  }
];
  userDonkeys: Donkey[] = [];

filterStatus: 'all' | 'available' | 'adopted' = 'all';

constructor() {
  const savedDonkeys = localStorage.getItem('donkeys');

  if (savedDonkeys) {
    this.donkeys = JSON.parse(savedDonkeys);
    this.userDonkeys = this.donkeys.filter(
      donkey => donkey.isAdopted
    );
  }
}

private saveDonkeys(): void {
  localStorage.setItem('donkeys', JSON.stringify(this.donkeys));
}

  addDonkey(donkey: Donkey): void {
    this.donkeys = [...this.donkeys, donkey];
    this.saveDonkeys();
  }
  removeDonkey(donkey: Donkey): void {
    this.donkeys = this.donkeys.filter(
      item => item !== donkey
    );
    this.userDonkeys = this.userDonkeys.filter(
      item => item !== donkey
    );
    this.saveDonkeys();
  }

  adoptDonkey(donkey: Donkey): void {
    if (donkey.isAdopted) {
      return;
    }
      donkey.isAdopted = true;
      this.userDonkeys = [...this.userDonkeys, donkey];
      this.saveDonkeys();
    }

  cancelAdoption(donkey: Donkey): void {
      donkey.isAdopted = false;
      this.userDonkeys = this.userDonkeys.filter(
      item => item !== donkey
      );
      this.saveDonkeys();
  }

  get availableDonkeysCount(): number {
  return this.donkeys.filter(
    donkey => !donkey.isAdopted
  ).length;
  }

  get filteredDonkeys(): Donkey[] {
  if (this.filterStatus === 'available') {
    return this.donkeys.filter(
      donkey => !donkey.isAdopted
    );
  }

  if (this.filterStatus === 'adopted') {
    return this.donkeys.filter(
      donkey => donkey.isAdopted
    );
  }

  return this.donkeys;
}
}
