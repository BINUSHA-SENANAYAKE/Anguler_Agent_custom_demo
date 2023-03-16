import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpBodyUpComponent } from './pop-up-body-up.component';

describe('PopUpBodyUpComponent', () => {
  let component: PopUpBodyUpComponent;
  let fixture: ComponentFixture<PopUpBodyUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpBodyUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpBodyUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
