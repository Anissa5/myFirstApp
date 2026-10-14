import { Routes } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { SignUp } from './sign-up/sign-up';

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
    path: '',
    component: UserProfile
  }

];
