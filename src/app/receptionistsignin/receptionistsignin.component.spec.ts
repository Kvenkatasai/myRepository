import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistsigninComponent } from './receptionistsignin.component';

describe('ReceptionistsigninComponent', () => {
  let component: ReceptionistsigninComponent;
  let fixture: ComponentFixture<ReceptionistsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistsigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
