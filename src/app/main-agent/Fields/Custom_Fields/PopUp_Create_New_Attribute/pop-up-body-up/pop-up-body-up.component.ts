import { Component } from '@angular/core';



@Component({
  selector: 'app-pop-up-body-up',
  templateUrl: './pop-up-body-up.component.html',
  styleUrls: ['./pop-up-body-up.component.css']
})
export class PopUpBodyUpComponent {
  selectedOption: any;
  constructor() {
    this.selectedOption = 'PopUpShortAnswerComponent'; // Set the initial value of the selected option
  }
}

