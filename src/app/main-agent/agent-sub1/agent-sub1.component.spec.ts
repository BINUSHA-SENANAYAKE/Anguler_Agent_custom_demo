import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSub1Component } from './agent-sub1.component';

describe('AgentSub1Component', () => {
  let component: AgentSub1Component;
  let fixture: ComponentFixture<AgentSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSub1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
