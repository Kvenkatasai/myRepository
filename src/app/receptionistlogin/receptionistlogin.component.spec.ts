import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistloginComponent } from './receptionistlogin.component';

describe('ReceptionistloginComponent', () => {
  let component: ReceptionistloginComponent;
  let fixture: ComponentFixture<ReceptionistloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
