import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLastCocktailComponent } from './home-last-cocktail.component';

describe('HomeLastCocktailComponent', () => {
  let component: HomeLastCocktailComponent;
  let fixture: ComponentFixture<HomeLastCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLastCocktailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLastCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
