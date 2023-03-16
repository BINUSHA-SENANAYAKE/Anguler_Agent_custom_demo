import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainAgentComponent} from './main-agent/main-agent.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgentSub1Component} from './main-agent/agent-sub1/agent-sub1.component';
import {AgentSub2Component} from './main-agent/agent-sub2/agent-sub2.component';
import {AgentSub3Component} from './main-agent/agent-sub3/agent-sub3.component';
import {FixedFieldComponent} from './main-agent/Fields/fixed-field/fixed-field.component';
import {ProfileCustomFieldComponent} from "./main-agent/Fields/Custom_Fields/Custom_Fields_Main_Ui/profile-custom-field/profile-custom-field.component";
import {DSRCustomFieldComponent} from "./main-agent/Fields/Custom_Fields/Custom_Fields_Main_Ui/dsr-custom-field/dsr-custom-field.component";
import {PopUpRadioButtonComponent} from "./main-agent/Fields/Custom_Fields/PopUp_Create_New_Attribute/pop-up-radio-button/pop-up-radio-button.component";
import {PopUpRadioButtonHeaderComponent} from "./main-agent/Fields/Custom_Fields/PopUp_Create_New_Attribute/pop-up-header/pop-up-radio-button-header.component";
import {PopUpRadioButtonFooterComponent} from "./main-agent/Fields/Custom_Fields/PopUp_Create_New_Attribute/pop-up-footer/pop-up-radio-button-footer.component";
import {PopUpBodyUpComponent} from "./main-agent/Fields/Custom_Fields/PopUp_Create_New_Attribute/pop-up-body-up/pop-up-body-up.component";
import {PopUpShortAnswerComponent} from "./main-agent/Fields/Custom_Fields/PopUp_Create_New_Attribute/pop-up-short-answer/pop-up-short-answer.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainAgentComponent,
    AgentSub1Component,
    AgentSub2Component,
    AgentSub3Component,
    FixedFieldComponent,
    ProfileCustomFieldComponent,
    DSRCustomFieldComponent,
    PopUpRadioButtonComponent,
    PopUpRadioButtonHeaderComponent,
    PopUpRadioButtonFooterComponent,
    PopUpBodyUpComponent,
    PopUpShortAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
