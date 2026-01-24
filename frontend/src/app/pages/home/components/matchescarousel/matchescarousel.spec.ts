import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matchescarousel } from './matchescarousel';

describe('Matchescarousel', () => {
  let component: Matchescarousel;
  let fixture: ComponentFixture<Matchescarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matchescarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matchescarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
