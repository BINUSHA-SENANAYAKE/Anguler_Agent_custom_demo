import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAgentComponent } from './main-agent.component';

describe('MainAgentComponent', () => {
  let component: MainAgentComponent;
  let fixture: ComponentFixture<MainAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
