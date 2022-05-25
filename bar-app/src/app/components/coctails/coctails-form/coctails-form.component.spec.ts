import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailsFormComponent } from './coctails-form.component';

describe('CoctailsFormComponent', () => {
  let component: CoctailsFormComponent;
  let fixture: ComponentFixture<CoctailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoctailsFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
