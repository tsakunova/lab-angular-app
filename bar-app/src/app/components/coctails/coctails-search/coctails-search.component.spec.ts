import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailsSearchComponent } from './coctails-search.component';

describe('CoctailsSearchComponent', () => {
  let component: CoctailsSearchComponent;
  let fixture: ComponentFixture<CoctailsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoctailsSearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
