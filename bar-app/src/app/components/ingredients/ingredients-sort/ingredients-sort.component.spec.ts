import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsSortComponent } from './ingredients-sort.component';

describe('IngredientsSortComponent', () => {
  let component: IngredientsSortComponent;
  let fixture: ComponentFixture<IngredientsSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientsSortComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
