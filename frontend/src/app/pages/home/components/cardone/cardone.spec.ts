import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardone } from './cardone';

describe('Cardone', () => {
  let component: Cardone;
  let fixture: ComponentFixture<Cardone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
