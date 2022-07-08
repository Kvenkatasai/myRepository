import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletehotelsComponent } from './deletehotels.component';

describe('DeletehotelsComponent', () => {
  let component: DeletehotelsComponent;
  let fixture: ComponentFixture<DeletehotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletehotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletehotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
