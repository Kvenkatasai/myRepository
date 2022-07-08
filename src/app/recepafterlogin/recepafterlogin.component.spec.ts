import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepafterloginComponent } from './recepafterlogin.component';

describe('RecepafterloginComponent', () => {
  let component: RecepafterloginComponent;
  let fixture: ComponentFixture<RecepafterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepafterloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
