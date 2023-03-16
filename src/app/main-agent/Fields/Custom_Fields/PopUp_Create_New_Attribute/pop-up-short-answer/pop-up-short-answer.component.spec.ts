import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpShortAnswerComponent } from './pop-up-short-answer.component';

describe('PopUpShortAnswerComponent', () => {
  let component: PopUpShortAnswerComponent;
  let fixture: ComponentFixture<PopUpShortAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpShortAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpShortAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
