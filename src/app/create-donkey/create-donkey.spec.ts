import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDonkey } from './create-donkey';

describe('CreateDonkey', () => {
  let component: CreateDonkey;
  let fixture: ComponentFixture<CreateDonkey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDonkey],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDonkey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
