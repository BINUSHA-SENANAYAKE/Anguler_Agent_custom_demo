import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRadioButtonComponent } from './pop-up-radio-button.component';

describe('PopUpRadioButtonComponent', () => {
  let component: PopUpRadioButtonComponent;
  let fixture: ComponentFixture<PopUpRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
