import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsCardComponent } from './cocktails-card.component';

describe('CocktailsCardComponent', () => {
  let component: CocktailsCardComponent;
  let fixture: ComponentFixture<CocktailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocktailsCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
