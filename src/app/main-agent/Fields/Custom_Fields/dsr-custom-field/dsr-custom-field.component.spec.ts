import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSRCustomFieldComponent } from './dsr-custom-field.component';

describe('DSRCustomFieldComponent', () => {
  let component: DSRCustomFieldComponent;
  let fixture: ComponentFixture<DSRCustomFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSRCustomFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSRCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
