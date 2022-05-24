import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybarPageComponent } from './mybar-page.component';

describe('MybarPageComponent', () => {
  let component: MybarPageComponent;
  let fixture: ComponentFixture<MybarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
