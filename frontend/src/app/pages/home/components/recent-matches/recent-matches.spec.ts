import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMatches } from './recent-matches';

describe('RecentMatches', () => {
  let component: RecentMatches;
  let fixture: ComponentFixture<RecentMatches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentMatches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentMatches);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
