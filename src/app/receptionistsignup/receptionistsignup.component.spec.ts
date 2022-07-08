import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistsignupComponent } from './receptionistsignup.component';

describe('ReceptionistsignupComponent', () => {
  let component: ReceptionistsignupComponent;
  let fixture: ComponentFixture<ReceptionistsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
