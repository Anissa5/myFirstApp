import { Routes } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { SignUp } from './sign-up/sign-up';
import { CreateDonkey } from './create-donkey/create-donkey';
import { Home } from './home/home';

export const routes: Routes = [

  {
    path: 'sign-up',
    component: SignUp
  },
  {
    path: 'user',
    component: UserProfile
  },
  {
  path: 'create',
  component: CreateDonkey
  },
  {
    path: '',
    component: Home
  }

];
