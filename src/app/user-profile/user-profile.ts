import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  user = {
  name: 'Doe',
  firstName: 'John',
  age: 25,
  quote: "",
  photo: "https://randomuser.me/api/portraits/lego/2.jpg"
  }

  showAge = true;

  toggleAge() {
  this.showAge = !this.showAge;
  }
}
