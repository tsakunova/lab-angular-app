import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailsCardComponent } from './coctails-card.component';

describe('CoctailsCardComponent', () => {
  let component: CoctailsCardComponent;
  let fixture: ComponentFixture<CoctailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoctailsCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
