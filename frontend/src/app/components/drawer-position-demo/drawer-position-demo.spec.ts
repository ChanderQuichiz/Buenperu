import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerPositionDemo } from './drawer-position-demo';

describe('DrawerPositionDemo', () => {
  let component: DrawerPositionDemo;
  let fixture: ComponentFixture<DrawerPositionDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerPositionDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerPositionDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
