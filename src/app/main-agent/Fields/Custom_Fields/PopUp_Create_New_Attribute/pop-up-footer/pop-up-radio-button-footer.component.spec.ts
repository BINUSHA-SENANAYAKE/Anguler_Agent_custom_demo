import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRadioButtonFooterComponent } from './pop-up-radio-button-footer.component';

describe('PopUpRadioButtonFooterComponent', () => {
  let component: PopUpRadioButtonFooterComponent;
  let fixture: ComponentFixture<PopUpRadioButtonFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpRadioButtonFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpRadioButtonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
