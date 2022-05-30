import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsFormComponent } from './cocktails-form.component';

describe('CocktailsFormComponent', () => {
  let component: CocktailsFormComponent;
  let fixture: ComponentFixture<CocktailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocktailsFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
