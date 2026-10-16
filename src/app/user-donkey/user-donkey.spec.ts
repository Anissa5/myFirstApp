import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDonkey } from './user-donkey';

describe('UserDonkey', () => {
  let component: UserDonkey;
  let fixture: ComponentFixture<UserDonkey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDonkey],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDonkey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
