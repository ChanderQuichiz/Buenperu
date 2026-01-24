import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardtwo } from './cardtwo';

describe('Cardtwo', () => {
  let component: Cardtwo;
  let fixture: ComponentFixture<Cardtwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardtwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardtwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
