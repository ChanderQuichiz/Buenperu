import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teamresult } from './teamresult';

describe('Teamresult', () => {
  let component: Teamresult;
  let fixture: ComponentFixture<Teamresult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teamresult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teamresult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
