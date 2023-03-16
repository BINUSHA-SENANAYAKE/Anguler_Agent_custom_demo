import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCustomFieldComponent } from './profile-custom-field.component';

describe('ProfileCustomFieldComponent', () => {
  let component: ProfileCustomFieldComponent;
  let fixture: ComponentFixture<ProfileCustomFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCustomFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
