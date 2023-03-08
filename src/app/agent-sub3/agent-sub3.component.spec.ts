import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSub3Component } from './agent-sub3.component';

describe('AgentSub3Component', () => {
  let component: AgentSub3Component;
  let fixture: ComponentFixture<AgentSub3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSub3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
