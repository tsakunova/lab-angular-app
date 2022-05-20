import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailsPageComponent } from './coctails-page.component';

describe('CoctailsPageComponent', () => {
  let component: CoctailsPageComponent;
  let fixture: ComponentFixture<CoctailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoctailsPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
