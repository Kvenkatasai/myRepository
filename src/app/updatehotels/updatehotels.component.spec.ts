import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehotelsComponent } from './updatehotels.component';

describe('UpdatehotelsComponent', () => {
  let component: UpdatehotelsComponent;
  let fixture: ComponentFixture<UpdatehotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatehotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
