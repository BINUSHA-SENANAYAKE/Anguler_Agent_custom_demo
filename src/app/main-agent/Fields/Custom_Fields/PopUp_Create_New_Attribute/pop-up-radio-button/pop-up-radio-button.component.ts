import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up-radio-button',
  templateUrl: './pop-up-radio-button.component.html',
  styleUrls: ['./pop-up-radio-button.component.css']
})
export class PopUpRadioButtonComponent {
  fields: any[] = [];

  addField() {
    this.fields.push({});
  }

  removeField(field: any) {
    const index = this.fields.indexOf(field);
    if (index >= 0) {
      this.fields.splice(index, 1);
    }
  }
}
