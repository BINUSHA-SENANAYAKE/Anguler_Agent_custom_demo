import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSub2Component } from './agent-sub2.component';

describe('AgentSub2Component', () => {
  let component: AgentSub2Component;
  let fixture: ComponentFixture<AgentSub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSub2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
