import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonkey } from './list-donkey';

describe('ListDonkey', () => {
  let component: ListDonkey;
  let fixture: ComponentFixture<ListDonkey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDonkey],
    }).compileComponents();

    fixture = TestBed.createComponent(ListDonkey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
