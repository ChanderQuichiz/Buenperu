import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matchestable } from './matchestable';

describe('Matchestable', () => {
  let component: Matchestable;
  let fixture: ComponentFixture<Matchestable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matchestable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matchestable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
