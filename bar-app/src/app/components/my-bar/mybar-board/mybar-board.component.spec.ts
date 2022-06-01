import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybarBoardComponent } from './mybar-board.component';

describe('MybarBoardComponent', () => {
  let component: MybarBoardComponent;
  let fixture: ComponentFixture<MybarBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MybarBoardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybarBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
