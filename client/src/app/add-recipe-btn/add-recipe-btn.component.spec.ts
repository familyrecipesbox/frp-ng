import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeBtnComponent } from './add-recipe-btn.component';

describe('AddRecipeBtnComponent', () => {
  let component: AddRecipeBtnComponent;
  let fixture: ComponentFixture<AddRecipeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
