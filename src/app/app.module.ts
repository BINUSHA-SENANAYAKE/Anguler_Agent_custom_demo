import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAgentComponent } from './main-agent/main-agent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgentSub1Component } from './main-agent/agent-sub1/agent-sub1.component';
import { AgentSub2Component } from './main-agent/agent-sub2/agent-sub2.component';
import { AgentSub3Component } from './main-agent/agent-sub3/agent-sub3.component';
import { FixedFieldComponent } from './main-agent/Fields/fixed-field/fixed-field.component';
import { ProfileCustomFieldComponent } from './main-agent/Fields/Custom_Fields/profile-custom-field/profile-custom-field.component';
import { DSRCustomFieldComponent } from './main-agent/Fields/Custom_Fields/dsr-custom-field/dsr-custom-field.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAgentComponent,
    AgentSub1Component,
    AgentSub2Component,
    AgentSub3Component,
    FixedFieldComponent,
    ProfileCustomFieldComponent,
    DSRCustomFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
