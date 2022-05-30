import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsCurrentCardComponent } from './cocktails-current-card.component';

describe('CocktailsCurrentCardComponent', () => {
  let component: CocktailsCurrentCardComponent;
  let fixture: ComponentFixture<CocktailsCurrentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocktailsCurrentCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsCurrentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
