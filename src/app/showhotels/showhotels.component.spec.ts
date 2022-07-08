import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhotelsComponent } from './showhotels.component';

describe('ShowhotelsComponent', () => {
  let component: ShowhotelsComponent;
  let fixture: ComponentFixture<ShowhotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowhotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
