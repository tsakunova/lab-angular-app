import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopFiveComponent } from './home-top-five.component';

describe('HomeTopFiveComponent', () => {
  let component: HomeTopFiveComponent;
  let fixture: ComponentFixture<HomeTopFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTopFiveComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
