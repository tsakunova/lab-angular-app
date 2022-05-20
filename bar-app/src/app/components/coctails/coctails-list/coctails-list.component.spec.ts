import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailsListComponent } from './coctails-list.component';

describe('CoctailsListComponent', () => {
  let component: CoctailsListComponent;
  let fixture: ComponentFixture<CoctailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoctailsListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
