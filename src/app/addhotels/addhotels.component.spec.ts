import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhotelsComponent } from './addhotels.component';

describe('AddhotelsComponent', () => {
  let component: AddhotelsComponent;
  let fixture: ComponentFixture<AddhotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
