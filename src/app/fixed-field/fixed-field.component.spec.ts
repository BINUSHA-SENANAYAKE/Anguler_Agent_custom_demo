import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedFieldComponent } from './fixed-field.component';

describe('FixedFieldComponent', () => {
  let component: FixedFieldComponent;
  let fixture: ComponentFixture<FixedFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
