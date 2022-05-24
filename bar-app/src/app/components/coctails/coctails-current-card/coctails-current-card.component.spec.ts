import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailsCurrentCardComponent } from './coctails-current-card.component';

describe('CoctailsCurrentCardComponent', () => {
  let component: CoctailsCurrentCardComponent;
  let fixture: ComponentFixture<CoctailsCurrentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoctailsCurrentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailsCurrentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
