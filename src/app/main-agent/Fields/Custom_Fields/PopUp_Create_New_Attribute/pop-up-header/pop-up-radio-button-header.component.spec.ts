import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRadioButtonHeaderComponent } from './pop-up-radio-button-header.component';

describe('PopUpRadioButtonHeaderComponent', () => {
  let component: PopUpRadioButtonHeaderComponent;
  let fixture: ComponentFixture<PopUpRadioButtonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpRadioButtonHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpRadioButtonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
