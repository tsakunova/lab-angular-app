import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLastCoctailComponent } from './home-last-coctail.component';

describe('HomeLastCoctailComponent', () => {
  let component: HomeLastCoctailComponent;
  let fixture: ComponentFixture<HomeLastCoctailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLastCoctailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLastCoctailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
